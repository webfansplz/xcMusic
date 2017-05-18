export default {
  //设置banner
  set_Recommend_Banner(state, payload) {
    state.bannerList = payload;
  },
  //设置推荐歌单
  set_Recommend_PrSongList(state, payload) {
    state.PrSongList = payload;
  },
  //设置独家放送
  set_Recommend_PrivateContxt(state, payload) {
    state.PrivateContxt = payload;
  },
  //设置最新音乐
  set_Recommend_PrNewSong(state, payload) {
    state.PrNewSong = payload;
  },
  //设置推荐MV
  set_Recommend_PrMV(state, payload) {
    state.PrMV = payload;
  },
  //设置主播电台电台
  set_Recommend_PrBCStation(state, payload) {
    state.PrBCStation = payload;
  },
}
