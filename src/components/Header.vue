<template>
  <header class="header">
    <div class="nav">
     <div>
       <router-link to="/goods" active-class="active">商品</router-link>
     </div>
      <div>
        <router-link to="/ratings" active-class="active">评价</router-link>
      </div>
      <div>
        <router-link to="seller" active-class="active">商家</router-link>
      </div>
    </div>
  </header>
</template>

<script type="text/javascript">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: black;
    .nav {
      display: flex;
      div {
        flex: 1;
        text-align: center;
        a {
          display: block;
          padding: 10px;
          color: white;
          text-decoration: none;
          &:hover,&:active {
            -webkit-tap-highlight-color: transparent;
          }
          &.active {
            color: red;
          }
        }
      }
    }
  }
</style>
