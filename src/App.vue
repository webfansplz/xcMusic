<template>
  <div id="app" v-cloak>
    <music></music>
    <router-view></router-view>
  </div>
</template>
<script>
import music from './components/music/music';
  export default {
    name: 'app',
    components:{
      music
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
