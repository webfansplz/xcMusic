export default {
  //设置用户id
  set_userId(state, payload) {
    state.userUid = payload;
  },
  //设置加载状态
  set_isLoading(state, payload) {
    state.isLoading = payload;
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
      state.cloudMusicNewTopList = {
        id: 1
      };
      state.cloudMusicHotTopList = {
        id: 1
      };
      state.cloudMusicUpTopList = {
        id: 1
      };
      state.cloudMusicEleTopList = {
        id: 1
      };
    } else {
      if (payload.type == 0) {
        state.cloudMusicNewTopList = payload.result;
      } else if (payload.type == 1) {
        state.cloudMusicHotTopList = payload.result;
      } else if (payload.type == 3) {
        state.cloudMusicUpTopList = payload.result;
      } else {
        state.cloudMusicEleTopList = payload.result;
      }
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
  //设置歌手专辑
  set_Singeralbums(state, payload) {
    state.Singeralbums = payload;
  },
  //设置专辑内容
  set_albums(state, payload) {
    state.albums = payload;
  }
}
