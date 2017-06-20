<template>
  <div id="player">
    <div class="progress-box">
      <div class="schedule" @touchmove="changeProgress" ref="schedule" @touchstart="changeProgress"></div>
      <i class="progress-bar" :style={width:progressWidth}>
        <s class="progress-dot"></s>
      </i>
      <span class="curTime">{{formatTime(musicCurtime)}}</span>
      <span class="duration">{{formatTime(musicDuration)}}</span>
    </div>
    <div class="playContxt-btnBox">
      <span><i class="iconfont icon-playType"></i></span>
      <span @click="goPrevSongs"><i class="iconfont icon-forward"></i></span>
      <span><i class="iconfont" :class="{'icon-pause':playStatus ==true, 'icon-play':playStatus ==false}" @click="togglePlayStatus"></i></span>
      <span @click="goNextSongs"><i class="iconfont icon-forward"></i></span>
      <span @click="openSongList"><i class="iconfont icon-playList"></i></span>
    </div>
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex'
  export default {
    name: 'player',
    computed: {
      ...mapState({
        //播放状态
        playStatus: state => state.playSongs.playStatus,
        //歌曲当前时间
        musicCurtime: state => state.playSongs.musicCurtime,
        //歌曲总时间
        musicDuration: state => state.playSongs.musicDuration,
        //歌曲列表
        songListDetails: state => state.songListDetails.tracks,
      }),
      //进度条长度
      progressWidth() {
        let per = (this.musicCurtime / this.musicDuration).toFixed(3);
        return per * 100 + '%';
      }
    },
    methods: {
      //上一曲
      goPrevSongs() {
        if (this.songListDetails.length > 0) {
          let obj = {
            id: this.$route.params.id,
            type: 'prev'
          }
          this.$store.dispatch('go_SwitchSongs', obj).then((res) => {
            this.$store.dispatch('get_PlaySongDetails', res);
            this.$router.push({
              name: 'songDetails',
              params: {
                id: res
              }
            })
          });
        }
      },
      //下一曲
      goNextSongs() {
        if (this.songListDetails.length > 0) {
          let obj = {
            id: this.$route.params.id,
            type: 'next'
          }
          this.$store.dispatch('go_SwitchSongs', obj).then((res) => {
            this.$store.dispatch('get_PlaySongDetails', res);
            this.$router.push({
              name: 'songDetails',
              params: {
                id: res
              }
            })
          });
        }
      },
      //打开底部播放列表
      openSongList() {
        this.$store.commit('set_songListStatus', true);
      },
      // 格式化时间
      formatTime(time) {
        let min = parseInt(time / 60);
        let second = parseInt(time % 60);
        min < 10 ? min = "0" + min : min;
        second < 10 ? second = "0" + second : second;
        return "" + min + ":" + second + "";
      },
      // 切换播放状态方法
      togglePlayStatus() {
        this.$store.commit('set_playStatus', !this.playStatus);
      },
      //改变歌曲进度
      changeProgress(event) {
        let ev = event || window.event;
        // ev.preventDefault();
        let num = event.touches[0].clientX - event.target.parentNode.offsetLeft;
        let max = event.target.parentNode.offsetWidth;
        num > max ? num = max : num;
        num < 0 ? num = 0 : num;
        num = num / max * this.musicDuration.toFixed(3);
        document.getElementById('musicPlayer').currentTime = num;
      }
    }
  }

</script>
<style lang="less">
  @import '../songDetails';
</style>
