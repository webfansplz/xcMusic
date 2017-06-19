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
  //精品歌单{歌单}
  queryHighquality: "/top/playlist/highquality",
  //歌单{歌单}
  queryPlayList: "/top/playlist",
  //排行榜{排行榜}
  queryToplist: "/top/list",
  //推荐歌单详情
  querySongListDetail: '/playlist/detail',
  //歌曲详情
  querySongDetail: '/song/detail',
  //音乐url
  queryMusicUrl: "/music/url",
  //音乐歌词
  queryLyric: "/lyric",
  //电台节目
  queryDjSub: "/dj/program",
  //搜索
  querySearch: "/search",
  //歌手单曲
  querySingerSong: "/artists",
  //歌手专辑
  querySingerAlbums: "/artist/album",
  //专辑内容
  queryAlbums: "/album"
};
module.exports = apiList;
