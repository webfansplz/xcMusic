<template>
  <div id="music">
    <audio :src="playUrl" id="musicPlayer" @canplay="beginAudio"></audio>
  </div>
</template>
<script>
  export default {
    name: 'music',
    data() {
      return {
        playUrl: '',
        Timing: null
      }
    },
    created() {},
    computed: {
      //音乐url
      musicUrl() {
        return this.$store.state.playSongs.musicUrl;
      },
      //播放状态
      playStatus() {
        return this.$store.state.playSongs.playStatus;
      },
      //判断是否是当前播放歌曲
      isCurMusic() {
        return this.$store.state.playSongs.isCurMusic;
      }
    },
    methods: {
      //修改播放状态
      changePlayStatus(status) {
        clearInterval(this.Timing);
        let player = document.getElementById('musicPlayer');
        if (status == true) {
          player.play();
        } else {
          player.pause();
        }
        this.$store.commit('set_musicDuration', player.duration);
        this.Timing = setInterval(() => {
          this.$store.commit('set_musicCurtime', player.currentTime);
          if (player.duration == player.currentTime) {
            clearInterval(this.Timing);
            player.pause();
            this.$store.commit('set_playStatus', false);
            this.$store.commit('set_musicCurtime', 0);
          }
        }, 1000);
      },
      beginAudio() {
        this.$store.commit('set_playStatus', true);
      }
    },
    watch: {
      playStatus() {
        this.changePlayStatus(this.playStatus);
      },
      isCurMusic() {
        this.playUrl = this.musicUrl;
        setTimeout(() => {
          this.changePlayStatus(true);
        }, 800)
      }
    }
  }

</script>
