<template>
  <div id="songDetails">
    <div class="header">
      <i class="iconfont icon-left" @click="goBack"></i>
      <p>{{songDetails.songs[0].name}}</p>
      <span>{{songDetails.songs[0].ar[0].name}}</span>
      <div class="bar-line"></div>
    </div>
    <div class="playContxt">
      <div class="playContxt-m">
        <span class="play-controler" :class="{'play-controler-status':playStatus==true}" v-if="showLyric == false"></span>
        <div class="cd-wrapper" @click="showLyric = true" v-if="showLyric == false">
          <div class="cd-masking">
          </div>
          <img v-lazy="songDetails.songs[0].al.picUrl" class="play-animat" :class="{'play-animat-status':playStatus==false}">
        </div>
        <div class="LyricBox" v-if="showLyric == true" @click="showLyric = false">
          <ul :style="{marginTop:format.compLyricPos(musicCurtime,Lyric)}">
            <li v-for="(item,i) in Lyric" :key="i" :class="{highBright:format.formatLyrichighBright(musicCurtime,Lyric,i)}">{{item[1]}}</li>
          </ul>
        </div>
      </div>
      <div class="playContxt-f">
        <player></player>
      </div>
    </div>
    <div class="masking">
      <div class="cover-bg" :style="{backgroundImage:'url('+songDetails.songs[0].al.picUrl+')'}"></div>
      <div class="cover-masking"></div>
    </div>
    <bottomSongList></bottomSongList>
  </div>
</template>
<script>
  import player from './children/player';
  import bottomSongList from '../../components/bottomSongList/bottomSongList';
  import {
    mapState
  } from 'vuex';
  export default {
    name: 'songDetails',
    data() {
      return {
        showLyric: false
      }
    },
    components: {
      player,
      bottomSongList
    },
    created() {
      this.$store.dispatch('get_PlaySongDetails', this.$route.params.id);
    },
    computed: {
      ...mapState({
        //播放状态
        playStatus: state => state.playSongs.playStatus,
        //歌曲当前时间
        musicCurtime: state => state.playSongs.musicCurtime,
        //歌曲详情
        songDetails: state => state.playSongs.songDetails,
      }),
      //音乐歌词
      Lyric() {
        return this.format.formatLyric(this.$store.state.playSongs.Lyric);
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
  }

</script>
<style lang="less">
  @import './songDetails';

</style>
