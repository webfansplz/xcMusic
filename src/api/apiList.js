const apiList = {
  //手机登录接口
  queryPhoneLogin: '/login/cellphone',
  //用户信息
  queryUserSubcount: '/user/playlist',
  //获取轮播banner{个性推荐}
  queryBanner: '/banner',
  //获取推荐歌单{个性推荐}
  queryPrSongList: "/personalized",
  //获取独家放送{个性推荐}
  queryPrivateContxt: "/personalized/privatecontent",
  //获取最新音乐{个性推荐}
  queryNewSong: "/personalized/newsong",
  //推荐MV{个性推荐}
  queryPrMv: "/personalized/mv",
  //主播电台{个性推荐}
  queryPrBCStation: "/personalized/djprogram",
  //推荐歌单详情
  querySongListDetail: '/playlist/detail'
};
module.exports = apiList;
