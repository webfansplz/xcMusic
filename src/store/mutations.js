export default {
  //设置用户id
  set_userId(state, payload) {
    state.userUid = payload;
  },
  //设置推荐歌单详情
  set_songListDetails(state, payload) {
    state.songListDetails = payload;
  }
}
