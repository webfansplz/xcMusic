<template>
  <div id="app" v-cloak>
    <search></search>
    <headerNav></headerNav>
    <router-view></router-view>
  </div>
</template>

<script>
  import search from './components/search/search'
  import headerNav from './components/headerNav/headerNav'  
  export default {
    name: 'app',
    components: {
      search,
      headerNav
    },
    created(){
      // this.$store.dispatch('get_userSubcount');
    }
  }
</script>

<style lang="less">
  @import './assets/style/common';
  [v-cloak] {
    display: none;
  }

</style>
