<template>
  <div id="music">
    <audio id="musicPlayer" :src="musicUrl" @timeupdate='setCurTime' @ended="initMusicStatus" @durationchange="setDuration" @canplay="playMusic"
      ref="player"></audio>
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'music',
    data() {
      return {}
    },
    computed: {
      ...mapState({
        //音乐url
        musicUrl: state => state.playSongs.musicUrl,
        //播放状态
        playStatus: state => state.playSongs.playStatus,
        //当前音乐url
        curMusic: state => state.playSongs.curMusic,
        //歌单
        songListDetails: state => state.songListDetails.tracks
      })
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
        if (this.songListDetails.length > 0) {
          let obj = {
            id: this.$route.params.id,
            type: 'next'
          }
          this.$store.dispatch('go_SwitchSongs', obj).then((res) => {
            if (res == false) {
              this.$refs.player.pause();
              this.$store.commit('set_playStatus', false);
              this.$store.commit('set_musicCurtime', 0);
            } else {
              this.$store.dispatch('get_PlaySongDetails', res);
              this.$router.push({
                name: 'songDetails',
                params: {
                  id: res
                }
              })
            }
          });
        } else {
          this.$refs.player.pause();
          this.$store.commit('set_playStatus', false);
          this.$store.commit('set_musicCurtime', 0);
        }
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
