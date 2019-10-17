import Vue from 'vue'
import App from './App.vue'
import routes from './router/routes'
import store from './store/index'
import Api from './api'
import 'framework7/css/framework7.bundle.min.css'
import 'framework7-icons'
// framework7 核心包（全部）
import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle'
Framework7.use(Framework7Vue)

Vue.prototype.Api = Api

Vue.config.productionTip = false

// 增加cordova文件
if (window.location.protocol === 'file:') {
  let cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

new Vue({
  store,
  data() {
    return {
      f7params: {
        name: 'Treasure',
        id: 'com.baolian.treasure',
        routes: routes,
        view: {
          // 取消slide动画
          iosDynamicNavbar: false
        },
        navbar: {
          // 在滚动时隐藏
          hideOnPageScroll: false
        }
      }
    }
  },
  render: h => h(App),
}).$mount('#app')
