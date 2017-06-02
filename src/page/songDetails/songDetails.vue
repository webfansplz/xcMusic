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
        <span class="play-controler" :class="{'play-controler-status':playStatus==true}"></span>
        <div class="cd-wrapper">
          <div class="cd-masking">
          </div>
          <img :src="songDetails.songs[0].al.picUrl" class="play-animat" :class="{'play-animat-status':playStatus==false}">
        </div>
      </div>
      <div class="playContxt-f">
        <player></player>
      </div>
    </div>
  </div>
</template>
<script>
  import player from './children/player';
  export default {
    name: 'songDetails',
    components: {
      player
    },
    created() {
      this.$store.dispatch('get_PlaySongDetails', this.$route.params.id);
    },
    computed: {
      //歌曲详情
      songDetails() {
        return this.$store.state.playSongs.songDetails;
      },
      //音乐歌词
      Lyric() {
        return this.$store.state.playSongs.Lyric;
      },
      //播放状态
      playStatus() {
        return this.$store.state.playSongs.playStatus;
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
        .mx_wh(80%, 70%);
        margin: 0 auto;
      }
      .play-controler {
        .mx_postl(-.03rem, 45%);
        display: block;
        .mx_wh(1rem, 1.4rem);
        background: url('../../assets/img/play-controler.png') left -.06rem no-repeat;
        background-size: cover;
        z-index: 8;
        transition: all .3s ease-in;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
      }
      .play-controler-status {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        background-position-y: -.12rem;
      }
      .play-animat {
        animation: playRotate 18s linear infinite;
      }
      @keyframes playRotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .play-animat-status {
        animation-play-state: paused;
      }
      .cd-wrapper {
        position: relative;
        .mx_wh(1.8rem,
        1.8rem);
        padding: .4rem .4rem;
        .mx_bdrs(50%);
        background: hsla(0, 0%, 42%, .3);
        margin: .75rem auto 0;
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
    }
  }

</style>
