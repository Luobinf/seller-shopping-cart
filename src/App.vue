<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>
<script>
  import vHeader from '../src/components/Header.vue'
  export default {
    components: {
      vHeader
    }
  }
</script>
<style lang="scss">

</style>
