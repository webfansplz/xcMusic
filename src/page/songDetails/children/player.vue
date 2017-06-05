<template>
  <div id="player">
    <div class="progress-box">
      <i class="progress-bar" :style={width:progressWidth}>
        <s class="progress-dot"></s>
      </i>
      <span class="curTime">{{formatTime(musicCurtime)}}</span>
      <span class="duration">{{formatTime(musicDuration)}}</span>
    </div>
    <div class="playContxt-btnBox">
      <span><i class="iconfont icon-forward"></i></span>
      <span><i class="iconfont" :class="{'icon-pause':playStatus ==true, 'icon-play':playStatus ==false}" @click="togglePlayStatus"></i></span>
      <span><i class="iconfont icon-forward"></i></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'player',
    data() {
      return {
        progressWidth: 0
      }
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
      }
    },
    watch: {
      musicCurtime() {
        let per = (this.musicCurtime / this.musicDuration).toFixed(3);
        this.progressWidth = per * 100 + '%';
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
    .progress-box {
      position: relative;
      .mx_wh(70%, .03rem);
      margin: 0 auto;
      background: radial-gradient(#dedede -180%, transparent 100%);
      .mx_bdrs(.2rem);
      .curTime,
      .duration {
        display: inline-block;
        .mx_whlh(.5rem, .12rem, .12rem);
        .mx_fc(.12rem, #fff);
        text-align: center;
      }
      .curTime {
        .mx_postl(-.06rem, -.5rem);
      }
      .duration {
        .mx_postr(-.06rem, -.5rem);
      }
      .progress-bar {
        height: 100%;
        .backgroundRed;
        .mx_postl(0, 0);
        .progress-dot {
          display: block;
          .mx_wh(.12rem, .12rem);
          .mx_bdrs(50%);
          .mx_postr(-.05rem, 0);
          .backgroundRed;
          transform: translate(50%,0);
        }
      }
    }
  }

</style>
