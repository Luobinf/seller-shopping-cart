<template>
  <div class="shopcart-details-wrapper">
    <div class="shopcart-details">
      <div class="list-header">
        <span class="title">购物车</span>
        <span class="empty" @click="emptyCart">清空</span>
      </div>
      <div class="list-content" ref="list-content">
        <ul>
          <li class="food" v-for="food in foods">
            <div class="name-price">
              <span class="name">{{food.name}}</span>
              <span class="price">￥{{food.price}}元</span>
            </div>
            <div class="cartcontrol-wrapper">
              <CartControl :select-food="food"></CartControl>
            </div>
          </li>
        </ul>
        <div class="priceAndTotal">
          <span class="total">总的数量为{{total}}</span>
          <span class="totalPrice">总价为{{totalPrice}}元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CartControl from './CartControl'
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'ShopCart',
  computed: {
    ...mapGetters('cart',{
      foods: 'getShopCartProducts',
      total: 'cartTotalCount',
      totalPrice: 'cartTotalPrice'
    })
  },
  components: {
    CartControl
  },
  methods: {
    emptyCart() {
      window.alert('确定清空吗?')
      this.$store.dispatch('cart/emptyShopCart')
    }
  }
}
</script>

<style scoped lang="scss">
  .shopcart-details-wrapper {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    .shopcart-details {
      .list-header {
        background-color: #f3f5f7;
        color: #8b9196;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        .title {
          font-size: 14px;
        }
        .empty {
          font-size: 14px;
          color: #55bee5;
        }
      }
      .list-content {
        background-color: white;
        padding: 0 10px;
        .food{
          display: flex;
          font-size: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #e6e7e8;
          .name-price {
            flex: 1;
            display: flex;
            justify-content: space-between;
            padding-right: 15px;
            .name {
              font-weight: 700;
              height: 25px;
              line-height: 25px;
            }
            .price {
              color: red;
              font-weight: 700;
              height: 25px;
              line-height: 25px;
            }
          }
          .cartcontrol-wrapper {

          }
        }
        .priceAndTotal {
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          .total {
            font-size: 14px;
          }
          .totalPrice{
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
