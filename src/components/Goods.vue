<template>
  <div class="goods">
    <GoodList></GoodList>
    <ShopCart></ShopCart>
  </div>
</template>

<script type="text/javascript">
import GoodList from './GoodList'
import ShopCart from './ShopCart'
export default {
  components: {
    GoodList,
    ShopCart
  }
}
</script>

<style scoped lang="scss">
  .goods {
    position: relative;
    left: 0;
    top: 41px;
  }
</style>
