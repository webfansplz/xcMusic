<template>
  <div id="app" v-cloak>
    <headerNav></headerNav>
    <router-view></router-view>
  </div>
</template>
<script>
  import headerNav from './components/headerNav/headerNav'  
  export default {
    name: 'app',
    components: {
      headerNav
    },
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
    padding-top:88px;
  }
</style>
