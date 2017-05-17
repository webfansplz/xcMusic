import getData from '../api/getData';
export default {
  //获取用户Id
  async get_userInfo(context) {
    let res = await getData('queryPhoneLogin', {
      'phone': 15260192821,
      'password': 'aaa123456'
    })
    console.log(3122640832)
  },
  //获取banner
  async get_indexBanner(context) {
    let res = await getData('queryBanner')
    context.commit('set_indexBanner',res.data.banners);
  }
}
