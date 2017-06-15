<template>
  <div id="music">
    <audio id="musicPlayer" :src="musicUrl" @timeupdate='setCurTime' @ended="initMusicStatus" @durationchange="setDuration" ref="player"></audio>
    <!--@canplay="setDuration"-->
  </div>
</template>
<script>
  export default {
    name: 'music',
    data() {
      return {
        Timing: null
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
      }
    },
    methods: {
      setDuration() {
        this.$store.commit('set_playStatus', true);
        this.$store.commit('set_musicDuration', this.$refs.player.duration);
      },
      setCurTime() {
        this.$store.commit('set_musicCurtime', this.$refs.player.currentTime);
      },
      initMusicStatus() {
        this.$refs.player.pause();
        this.$store.commit('set_playStatus', false);
        this.$store.commit('set_musicCurtime', 0);
      },
      setDuration() {
        this.$store.commit('set_musicDuration', this.$refs.player.duration);
      }
    },
    watch: {
      playStatus(state) {
        if (state == true) {
          this.$nextTick(() => {
            this.$refs.player.play();
          })
        } else {
          this.$refs.player.pause();
        }
      }
    }
  }

</script>
