<template>
  <div id="music">
    <audio id="musicPlayer" :src="musicUrl" @canplay="playMusic" @timeupdate='setCurTime' @ended="initMusicStatus" ref="player"></audio>
  </div>
</template>
<script>
  export default {
    name: 'music',
    data() {
      return {}
    },
    computed: {
      //音乐url
      musicUrl() {
        return this.$store.state.playSongs.musicUrl;
      },
      //播放状态
      playStatus() {
        return this.$store.state.playSongs.playStatus;
      }
    },
    methods: {
      //播放音乐
      playMusic() {
        this.$store.commit('set_playStatus', true);
        this.$store.commit('set_musicDuration', this.$refs.player.duration);
      },
      //更新播放时间
      setCurTime() {
        this.$store.commit('set_musicCurtime', this.$refs.player.currentTime);
      },
      //播放完成格式化
      initMusicStatus() {
        this.$refs.player.pause();
        this.$store.commit('set_playStatus', false);
        this.$store.commit('set_musicCurtime', 0);
      }
    },
    watch: {
      //监听播放状态来触发歌曲播放/暂停
      playStatus(state) {
        if (state == true) {
          this.$nextTick(() => {
            this.$refs.player.play();
            this.$store.commit('set_musicDuration', this.$refs.player.duration);
          })
        } else {
          this.$refs.player.pause();
        }
      }
    }
  }

</script>
