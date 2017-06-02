export default {
  //设置歌曲详情
  set_songDetails(state, payload) {
    state.songDetails = payload;
  },
  //设置音乐url
  set_musicUrl(state, payload) {
    state.musicUrl = payload;
  },
  //设置音乐歌词
  set_Lyric(state, payload) {
    state.Lyric = payload;
  },
  //设置播放状态
  set_playStatus(state, payload) {
    state.playStatus = payload;
  }
}
