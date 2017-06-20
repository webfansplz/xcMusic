<template>
  <div id="songListDetails">
    <!--推荐歌单详情头部开始-->
    <div class="header">
      <div class="header-title">
        <i class="iconfont icon-left" @click="goIndex"></i> 歌单
        <i class="iconfont icon-music" @click="goSongDetails"></i>
      </div>
      <div class="header-contxt">
        <div class="header-contxt-l">
          <i class="iconfont icon-headset">{{format.formatPlayCount(songListDetails.playCount)}}</i>
          <img v-lazy="songListDetails.picUrl">
          <i class="iconfont icon-mxclt"></i>
        </div>
        <div class="header-contxt-r">
          <p>{{songListDetails.name}}</p>
          <div>
            <img v-lazy="songListDetails.creator.avatarUrl">
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
        <router-link v-for="(item,i) in songListDetails.tracks" :key="i" tag="li" :to="{name:'songDetails',params:{id:item.id}}">
          <i>{{i+1}}</i>
          <span class="halfBorder">
            <p>{{item.name}}</p>
            <s>{{item.ar[0].name}}</s>
          </span>
        </router-link>
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
      //歌单详情
      songListDetails() {
        return this.$store.state.songListDetails;
      },
      //当前音乐
      curMusic() {
        return this.$store.state.playSongs.curMusic;
      }
    },
    methods: {
      //返回首页
      goIndex() {
        this.$router.push({
          name: 'recommend'
        })
      },
      //跳转当前歌曲页面
      goSongDetails() {
        if (this.curMusic != '') {
          this.$router.push({
            name: 'songDetails',
            params: {
              id: this.curMusic
            }
          })
        }
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
      .mx_whlh(100%, .45rem, .45rem);
      .mx_fc(.16rem, #fff);
      text-align: center;
      .icon-left {
        .mx_fc(.22rem, #fff);
        .mx_postl(0, 5%);
      }
      .icon-music {
        .mx_fc(.22rem, #fff);
        .mx_postr(0, 5%);
      }
    }
    .header-contxt {
      padding: .1rem 5% 0;
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
        .mx_postr(.05rem, 13%);
        .mx_fc(.12rem, #fff);
      }
      .icon-mxclt {
        .mx_posbr(.05rem, 13%);
        .mx_fc(.16rem, #fff);
      }
    }
    .header-contxt-r {
      display: inline-block;
      vertical-align: top;
      width: 60%;
      div {
        .mx_whlh(100%, auto, 1);
        .mx_fc(.12rem, #fff);
        align-items: center;
        display: flex;
      }
      p {
        .mx_fc(.16rem, #fff);
        padding: 5% 0;
      }
      img {
        .mx_bdrs(50%);
        width: 15%;
      }
      span {
        padding: 0 .05rem;
        .mx_fc(.12rem, #ccc);
      }
      .icon-right {
        .mx_fc(.14rem, #ccc);
      }
    }
    .header-footer {
      font-size: 0;
      text-align: center;
      padding: .1rem 5% .05rem;
      .mx_flex;
      span {
        .mx_flex_item(1);
        i {
          .mx_fc(.2rem, #fff);
        }
        p {
          padding-top: .07rem;
          .mx_fc(.12rem, #fff);
        }
      }
    }
    .songList {
      ul {
        li {
          .mx_whlh(100%, .4rem, .4rem);
          padding: .05rem 0;
          font-size: 0;
          i {
            display: inline-block;
            vertical-align: top;
            .mx_fc(.12rem, #666);
            .mx_whlh(15%, .4rem, .4rem);
            text-align: center;
          }
          span {
            display: inline-block;
            vertical-align: top;
            .mx_whlh(85%, .4rem, .4rem);
            text-align: left;
          }
          p {
            .mx_fc(.14rem, #333);
            .mx_whlh(85%, .2rem, .2rem);
            .mx_single_ellipsis;
          }
          s {
            display: block;
            text-decoration: none;
            .mx_fc(.12rem, #ccc);
            .mx_whlh(85%, .2rem, .2rem);
          }
        }
      }
    }
  }

</style>
