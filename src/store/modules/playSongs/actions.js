import getData from '../../../api/getData';
export default {
  //获取音乐url
  async get_musicUrl(context, payload) {
    let res = await getData('queryMusicUrl', {
      id: payload
    });
    //判断是否更新音乐url
    if (context.state.curMusic == '' || context.state.curMusic != payload) {
      context.commit('set_musicUrl', res.data.data[0].url);
      context.commit('set_curMusic', payload);
    }
  },
  //获取歌曲详情
  async get_songDetails(context, payload) {
    let res = await getData('querySongDetail', payload);
    context.commit('set_songDetails', res.data);
  },
  //获取音乐歌词
  async get_Lyric(context, payload) {
    let res = await getData('queryLyric', payload);
    if (res.data.lrc != undefined) {
      context.commit('set_Lyric', res.data.lrc.lyric);
    } else {
      context.commit('set_Lyric', '[00:00.00]获取歌词失败!');
    }
  },
  //获取歌曲播放所需接口
  async get_PlaySongDetails(context, payload) {
    context.dispatch('get_musicUrl', payload);
    context.dispatch('get_songDetails', {
      ids: payload
    });
    context.dispatch('get_Lyric', {
      id: payload
    });
  },
  //上一曲,下一曲
  async go_SwitchSongs(context, payload) {
    let songList = context.rootState.songListDetails.tracks;
    let status = false;
    if (songList.length > 0) {
      for (let i = 0; i < songList.length; i++) {
        if (songList[i].id == payload.id) {
          if (payload.type == 'prev') {
            if (i == 0) {
              return songList[songList.length - 1].id;
            } else {
              return songList[i - 1].id;
            }
          } else {
            if (i == songList.length - 1) {
              return songList[0].id;
            } else {
              return songList[i + 1].id;
            }
          }
          status = true;
        }
      }
      if (status == false) {
        return false;
      }
    }
  }
}
