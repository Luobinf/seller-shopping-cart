<template>
  <div class="CartControl">
    <button class="decrease" @click="decreaseShopCart" v-if="count">-</button>
    <span class="count" v-if="count">{{count}}</span>
    <button class="increase" @click="increaseShopCart">+</button>
  </div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
import Icon from './Icon.vue'
export default {
  name: 'CartControl',
  data () {
    return {

    }
  },
  components: {
    Icon
  },
  props: {
    selectFood: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    ...mapState({
      count: function(state){
        let cartItem = state.cart.items.find(item => item.name === this.selectFood.name)
        if(cartItem) {
          return cartItem.count
        } else {
          return undefined
        }
      }
    })
  },
  methods: {
    decreaseShopCart() {
      let copySelectFood = JSON.parse(JSON.stringify(this.selectFood))
      this.$store.dispatch('cart/deleteToShopCart',copySelectFood)
    },
    increaseShopCart() {
      let copySelectFood = JSON.parse(JSON.stringify(this.selectFood))
      this.$store.dispatch('cart/addToShopCart',copySelectFood)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../style/common.css";
  .CartControl {
    .decrease{
      display: inline-block;
      padding: 5px 10px;
      border: none;
      background-color: skyblue;
      color: white;
      &:focus {
        outline: none;
        border: none;
      }
    }
    .count {
      display: inline-block;
      min-width: 30px;
      text-align: center;
    }
    .increase {
      display: inline-block;
      padding: 5px 10px;
      border: none;
      background-color: skyblue;
      color: white;
      &:focus {
        outline: none;
        border: none;
      }
    }
  }
</style>
