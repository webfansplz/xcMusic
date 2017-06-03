<template>
  <div id="music">
    <audio :src="musicUrl" id="musicPlayer" @canplay="beginAudio"></audio>
  </div>
</template>
<script>
  export default {
    name: 'music',
    created() {},
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
      //修改播放状态
      changePlayStatus(status) {
        let player = document.getElementById('musicPlayer');
        if (status == true) {
          player.play();
        } else {
          player.pause();
        }
      },
      beginAudio() {
        this.$store.commit('set_playStatus', true);
      }
    },
    watch: {
      playStatus() {
        this.changePlayStatus(this.playStatus);
      },
      musicUrl() {
        // setTimeout(() => {
        //   this.changePlayStatus(this.playStatus);
        // }, 200)
      }
    }
  }

</script>
