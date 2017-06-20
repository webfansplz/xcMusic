import getData from '../../../api/getData';
export default {

  // 初始化个性推荐页面
  async initRecommendPage(context) {
    //获取banner
    context.dispatch('get_Recommend_Banner');
    //获取推荐歌单
    context.dispatch('get_Recommend_PrSongList');
    //获取独家放送
    context.dispatch('get_Recommend_PrivateContxt');
    //获取最新音乐
    // context.dispatch('get_Recommend_PrNewSong');
    //获取推荐MV
    context.dispatch('get_Recommend_PrMV');
    //获取主播电台
    context.dispatch('get_Recommend_PrBCStation');
  },
  //获取banner
  async get_Recommend_Banner(context) {
    let res = await getData('queryBanner')
    context.commit('set_Recommend_Banner', res.data.banners);
  },
  //获取推荐歌单
  async get_Recommend_PrSongList(context) {
    let res = await getData('queryPrSongList');
    context.commit('set_Recommend_PrSongList', res.data.result);
  },
  //获取独家放送
  async get_Recommend_PrivateContxt(context) {
    let res = await getData('queryPrivateContxt');
    context.commit('set_Recommend_PrivateContxt', res.data.result);
  },
  //获取最新音乐
  async get_Recommend_PrNewSong(context) {
    let res = await getData('queryNewSong');
    context.commit('set_Recommend_PrNewSong', res.data.result);
  },
  //获取推荐MV
  async get_Recommend_PrMV(context) {
    let res = await getData('queryPrMv');
    context.commit('set_Recommend_PrMV', res.data.result);
  },
  //获取主播电台
  async get_Recommend_PrBCStation(context) {
    let res = await getData('queryPrBCStation');
    context.commit('set_Recommend_PrBCStation', res.data.result);
  },
}
