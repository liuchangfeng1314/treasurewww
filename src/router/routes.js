const routeMap = [
  {
    path: '/user/list',
    import: () => import('@/user/list')
  }
]

function _routeFactroy() {
  routeMap.forEach(item => {
    item['async'] = (routeTo, routeFrom, resolve) => {
      console.log('==> 来自', routeFrom)
      console.log('==> 去往', routeTo)
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
