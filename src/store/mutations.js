export default {
  //设置用户id
  set_userId(state, payload) {
    state.userUid = payload;
  },
  //设置推荐歌单详情
  set_songListDetails(state, payload) {
    state.songListDetails = payload;
  },
  //设置歌曲详情
  set_songDetails(state, payload) {
    state.songDetails = payload;
  }
}
