<template>
  <div id="recommend">
    <!--轮播开始-->
    <swiper loop auto height="140px" dots-position="center">
      <swiper-item v-for="(item,i) in bannerList" :key="i">
        <img width="100%" height="100%" :src="item.pic">
      </swiper-item>
    </swiper>
    <!--轮播结束-->
    <!--推荐歌单开始-->
    <div class="re-songList">
      <h1 class="list-item">
        <b></b> 推荐歌单
        <i class="iconfont icon-right"></i>
      </h1>
      <ul>
        <li v-for="(item,i) in PrSongList"><img :src="item.picUrl"></li>
      </ul>
    </div>
  </div>
</template>
<script>
  //引入vux轮播组件
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
    computed: {
      //获取banner图
      bannerList() {
        return this.$store.state.recommend.bannerList;
      },
      //获取推荐歌单
      PrSongList(){
        return this.$store.state.recommend.PrSongList;
      }
    },
    created() {
      //页面初始化
      this.$store.dispatch('initRecommendPage');
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #recommend {
    .re-songList {
      .list-item {
        position: relative;
        .mx_fc(15px, #333);
        .mx_whlh(100%, 45px, 45px);
        font-weight: normal;
        b {
          .mx_hlh(15px, 45px);
          .mx_bd(1px, #f33);
          margin-right: 5px;
        }
      }
      ul{
        .mx_flex;
        .mx_flex_content;
        li{
          .mx_flex_item(1);
          .mx_wh(33%,auto);
          img{
            height: 100%;
          }
        }
      }
    }
  }

</style>
