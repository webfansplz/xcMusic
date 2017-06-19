export default {
  //设置用户id
  set_userId(state, payload) {
    state.userUid = payload;
  },
  //设置推荐歌单详情
  set_songListDetails(state, payload) {
    state.songListDetails = payload;
  },
  //设置歌单列表
  set_playList(state, payload) {
    state.playList = payload;
  },
  //设置云音乐官方排行榜
  set_cloudMusicTopList(state, payload) {
    if (payload == '') {
      state.cloudMusicTopList = [];
    } else {
      state.cloudMusicTopList.push(payload);
    }
  },
  //设置电台节目
  set_djListDetails(state, payload) {
    state.djListDetails = payload;
  },
  //设置搜索列表
  set_searchList(state, payload) {
    state.searchList = payload;
  },
  //设置歌手单曲
  set_singerSong(state, payload) {
    state.singerSong = payload;
  },
  //设置专辑
  set_albums(state, payload) {
    state.albums = payload;
  }
}
