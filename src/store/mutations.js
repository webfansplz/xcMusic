export default {
  //设置用户id
  set_userId(state, payload) {
    state.userUid = payload;
  },
  //设置banner
  set_indexBanner(state, payload) {
    state.recommendList.bannerList = payload;
  }
}
