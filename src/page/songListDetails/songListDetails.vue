<template>
  <div id="songListDetails">
    <!--推荐歌单详情头部开始-->
    <div class="header">
      <div class="header-title">
        <i class="iconfont icon-left"></i> 歌单
        <i class="iconfont icon-music"></i>
      </div>
      <div class="header-contxt">
        <div class="header-contxt-l">
          <i class="iconfont icon-headset">{{format.formatPlayCount(songListDetails.playCount)}}</i>
          <img :src="songListDetails.picUrl">
          <i class="iconfont icon-mxclt"></i>
        </div>
        <div class="header-contxt-r">
          <p>{{songListDetails.name}}</p>
          <div>
            <img :src="songListDetails.creator.avatarUrl">
            <span> {{songListDetails.creator.nickname}}</span>
          </div>
        </div>
      </div>
    </div>
    <!--推荐歌单详情头部结束-->
  </div>
</template>
<script>
  export default {
    name: 'songListDetails',
    components: {},
    created() {
      this.$store.dispatch('get_songListDetails', {
        id: this.$route.query.id
      });
    },
    computed: {
      songListDetails() {
        return this.$store.state.songListDetails;
      }
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #songListDetails {
    .header {
      .mx_wh(100%, 230px);
      background: linear-gradient(left, #dcdcdc, #666);
    }
    .header-title {
      position: relative;
      .mx_whlh(100%, 45px, 45px);
      .mx_fc(16px, #fff);
      text-align: center;
      .icon-left {
        .mx_fc(22px, #fff);
        .mx_postl(0, 5%);
      }
      .icon-music {
        .mx_fc(22px, #fff);
        .mx_postr(0, 5%);
      }
    }
    .header-contxt {
      padding: 10px 5% 0;
      width: 90%;
      font-size: 0;
    }
    .header-contxt-l {
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: 40%;
      img {
        display: block;
        width: 90%;
      }
      .icon-headset {
        .mx_postr(5px, 13%);
        .mx_fc(12px, #fff);
      }
      .icon-mxclt {
        .mx_posbr(5px, 13%);
        .mx_fc(16px, #fff);
      }
    }
    .header-contxt-r {
      display: inline-block;
      vertical-align: top;
      width: 60%;
      div {
        .mx_whlh(100%, auto, 1);
        .mx_fc(12px, #fff);
        align-items: center;
        display:flex;
      }
      p {
        .mx_fc(16px, #fff);
        padding: 10px 0;
      }
      img {
        .mx_bdrs(50%);
        width: 15%;
      }
      span{
          padding-left:5px;
      }
    }
  }

</style>
