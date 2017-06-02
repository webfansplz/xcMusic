<template>
  <div id="player">
    <div class="progress-box"></div>
    <div class="playContxt-btnBox">
      <span><i class="iconfont icon-forward"></i></span>
      <span><i class="iconfont" :class="{'icon-pause':isPlay ==true, 'icon-play':isPlay ==false}" @click="togglePlayStatus"></i></span>
      <span><i class="iconfont icon-forward"></i></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'player',
    data() {
      return {
        //切换播放状态
        isPlay: true
      }
    },
    methods: {
      // 格式化时间
      formatTime(time) {
        let min = parseInt(time / 60);
        let second = parseInt(time % 60);
        min < 10 ? min = "0" + min : min;
        second < 10 ? second = "0" + second : second;
        return min.concat(':') + second;
      },
      // 切换播放状态方法
      togglePlayStatus() {
        this.isPlay = !this.isPlay;
        this.$store.commit('set_playStatus', this.isPlay);
      }
    }
  }

</script>
<style lang="less">
  @import '../../../assets/style/mixin';
  #player {
    .playContxt-btnBox {
      .mx_wh(2.4rem, 0.8rem);
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
            .mx_fc(0.55rem, #fff);
          }
        }
        i {
          .mx_fc(0.45rem, #fff);
        }
      }
    }
    .progress-box {
      .mx_wh(70%, 0.03rem);
      margin: 0 auto;
      background: radial-gradient(#dedede -180%, transparent 100%);
    }
  }

</style>
