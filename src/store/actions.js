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
    console.log(res)
  },
  //获取歌曲详情
  async get_songDetails(context, payload) {
    let res = await getData('querySongDetail', payload);
    // context.commit('set_songDetails', res.data);

  }
}
