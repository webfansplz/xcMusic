<template>
  <div id="songDetails">
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
    <div class="masking">
      <div class="cover-bg" :style="{backgroundImage:'url('+songDetails.songs[0].al.picUrl+')'}"></div>
      <div class="cover-masking"></div>
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
  @import './songDetails';
</style>
