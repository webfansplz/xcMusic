<template>
  <div id="music">
    <audio id="musicPlayer"></audio>
  </div>
</template>
<script>
  export default {
    name: 'music',
    data() {
      return {
        Timing: null,
        curMusic: ''
      }
    },
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
          this.$store.commit('set_playStatus', true);
        } else {
          player.pause();
          this.$store.commit('set_playStatus', false);
        }
        this.Timing = setInterval(() => {
          this.$store.commit('set_musicCurtime', player.currentTime);
          this.$store.commit('set_musicDuration', player.duration);
          if (player.duration == player.currentTime) {
            clearInterval(this.Timing);
            player.pause();
            this.$store.commit('set_playStatus', false);
            this.$store.commit('set_musicCurtime', 0);
          }
        }, 1000);
      }
    },
    watch: {
      playStatus() {
        this.changePlayStatus(this.playStatus);
      },
      musicUrl() {
        if (this.curMusic == '') {
          document.getElementById('musicPlayer').src = this.musicUrl;
          this.curMusic = this.$route.params.id;
        } else if (this.$route.params.id != this.curMusic) {
          document.getElementById('musicPlayer').src = this.musicUrl;
          this.changePlayStatus(true);
          this.curMusic = this.$route.params.id;
        }
      }
    }
  }

</script>
