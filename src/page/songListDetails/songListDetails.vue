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
            <i class="iconfont icon-right"></i>
          </div>
        </div>
      </div>
      <div class="header-footer">
        <span>
            <i class="icon-noCollect iconfont"></i>
            <p>{{songListDetails.subscribedCount}}</p>
        </span>
        <span>
            <i class="iconfont icon-comments"></i>
            <p>{{songListDetails.trackCount}}</p>
        </span>
        <span>
            <i class="iconfont icon-forwarding"></i>
            <p>{{songListDetails.shareCount}}</p>
        </span>
      </div>
    </div>
    <!--推荐歌单详情头部结束-->
    <!--推荐歌曲详情内容开始-->
    <div class="songList">
      <ul>
        <route-link tag="li" :to="{name:'songDetails',params:{id:item.id}}" v-for="(item,i) in songListDetails.tracks" :key="i">
          <i>{{i+1}}</i>
          <span>
            <p>{{item.name}}</p>
            <s>{{item.ar[0].name}}</s>
          </span>
        </route-link>
      </ul>
    </div>
    <!--推荐歌曲详情内容结束-->
  </div>
</template>
<script>
  export default {
    name: 'songListDetails',
    components: {},
    created() {
      this.$store.dispatch('get_songListDetails', {
        id: this.$route.params.id
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
      .mx_wh(100%, auto);
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
        display: flex;
      }
      p {
        .mx_fc(16px, #fff);
        padding: 5% 0;
      }
      img {
        .mx_bdrs(50%);
        width: 15%;
      }
      span {
        padding: 0 5px;
        .mx_fc(12px, #ccc);
      }
      .icon-right {
        .mx_fc(14px, #ccc);
      }
    }
    .header-footer {
      text-align: center;
      padding: 10px 5% 5px;
      .mx_flex;
      span {
        .mx_flex_item(1);
        i {
          .mx_fc(20px, #fff);
        }
        p {
          padding-top: 7px;
          .mx_fc(12px, #fff);
        }
      }
    }
    .songList {
      ul {
        li {
          .mx_whlh(100%, 40px, 40px);
          padding: 5px 0;
          font-size: 0;
          i {
            display: inline-block;
            vertical-align: top;
            .mx_fc(12px, #666);
            .mx_whlh(15%, 40px, 40px);
            text-align: center;
          }
          span {
            display: inline-block;
            vertical-align: top;
            .mx_whlh(85%, 40px, 40px);
            text-align: left;
            border-bottom: 1px solid #cecece;
          }
          p {
            .mx_fc(14px, #333);
            .mx_whlh(85%, 20px, 20px);
            .mx_single_ellipsis;
          }
          s {
            display: block;
            text-decoration: none;
            .mx_fc(12px, #ccc);
            .mx_whlh(85%, 20px, 20px);
          }
        }
      }
    }
  }

</style>
