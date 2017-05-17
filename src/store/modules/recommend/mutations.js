export default {
  //设置banner
  set_Recommend_Banner(state, payload) {
    state.bannerList = payload;
  },
  //设置推荐歌单
  set_Recommend_PrSongList(state, payload) {
    state.PrSongList = payload;
  }
}
