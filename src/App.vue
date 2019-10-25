<template>
  <div id="app">
    <!-- Main Framework7 App component where we pass Framework7 params -->
    <f7-app :params="$root.f7params">
      <!-- Status bar overlay for full screen mode (Cordova or PhoneGap) -->
      <f7-statusbar :class="currView === 'my' ? 'back-color' : !0"></f7-statusbar>
      <!-- 公共下拉刷新图标组件 -->
      <div class="pull-refreshing-dom" v-show="showPullDom">
        <div class="pull-down-begin" v-show="pullstart">加载中 - 下拉1</div>
        <div class="pull-down-over" v-show="pullmove">加载中 - 下拉2</div>
        <div class="pull-over" v-show="pullRefreshing">加载中</div>
      </div>
      <!-- Your main view, should have "main" prop -->
      <f7-view main>
        <!-- Initial Page -->
        <f7-page color-theme="black" class="main-f7-page" :class="currView === 'my' ? 'image-back': !0">
          <!-- <f7-navbar title="Awesome App" v-show="currView !== 'my'"></f7-navbar> -->
          <!-- 公共navbar -->
          <navCommon />
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
        <!-- 搜索内容展示区 -->
        <div class="search-result-area" v-show="showSearchArea">
          <f7-list class="searchbar-not-found">
            <f7-list-item title="Nothing found"></f7-list-item>
          </f7-list>
          <f7-list class="search-list searchbar-found">
            <f7-list-item title="Acura"></f7-list-item>
            <f7-list-item title="Audi"></f7-list-item>
            <f7-list-item title="BMW"></f7-list-item>
            <f7-list-item title="Cadillac "></f7-list-item>
            <f7-list-item title="Chevrolet "></f7-list-item>
            <f7-list-item title="Chrysler "></f7-list-item>
          </f7-list>
        </div>
      </f7-view>
      <!-- Right resizable Panel with Cover effect and dark layout theme -->
      <f7-panel right theme-dark effect="reveal">
        <f7-view>
          <f7-page>
            <f7-block>右侧抽屉内容</f7-block>
          </f7-page>
        </f7-view>
      </f7-panel>
      <!--  -->
    </f7-app>
  </div>
</template>

<script>
import "./assets/styles/common"
// import navHome from 'coms/nav_home'
// import navSchedule from 'coms/nav_schedule'
// import navMy from 'coms/nav_my'
import navCommon from 'coms/nav_common'
import home from '@/home'
import products from '@/products'
import my from '@/my'
var FastClick = require('fastclick')
import { mapState } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      hideTopBar: false,
      currView: 'home'
    }
  },
  mounted() {
  },
  created() {
    this.$f7ready((f7) => {
      console.log('==> Framework7 对象:', f7)
      f7.searchbar.create({
        el: '.searchbar',
        searchContainer: '.list',
        searchIn: '.item-title',
        on: {
          search(sb, query, previousQuery) {
            console.log(query, previousQuery)
          }
        }
      })
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
      // let wrap = document.querySelector('.my-tabs')
      // wrap.scrollIntoView()
      // 头部搜索框显示隐藏
      this.currView !== 'home' ? this.hideTopBar = true : this.hideTopBar = false
    }
  },
  computed: {
    ...mapState({
      showPullDom: state => state.common.showPullDom,
      pullstart: state => state.common.pullstart,
      pullmove: state => state.common.pullmove,
      pullRefreshing: state => state.common.pullRefreshing,
      company: state => state.common.currChoosedCompany,
      showSearchArea: state => state.common.showSearchArea
    })
  },
  components: {
    navCommon,
    home,
    products,
    my
  }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
