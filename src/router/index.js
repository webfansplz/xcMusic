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
//精品歌单
const songList = r => require.ensure([], () => r(require('../page/songList/songList')), 'songList')
//排行榜
const topList = r => require.ensure([], () => r(require('../page/topList/topList')), 'topList')
//搜索列表
const searchList = r => require.ensure([], () => r(require('../page/searchList/searchList')), 'searchList')
//获取歌手歌单
const singer = r => require.ensure([], () => r(require('../page/singer/singer')), 'singer')
//专辑详情
const albumsListDetails = r => require.ensure([], () => r(require('../page/albumsListDetails/albumsListDetails')), 'albumsListDetails')
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
      path: '/songList',
      name: 'songList',
      component: songList
    }, {
      path: '/topList',
      name: 'topList',
      component: topList
    }, {
      path: '/searchList',
      name: 'searchList',
      component: searchList
    }, {
      path: '/singer/:id',
      name: 'singer',
      component: singer
    },
    {
      path: '/albumsListDetails/:id',
      name: 'albumsListDetails',
      component: albumsListDetails
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
