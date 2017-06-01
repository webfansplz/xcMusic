<template>
  <div id="songDetails">
    <div class="masking">
      <div class="cover-bg" :style="{backgroundImage:'url('+songDetails.songs[0].al.picUrl+')'}"></div>
      <div class="cover-masking"></div>
    </div>
    <div class="header">
      <i class="iconfont icon-left"></i>
      <p>{{songDetails.songs[0].name}}</p>
      <span>{{songDetails.songs[0].ar[0].name}}</span>
      <div class="bar-line"></div>
    </div>
    <div class="playContxt">
      <div class="playContxt-m">
        <span class="play-controler"></span>
        <div class="cd-wrapper">
          <div class="cd-masking">
          </div>
          <img :src="songDetails.songs[0].al.picUrl">
        </div>
      </div>
      <div class="playContxt-f">
        <audio :src="musicUrl" autoplay="autoplay"></audio>
        <div class="playContxt-btnBox">
          <span><i class="iconfont icon-forward"></i></span>
          <span><i class="iconfont icon-play"></i></span>
          <!--<span><i class="iconfont icon-pause"></i></span>-->
          <span><i class="iconfont icon-forward"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'songDetails',
    components: {},
    created() {
      this.$store.dispatch('get_PlaySongDetails', this.$route.params.id)
    },
    computed: {
      //歌曲详情
      songDetails() {
        console.log(this.$store.state.playSongs.songDetails)
        return this.$store.state.playSongs.songDetails;
      },
      //音乐url
      musicUrl() {
        return this.$store.state.playSongs.musicUrl;
      },
      //音乐歌词
      Lyric() {
        return this.$store.state.playSongs.Lyric;
      }
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #songDetails {
    position: fixed;
    .mx_wh(100%, 100%);
    .masking {
      .mx_wh(100%, 100%);
      .mx_postl(0, 0);
      z-index: -1;
      .cover-bg,
      .cover-masking {
        .mx_postl(0, 0);
        bottom: 0;
        .mx_wh(100%, 100%);
      }
      .cover-bg {
        z-index: 2;
        background-size: cover;
        background-position: 50%;
        filter: blur(1.2rem);
        transform: scale(1.05);
      }
      .cover-masking {
        z-index: 3;
        background-color: rgba(0, 0, 0, .6);
        opacity: 0.6;
      }
    }
    .header {
      width: 100%;
      position: relative;
      text-align: center;
      .icon-left {
        .mx_fc(.23rem, #fff);
        .mx_postl(.11rem, 5%);
      }
      p {
        .mx_whlh(50%, .28rem, .28rem);
        margin: 0 auto;
        .mx_single_ellipsis;
        .mx_fc(.14rem, #fff);
      }
      span {
        display: block;
        .mx_whlh(100%, .16rem, .13rem);
        .mx_fc(.1rem, #fff);
      }
      .bar-line {
        margin-top: .03rem;
        display: block;
        bottom: 0;
        left: 0;
        .mx_wh(100%, 1px);
        background: radial-gradient(#d3d3d3 -90%, transparent 100%);
      }
    }
    .playContxt {
      .mx_wh(100%, 100%);
      .playContxt-m {
        overflow: hidden;
        position: relative;
        .mx_wh(80%, 80%);
        margin: 0 auto;
      }
      .play-controler {
        .mx_postl(-.03rem, 45%);
        display: block;
        .mx_wh(.8rem, 1.2rem);
        background: url('../../assets/img/play-controler.png') left -.06rem no-repeat;
        background-size: cover;
        z-index: 8;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);

        background-position-y: -.12rem;
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      .cd-wrapper {
        position: relative; // .mx_wh(.24rem,.44rem);
        .mx_wh(1.6rem,
        1.6rem);
        padding: .4rem .4rem;
        .mx_bdrs(50%);
        background: hsla(0, 0%, 42%, .3);
        margin: .58rem auto 0;
        img {
          display: block;
          .mx_wh(100%,
          100%);
          .mx_bdrs(50%);
        }
      }
      .cd-masking {
        .mx_wh(100%,
        100%);
        .mx_postl(0,
        0);
        background: url('../../assets/img/cd-wrapper.png') 0/contain no-repeat;
      }
      .playContxt-btnBox {
        .mx_wh(2.4rem,
        0.8rem);
        .mx_flex;
        font-size: 0;
        margin: 0 auto;
        span {
          .mx_flex_item(1);
          .mx_flex_mid;
          &:nth-child(1) {
            i {
              transform: rotate(180deg);
            }
          }
          &:nth-child(2) {
            i {
              .mx_fc(0.55rem,
              #fff);
            }
          }
          i {
            .mx_fc(0.45rem,
            #fff);
          }
        }
      }
    }
  }

</style>
