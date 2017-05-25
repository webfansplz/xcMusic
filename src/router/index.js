import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//webpack按需加载组件
//个性推荐
const recommend = r => require.ensure([], () => r(require('../page/recommend/recommend')), ' recommend')
//歌单详情
const songListDetails = r => require.ensure([], () => r(require('../page/songListDetails/songListDetails')), 'songListDetails')
//歌曲详情
const songDetails = r => require.ensure([], () => r(require('../page/songDetails/songDetails')), 'songDetails')
export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }, {
      path: '/songListDetails/:id',
      name: 'songListDetails',
      component: songListDetails
    },{
      path:'/songDetails',
      name:'songDetails',
      component:songDetails
    }
  ]
})
