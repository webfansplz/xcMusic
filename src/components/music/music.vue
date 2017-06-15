<template>
  <div id="music">
    <audio id="musicPlayer" :src="musicUrl"  @timeupdate='setCurTime' @ended="initMusicStatus" @durationchange="setDuration" @canplay="playMusic" ref="player"></audio>
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
      //播放音乐
      playMusic() {
        this.$store.commit('set_playStatus', true);
      },
      //设置歌曲当前时间
      setCurTime() {
        this.$store.commit('set_musicCurtime', this.$refs.player.currentTime);
      },
      //播放完成时初始化操作
      initMusicStatus() {
        this.$refs.player.pause();
        this.$store.commit('set_playStatus', false);
        this.$store.commit('set_musicCurtime', 0);
      },
      //设置歌曲时长
      setDuration() {
        this.$store.commit('set_musicDuration', this.$refs.player.duration);
      }
    },
    watch: {
      //监听歌曲播放状态
      playStatus(state) {
        if (state == true) {
          this.$nextTick(() => {
            this.$refs.player.play();
          })
        } else {
          this.$refs.player.pause();
        }
      },
      //监听音乐url更新
      musicUrl(val, oldval) {
        if (oldval != '') {
          this.$nextTick(() => {
            this.$store.commit('set_playStatus', true);
            this.$refs.player.play();
          })
        }
      }
    }
  }

</script>
