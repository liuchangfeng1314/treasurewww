import Vue from 'vue'
import Router from 'vue-router'
// const Home = r => require.ensure([], () => r(require('@/Home.vue')), 'home')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "home" */ '@/home/index')
    },
    {
      path: '/user/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "list" */ '@/user/list')
    },
    // 此处需特别注意至于最底部
    {
      path: '*',
      name: '404',
      component: (resolve) => require(['@/404'], resolve)
    }
  ]
})

// // 总控
// router.beforeEach((to, from, next) => {
//   console.log('router from:', from)
//   console.log('router to:', to)
//   // 滚回顶端
//   window.scrollTo(0, 0)
//   next()
// })

export default router
