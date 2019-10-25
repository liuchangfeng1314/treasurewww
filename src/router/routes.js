const routeMap = [
  {
    path: '/home',
    import: () => import('@/home')
  },
  {
    path: '/products',
    import: () => import('@/products')
  },
  {
    path: '/my',
    import: () => import('@/my')
  },
  {
    path: '/my/list',
    import: () => import('@/my/list'),
    options: {
      animate: true,
      transition: 'f7-parallax'
    }
  }
]

function _routeFactroy() {
  routeMap.forEach(item => {
    item['async'] = (routeTo, routeFrom, resolve) => {
      console.log('==> 来自', routeFrom)
      console.log('==> 去往', routeTo)
      window.scrollTo(0, 0)
      // 异步加载
      item.import().then((vc) => {
        // 返回组件
        resolve({ component: vc.default })
      })
    }
  })
}

_routeFactroy()

export default routeMap
