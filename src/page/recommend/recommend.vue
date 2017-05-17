<template>
  <div id="recommend">
    <swiper loop auto height="140px" dots-position="center">
      <swiper-item v-for="(item,i) in bannerList" :key="i">
        <img width="100%" height="100%" :src="item.pic">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import {
    Swiper,
    SwiperItem
  } from 'vux'
  export default {
    name: 'recommend',
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {}
    },
    computed: {
      bannerList() {
        return this.$store.state.recommendList.bannerList;
      }
    },
    created() {
      this.$store.dispatch('get_indexBanner');
    }
  }

</script>
<style lang="less">
  #recommend {}

</style>
