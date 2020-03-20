<template>
  <div class="good-list-wrapper">
    <ul class="good-list">
      <li class="good-list-item" v-for="goods in goodList">
        <h5 class="title">
          {{goods.name}}
        </h5>
        <ul class="foods">
          <li v-for="food in goods.foods" class="food-wrapper">
            <div class="food">
              <div class="picture">
                <img :src="food.image" width="100" height="100">
              </div>
              <div class="content">
                <h5 class="name">{{food.name}}</h5>
                <span class="price">{{food.price}}元</span>
              </div>
              <div class="cart-control-wrapper">
                <CartControl :select-food="food"></CartControl>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import {mapState} from 'vuex'
import CartControl from './CartControl'
export default {
  data () {
    return {

    }
  },
  components: {
    CartControl
  },
  computed: {
    ...mapState({
      goodList: (state) => {
        return state.goodlist.goodList
      }
    })
  },
  created() {
    //获取good-list数据,是异步的。将数据提交到Vuex
    this.$store.dispatch('goodlist/getAllGoodList')
  }
}
</script>

<style scoped lang="scss">
  .good-list-wrapper {
    display: flex;
    width: 100%;
    height: calc(100vh - 41px);
    .good-list {
      width: 100%;
      overflow: auto;
      .good-list-item {
        .title {
          background-color: #f3f5f7;
          font-weight: 500;
          padding: 10px;
        }
        .foods {
          .food-wrapper {
            padding: 10px 10px 0 10px;
            .food {
              display: flex;
              position: relative;
              padding: 0 0 20px 0;
              border-bottom: 1px solid skyblue;
              .picture {
                img {
                  vertical-align: top;
                }
              }
              .content {
                flex: 1;
                margin-left: 10px;
                .name {

                }
                .price {
                  display: inline-block;
                  margin-top: 30px;
                  color: red;
                }
              }
              .cart-control-wrapper {
                position: absolute;
                bottom: 20px;
                right: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
