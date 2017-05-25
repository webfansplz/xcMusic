import getData from '../../../api/getData';
export default {
  state: {
    //歌曲详情
    songDetails: [],
    //音乐url
    musicUrl: [],
    //音乐歌词
    Lyric: []
  },
  mutations: {
    //设置歌曲详情
    set_songDetails(state, payload) {
      state.songDetails = payload;
    },
    //设置音乐url
    set_musicUrl(state, payload) {
      state.musicUrl = payload;
    },
    //设置音乐歌词
    set_Lyric(state, payload) {
      state.Lyric = payload;
    }
  },
  actions: {
    //获取歌曲详情
    async get_songDetails(context, payload) {
      let res = await getData('querySongDetail', payload);
      context.commit('set_songDetails', res.data);
    },
    //获取音乐url
    async get_musicUrl(context, payload) {
      let res = await getData('queryMusicUrl', payload);
      context.commit('set_musicUrl', res.data.data[0].url);
      // console.log(res.data.data[0].url)
    },
    //获取音乐歌词
    async get_Lyric(context, payload) {
      let res = await getData('queryLyric', payload);
      context.commit('set_Lyric', res.data.lrc.lyric);
      // console.log(res.data.lrc.lyric)
    },
    //获取歌曲播放所需接口
    async get_PlaySongDetails(context, payload) {
      context.dispatch('get_songDetails', {
        ids: payload
      });
      context.dispatch('get_musicUrl', {
        id: payload
      });
      context.dispatch('get_Lyric', {
        id: payload
      });
    }
  }
}
