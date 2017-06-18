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
//电台节目
const djListDetails = r => require.ensure([], () => r(require('../page/djListDetails/djListDetails')), 'djListDetails')
//精品歌单
const songList = r => require.ensure([], () => r(require('../page/songList/songList')), 'songList')
//排行榜
const topList = r => require.ensure([], () => r(require('../page/topList/topList')), 'topList')
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
    }, {
      path: '/songDetails/:id',
      name: 'songDetails',
      component: songDetails
    },
    {
      path: '/djListDetails/:id',
      name: 'djListDetails',
      component: djListDetails
    }, {
      path: '/songList',
      name: 'songList',
      component: songList
    }, {
      path: '/topList',
      name: 'topList',
      component: topList
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
