<template>
  <div id="songDetails">
    {{songDetails}}
  </div>
</template>
<script>
  export default {
    name: 'songDetails',
    components: {},
    created() {
      this.$store.dispatch('get_PlaySongDetails', this.$route.params.id)
    },
    computed: {
      //歌曲详情
      songDetails() {
        // console.log(this.$store.state.playSongs.songDetails.songs[0].al['picUrl'])
        return this.$store.state.playSongs.songDetails;
      },
      //音乐url
      musicUrl() {
        return this.$store.state.playSongs.musicUrl;
      },
      //音乐歌词
      Lyric() {
        return this.$store.state.playSongs.Lyric;
      }
    }
  }

</script>
<style lang="less">
  @import '../../assets/style/mixin';
  #songDetails {
    position: fixed;
    .mx_wh(100%, 100%);
  }

</style>
