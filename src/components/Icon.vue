<template>
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#increase"></use>
  </svg>
</template>

<script type="text/javascript">
  const requireAll = requireContext => requireContext.keys().map(requireContext)
  const req = require.context('../assets/icons', true, /\.svg$/);
  requireAll(req);

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
</style>
