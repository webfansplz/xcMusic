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
      .mx_wh(100%, 45px);
      position: relative;
      text-align: center;
      .icon-left {
        .mx_fc(23px, #fff);
        .mx_postl(11px, 5%);
      }
      p {
        .mx_whlh(100%, 28px, 28px);
        .mx_fc(14px, #fff);
      }
      span {
        display: block;
        .mx_whlh(100%, 16px, 13px);
        .mx_fc(10px, #fff);
      }
      .bar-line {
        display: block;
        bottom: 0;
        left: 0;
        .mx_wh(100%, .05rem);
        background: radial-gradient(#d3d3d3 -90%, transparent 100%);
      }
    }
    .playContxt {
      .mx_wh(100%, 100%);
      .playContxt-m {
        position: relative;
        .mx_wh(80%, 70%);
        margin: 0 auto;
      }
      .play-controler {

        background: url('../../assets/img/playControler.png') left 0/cover no-repeat;
      }
    }
  }

</style>
