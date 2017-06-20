<template>
  <div id="app" v-cloak>
    <music></music>
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>
<script>
  import music from './components/music/music';
  import {
    Loading
  } from 'vux';
  export default {
    name: 'app',
    components: {
      music,
      Loading
    },
    computed: {
      isLoading() {
        return this.$store.state.isLoading;
      }
    }
  }

</script>
<style lang="less">
  @import './assets/style/common';
  [v-cloak] {
    display: none;
  }
  
  #app {
    width: 100%;
    height: 100%;
    font-size: .12rem;
    .weui-toast__content {
      font-size: .12rem;
    }
  }

</style>
