<template>
  <div id="bottomSongList" v-if="songListStatus == true">
    <div class="headerTitle halfBorder">歌单列表</div>
    <div class="SongListContxt">
      <ul>
        <li v-for="(item,i) in songListDetails" :key="i" class="halfBorder" @click="switchSongs(item.id)" :class="{'redLight':item.id ==curMusic}">
          <i class="iconfont icon-playing" v-if="item.id ==curMusic"></i> {{item.name}}
          <s> - {{item.ar[0].name}}</s>
        </li>
      </ul>
    </div>
    <div class="closeSongList" @click="closeSongList">关闭</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    computed: {
      //底部播放列表开关
      songListStatus() {
        return this.$store.state.playSongs.songListStatus;
      },
      //歌曲列表
      songListDetails() {
        return this.$store.state.songListDetails.tracks;
      },
      //当前音乐
      curMusic() {
        return this.$store.state.playSongs.curMusic;
      }
    },
    methods: {
      //切换歌曲
      switchSongs(id) {
        this.$store.dispatch('get_PlaySongDetails', id);
        this.$router.push({
          name: 'songDetails',
          params: {
            id: id
          }
        })
      },
      //关闭底部播放列表
      closeSongList() {
        this.$store.commit('set_songListStatus', false);
      }
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #bottomSongList {
    .mx_wh(100%, 70%);
    background: #fff;
    .mx_posbl(0, 0);
    z-index: 99999999;
    .headerTitle {
      .mx_postl(0, 0);
    }
    .headerTitle,
    .closeSongList {
      .mx_wh(100%, 10%);
      .mx_fc(.16rem, #333);
      .mx_flex_mid;
      z-index: 999999;
    }
    .SongListContxt {
      margin-top: .45rem;
      .mx_wh(100%, 80%);
      overflow-y: scroll;
      li {
        .mx_whlh(95%, .42rem, .42rem);
        margin-left: 5%;
        .mx_fc(.14rem, #333);
        .mx_single_ellipsis;
        s {
          text-decoration: none;
          .mx_fc(.12rem, #666);
        }
      }
      .redLight {
        color: #f33;
      }
    }
    .closeSongList {
      background: #fff;
      .mx_posbl(0, 0);
      &:after {
        content: "  ";
        position: absolute;
        left: 0;
        top: 0;
        width: 200%;
        height: 200%;
        border-top: 1px solid #dedede;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scale(.5, .5);
        -ms-transform: scale(.5, .5);
        transform: scale(.5, .5);
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
    }
  }

</style>
