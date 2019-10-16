<template>
  <div id="app">
    <!-- Main Framework7 App component where we pass Framework7 params -->
    <f7-app :params="$root.f7params">
      <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
      <f7-statusbar></f7-statusbar>
      <!-- Your main view, should have "main" prop -->
      <f7-view main url="/">
        <!-- Initial Page -->
        <f7-page>
          <!-- top -->
          <!-- <topbar /> -->
          <!-- main-content -->
           <f7-tabs>
            <f7-tab id="tab-1" class="page-content" tab-active>
              <f7-block>
                <home />
              </f7-block>
            </f7-tab>
            <f7-tab id="tab-2" class="page-content">
              <f7-block>
                <market />
              </f7-block>
            </f7-tab>
            <f7-tab id="tab-3" class="page-content">
              <f7-block>
                <user />
                <!-- <router-view /> -->
              </f7-block>
            </f7-tab>
          </f7-tabs>
          <!-- bottom -->
          <bottom />
        </f7-page>
      </f7-view>
      <!-- Left resizable Panel with Reveal effect -->
      <f7-panel left cover resizable>
        <f7-view>
          <contact />
        </f7-view>
      </f7-panel>
    </f7-app>
    <!-- 整体路由 -->
    <!-- <keep-alive exclude="">
      <router-view />
    </keep-alive> -->
  </div>
</template>

<script>
import "./assets/styles/common"
// import topbar from 'coms/topbar'
import contact from 'coms/contact'
import bottom from 'coms/bottom'
import home from '@/home'
import market from '@/supermarket'
import user from '@/user'
var FastClick = require('fastclick')
export default {
  name: 'app',
  data() {
    return {
      // attachFastClick
    }
  },
  created() {
    // 取消300ms点击延迟
    FastClick.attach(document.body)
    // TODO - for test
    if (window.cordova && window.cordova.plugins.barcodeScanner) {
      window.cordova.plugins.barcodeScanner.scan((result) => {
        if (result && result.text) {
          alert(result.text)
        }
      }, (err) => {
        console.log(err)
      }, {
        prompt: '', // 提示文字
        resultDisplayDuration: 0// 扫描成功文字停留时间
      })
    }
    window.addEventListener('scroll', this.handleScroll)
    let method = window.addEventListener ? "addEventListener" : "attachEvent"
    window[method](
      (method === "addEventListener" ? "" : "on") + "resize",
      this.onResize.bind(window),
      false
    )
    this.onResize()
  },
  methods: {
    onResize() {
      // 设置字体
      let docEl = document.documentElement;
      let width = docEl.clientWidth >= 750 ? 750 : docEl.clientWidth;
      let fontSize = width / 10;
      let defaultUIWidth = 750;
      let fontScale = width / defaultUIWidth;
      document.querySelector("html").style.fontSize = fontSize + "px";
      document.querySelector("body").style.fontSize = 20 * fontScale + "px";
    }
  },
  components: {
    // topbar,
    contact,
    bottom,
    home,
    market,
    user
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
