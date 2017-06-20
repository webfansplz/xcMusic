export default {
  //设置歌曲详情
  set_songDetails(state, payload) {
    state.songDetails = payload;
  },
  //设置音乐url
  set_musicUrl(state, payload) {
    state.musicUrl = payload;
  },
  //设置当前播放音乐
  set_curMusic(state, payload) {
    state.curMusic = payload;
  },
  //设置歌曲总时间
  set_musicDuration(state, payload) {
    state.musicDuration = payload;
  },
  //设置歌曲播放时间
  set_musicCurtime(state, payload) {
    state.musicCurtime = payload;
  },
  //设置音乐歌词
  set_Lyric(state, payload) {
    state.Lyric = payload;
  },
  //设置播放状态
  set_playStatus(state, payload) {
    state.playStatus = payload;
  },
  //设置底部播放列表开关
  set_songListStatus(state, payload) {
    state.songListStatus = payload;
  }
}
