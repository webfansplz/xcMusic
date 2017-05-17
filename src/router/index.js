import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//webpack按需加载组件
//个性推荐
const recommend = r => require.ensure([], () => r(require('../page/recommend/recommend')), ' recommend')
export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }
  ]
})
