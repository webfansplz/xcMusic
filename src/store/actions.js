import getData from '../api/getData';
export default {
  //获取推荐歌单详情
  async get_songListDetails(context, payload) {
    context.commit('set_isLoading', true);
    let res = await getData('querySongListDetail', payload);
    context.commit('set_songListDetails', res.data.playlist);
    context.commit('set_isLoading', false);
  },
  //获取歌单
  async get_playList(context, payload) {
    context.commit('set_isLoading', true);
    //获取精品歌单
    if (payload == 'Boutique') {
      let res = await getData('queryHighquality');
      context.commit('set_playList', res.data.playlists);
    } else {
      let res = await getData('queryPlayList', {
        'order': payload
      });
      context.commit('set_playList', res.data.playlists);
    }
    context.commit('set_isLoading', false);
  },
  //获取云音乐官方排行榜
  async get_cloudMusicTopList(context, payload) {
    let indexAry = [0, 1, 3, 4];
    context.commit('set_cloudMusicTopList', '');
    for (let i = 0; i < indexAry.length; i++) {
      let res = await getData('queryToplist', {
        idx: indexAry[i]
      })
      context.commit('set_cloudMusicTopList', {
        'result': res.data.result,
        'type': indexAry[i]
      });
    }
  },
  //获取电台节目
  async get_djListDetails(context, payload) {
    let res = await getData('queryDjSub', {
      rid: payload
    })
  },
  //获取搜索列表
  async get_SearchList(context, payload) {
    context.commit('set_isLoading', true);
    let res = await getData('querySearch', payload)
    context.commit('set_searchList', res.data.result);
    context.commit('set_isLoading', false);
  },
  //获取歌手单曲
  async get_singerSong(context, payload) {
    context.commit('set_isLoading', true);
    let res = await getData('querySingerSong', {
      id: payload
    });
    context.commit('set_singerSong', res.data);
    context.commit('set_isLoading', false);
  },
  //获取歌手专辑
  async get_singerAlbums(context, payload) {
    context.commit('set_isLoading', true);
    let res = await getData('querySingerAlbums', {
      id: payload
    });
    context.commit('set_Singeralbums', res.data);
    context.commit('set_isLoading', false);
  },
  //获取专辑内容
  async get_albums(context, payload) {
    context.commit('set_isLoading', true);
    let res = await getData('queryAlbums', {
      id: payload
    });
    context.commit('set_albums', res.data);
    context.commit('set_isLoading', false);
  }
}
