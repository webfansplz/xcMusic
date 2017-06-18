import getData from '../api/getData';
export default {
  //获取用户Id
  // async get_userInfo(context) {
  //   let res = await getData('queryPhoneLogin', {
  //   })
  //   console.log(3122640832)
  // },
  //获取推荐歌单详情
  async get_songListDetails(context, payload) {
    let res = await getData('querySongListDetail', payload);
    context.commit('set_songListDetails', res.data.playlist);
    console.log(res.data.playlist)
  },
  //获取歌单
  async get_playList(context, payload) {
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
  },
  //获取云音乐官方排行榜
  async get_cloudMusicTopList(context, payload) {
    let indexAry = [0, 1, 3, 4];
    context.commit('set_cloudMusicTopList', '');
    for (let i = 0; i < indexAry.length; i++) {
      let res = await getData('queryToplist', {
        idx: i
      })
      context.commit('set_cloudMusicTopList', res.data.result);
    }
  },
  //获取电台节目
  async get_djListDetails(context, payload) {
    let res = await getData('queryDjSub', {
      rid: payload
    })
    console.log(res)
    // context.commit('set_djListDetails', res.data.result);
  }
}
