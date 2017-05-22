<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    created(){
    }
  }
</script>

<style lang="less">
  @import './assets/style/common';
  [v-cloak] {
    display: none;
  }
  #app{

  }
</style>
