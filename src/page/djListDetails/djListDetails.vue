<template>
  <div id="djListDetails"></div>
</template>
<script>
  export default {
    name: 'djListDetails',
    created() {
      this.$store.dispatch('get_djListDetails',this.$route.params.id);
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
//   #djListDetails {}

</style>
