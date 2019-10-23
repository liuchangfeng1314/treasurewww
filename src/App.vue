<template>
  <div id="app">
    <!-- Main Framework7 App component where we pass Framework7 params -->
    <f7-app :params="$root.f7params">
      <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
      <f7-statusbar></f7-statusbar>
      <!-- Your main view, should have "main" prop -->
      <f7-view main>
        <!-- Initial Page -->
        <f7-page color-theme="black" class="main-f7-page">
          <!-- <div class="pull-refreshing-dom">
            加载中
          </div> -->
          <!-- 头部公共navbar -->
          <!-- <f7-navbar
            no-hairline
            innerClass="common-navbar"
          > -->
          <!-- <navHome v-if="currView === 'home'" /> -->
          <!-- <navSchedule v-else-if="currView === 'schedule'" /> -->
          <!-- <navMy v-else-if="currView === 'my'" /> -->
          <!-- <navCommon v-else /> -->
          <!-- </f7-navbar> -->
          <!-- main-content -->
          <f7-tabs class="my-tabs">
            <f7-tab id="tab-1" class="common-index-wrap" tab-active @tab:show.self="usershow('home')">
              <home />
            </f7-tab>
            <f7-tab id="tab-2" class="common-index-wrap" @tab:show.self="usershow('products')">
              <products />
            </f7-tab>
            <f7-tab id="tab-3" class="common-index-wrap" @tab:show.self="usershow('my')">
              <my />
            </f7-tab>
          </f7-tabs>
          <!-- <f7-view main url="/"></f7-view> -->
          <!-- bottom -->
          <f7-toolbar tabbar labels bottom no-hairline>
            <f7-link tab-link="#tab-1" tab-link-active>
              <f7-icon class="icon-fill" f7="home">
              </f7-icon>
              <span class="tabbar-label">首页</span>
            </f7-link>
            <f7-link tab-link="#tab-2">
              <f7-icon class="icon-fill" f7="rocket">
              </f7-icon>
              <span class="tabbar-label">产品</span>
            </f7-link>
            <f7-link tab-link="#tab-3">
              <f7-icon class="icon-fill" f7="person_round">
                <f7-badge color="red">9</f7-badge>
              </f7-icon>
              <span class="tabbar-label">我的</span>
            </f7-link>
          </f7-toolbar>
        </f7-page>
      </f7-view>
      <!-- Right resizable Panel with Cover effect and dark layout theme -->
      <f7-panel right theme-dark effect="reveal">
        <f7-view>
          <f7-page>
            <f7-block>右侧抽屉内容</f7-block>
          </f7-page>
        </f7-view>
      </f7-panel>
    </f7-app>
  </div>
</template>

<script>
import "./assets/styles/common"
// import navHome from 'coms/nav_home'
// import navSchedule from 'coms/nav_schedule'
// import navMy from 'coms/nav_my'
// import navCommon from 'coms/nav_common'
import home from '@/home'
import products from '@/products'
import my from '@/my'
var FastClick = require('fastclick')
export default {
  name: 'app',
  data() {
    return {
      hideTopBar: false,
      currView: 'home',
      showSearchArea: false
    }
  },
  mounted() {
  },
  created() {
    this.$f7ready((f7) => {
      console.log('==> Framework7 对象:', f7)
    })
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
    },
    // tab 切换事件
    usershow(viewName) {
      this.currView = viewName
      // 滚回顶端
      let wrap = document.querySelector('.my-tabs')
      wrap.scrollIntoView()
      // 头部搜索框显示隐藏
      this.currView !== 'home' ? this.hideTopBar = true : this.hideTopBar = false
      // 个人中心页暂时用不到navbar，先隐藏
      // if (viewName === 'my') {
      //   this.$f7.navbar.hide('.navbar', false)
      // } else {
      //   this.$f7.navbar.show('.navbar', false)
      // }
    }
  },
  components: {
    // navMy,
    // navHome,
    // navSchedule,
    // navCommon,
    home,
    products,
    my
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
/* #app .main-f7-page .page-content {
  padding-top: 0;
} */
</style>
