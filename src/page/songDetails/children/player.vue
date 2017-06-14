<template>
  <div id="player">
    <div class="player-progress">
      <range v-model="progressWidth" :rangeBarHeight="3" :step="step" @on-change="changeProgress"></range>
      <span class="range-start">{{formatTime(musicCurtime)}}</span>
      <span class="range-end">{{formatTime(musicDuration)}}</span>
    </div>
    <div class="playContxt-btnBox">
      <span><i class="iconfont icon-forward"></i></span>
      <span><i class="iconfont" :class="{'icon-pause':playStatus ==true, 'icon-play':playStatus ==false}" @click="togglePlayStatus"></i></span>
      <span><i class="iconfont icon-forward"></i></span>
    </div>
  </div>
</template>
<script>
  import {
    Range
  } from 'vux'
  export default {
    name: 'player',
    data() {
      return {
        progressWidth: 0,
        step: 1 / 10
      }
    },
    components: {
      Range
    },
    computed: {
      //播放状态
      playStatus() {
        return this.$store.state.playSongs.playStatus;
      },
      //歌曲当前时间
      musicCurtime() {
        return this.$store.state.playSongs.musicCurtime;
      },
      //歌曲总时间
      musicDuration() {
        return this.$store.state.playSongs.musicDuration;
      }
    },
    methods: {
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
      changeProgress(val) {
        let num = val * this.musicDuration / 100;
        if (Math.abs(parseInt(num) - parseInt(this.musicCurtime)) > 3) {
          document.getElementById('musicPlayer').currentTime = num;
        }
      }
    },
    watch: {
      musicCurtime() {
        let per = (this.musicCurtime / this.musicDuration).toFixed(2);
        this.progressWidth = per * 100;
      }
    }
  }

</script>
<style lang="less">
  @import '../../../assets/style/mixin';
  #player {
    .playContxt-btnBox {
      .mx_wh(2.4rem, .8rem);
      .mx_flex;
      font-size: 0;
      margin: 0 auto;
      span {
        .mx_flex_item(1);
        .mx_flex_mid;
        &:nth-child(1) {
          i {
            transform: rotate(180deg);
          }
        }
        &:nth-child(2) {
          i {
            .mx_fc(.55rem, #fff);
          }
        }
        i {
          .mx_fc(.45rem, #fff);
        }
      }
    }
    .player-progress {
      .mx_wh(100%, auto);
      position: relative;
    }
    .vux-range-input-box {
      margin: 0 !important;
    }
    .range-start,
    .range-end {
      display: inline-block;
      .mx_whlh(.5rem, .12rem, .12rem);
      .mx_fc(.12rem, #fff);
      text-align: center;
    }
    .range-start {
      .mx_postl(-.06rem, 0);
    }
    .range-end {
      .mx_postr(-.06rem, 0);
    }
    .range-bar {
      position: relative;
      .mx_wh(70%, .03rem);
      margin: 0 auto;
      background: radial-gradient(#dedede -180%, transparent 100%);
      .mx_bdrs(.2rem);
      .range-min,
      .range-max {
        font-size: 0;
      }
      .range-quantity {
        .backgroundRed;
      }
      .range-handle {
        .mx_wh(.15rem, .15rem);
        top: -.075rem !important;
      }
    }
  }

</style>
