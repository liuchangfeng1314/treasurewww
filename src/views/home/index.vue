<template>
  <f7-page 
    class="index-page home-index" 
    ptr 
    @ptr:pullstart="pullStart"
    @ptr:pullmove="pullMove"
    @ptr:pullend="pullEnd"
    @ptr:refresh="loadMore" 
    :ptr-preloader="false">
    <!-- 首页主要内容区 -->
    <!-- top - search - bar -->
    <!-- <navHome /> -->
    <div class="swiper-wrap">
      <!-- 轮播图 -->
      <f7-swiper 
        pagination 
        :params="{
          speed: 500, 
          slidesPerView: 1, 
          spaceBetween: 50, 
          autoplay: {
            disableOnInteraction: false,
            delay: 2000
          },
          loop: true}">
        <f7-swiper-slide v-for="(item, index) in bannerList" :key="index">
          <img :src="item.img" alt="">
        </f7-swiper-slide>
      </f7-swiper>
    </div>
    <!-- 功能区 -->
    <f7-card no-shadow>
      <div class="events-block">
        <ul>
          <li v-for="(item, index) in menus" :key="index" @click="$f7router.navigate('/my/list')">
            <f7-icon :class="'icon-' + item.name + ''"></f7-icon>
            <label>{{ item.text }}</label>
          </li>
        </ul>
      </div>
    </f7-card>
    <!-- 文字轮播区 -->
    <div class="text-swiper-wrap">
      <span class="title">
        <f7-icon f7="volume_low"></f7-icon>
      </span>
      <f7-swiper class="index-text-swiper" :params="{
        speed: 500, 
        slidesPerView: 1, 
        spaceBetween: 0, 
        autoplay: {
          disableOnInteraction: false,
          delay: 2500
        },
        height: 40,
        direction: 'vertical',
        loop: true}">
        <f7-swiper-slide>
          看完康乐一生2019，糟糕，是心动的感觉！
        </f7-swiper-slide>
        <f7-swiper-slide>
          看完康乐一生2019，糟糕，是心动的感觉！
        </f7-swiper-slide>
        <f7-swiper-slide>
          看完康乐一生2019，糟糕，是心动的感觉！
        </f7-swiper-slide>
      </f7-swiper>
    </div>
    <!-- 推荐类 -->
    <div class="recommand-area">
      <span class="title">为你推荐</span>
      <span class="title-btn">查看全部</span>
      <div class="recommand-wrap">
        <!-- 主推 -->
        <f7-list media-list>
          <f7-list-item
            no-chevron
            link="#"
            title="医保无忧百万医疗"
            subtitle="￥200元起"
            text="65岁可投保，新增住院津贴65岁可投保，新增住院津贴65岁可投保，新增住院津贴65岁可投保，新增住院津贴"
          >
            <img slot="media" :src="pro" />
          </f7-list-item>
        </f7-list>
        <!-- 二级产品列表 -->
        <div class="secondary-list">
          <ul>
            <li>
              <i class="pro-badge">·医疗</i>
              <img :src="pro1" alt="">
              <span class="title">千万护航</span>
            </li>
            <li>
              <i class="pro-badge">·医疗</i>
              <img :src="pro2" alt="">
              <span class="title">出行无忧</span>
            </li>
            <li>
              <i class="pro-badge">·年金</i>
              <img :src="pro3" alt="">
              <span class="title">万年红</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- tab 产品分类 -->
    <div class="index-tab-wrap">
      <span class="title">首页产品分类</span>
      <div class="toolbar tabbar tabbar-scrollable no-hairline">
        <div class="toolbar-inner">
          <a href="#hometab-1" class="tab-link tab-link-active">意外和医疗</a>
          <a href="#hometab-2" class="tab-link">年金理财</a>
          <a href="#hometab-3" class="tab-link">其他</a>
        </div>
      </div>
      <!-- tab 主要切换区域 -->
      <f7-tabs swipeable>
        <f7-tab id="hometab-1" tab-active>
          <f7-list media-list inset>
            <f7-list-item
              link="#"
              title="华宝安行"
              text="这里是摘要信息..."
              subtitle="542元起">
              <img slot="media" :src="pro6" />
            </f7-list-item>
            <f7-list-item
              link="#"
              title="出行无忧"
              text="这里是摘要信息..."
              subtitle="100元起">
              <img slot="media" :src="pro5" />
            </f7-list-item>
            <f7-list-item
              link="#"
              title="千万护航"
              text="这里是摘要信息..."
              subtitle="722元起">
              <img slot="media" :src="pro4" />
            </f7-list-item>
          </f7-list>
        </f7-tab>
        <f7-tab id="hometab-2">
          <f7-list media-list inset>
            <f7-list-item
              link="#"
              title="盛世鑫悦"
              text="这里是摘要信息..."
              subtitle="5000元起">
              <img slot="media" :src="pro4" />
            </f7-list-item>
            <f7-list-item
              link="#"
              title="万年红"
              text="这里是摘要信息..."
              subtitle="1000元起">
              <img slot="media" :src="pro5" />
            </f7-list-item>
            <f7-list-item
              link="#"
              title="鑫丰盈年金险"
              text="这里是摘要信息..."
              subtitle="2000元起">
              <img slot="media" :src="pro6" />
            </f7-list-item>
          </f7-list>
        </f7-tab>
        <f7-tab id="hometab-3">
          <f7-list media-list inset>
            <f7-list-item
              link="#"
              title="华宝安行"
              text="这里是摘要信息..."
              subtitle="542元起">
              <img slot="media" :src="pro5" />
            </f7-list-item>
            <f7-list-item
              link="#"
              title="出行无忧"
              text="这里是摘要信息..."
              subtitle="100元起">
              <img slot="media" :src="pro4" />
            </f7-list-item>
            <f7-list-item
              link="#"
              title="千万护航"
              text="这里是摘要信息..."
              subtitle="722元起">
              <img slot="media" :src="pro6" />
            </f7-list-item>
          </f7-list>
        </f7-tab>
      </f7-tabs>
    </div>
  </f7-page>
</template>

<script>
import '../../assets/styles/index.styl'
// import navHome from 'coms/nav_home'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import pro1 from '../../assets/images/pro1.jpg'
import pro2 from '../../assets/images/pro2.jpg'
import pro3 from '../../assets/images/pro3.jpg'
import pro4 from '../../assets/images/pro4.jpg'
import pro5 from '../../assets/images/pro5.jpg'
import pro6 from '../../assets/images/pro6.png'
import pro from '../../assets/images/pro-main.jpg'
export default {
  data() {
    return {
      pro,
      pro1,
      pro2,
      pro3,
      pro4,
      pro5,
      pro6,
      // 轮播图数据
      bannerList: [
        {
          img: banner1,
          url: ''
        },
        {
          img: banner2,
          url: ''
        }
      ],
      // 中间功能区菜单
      menus: [
        {
          name: 'activity',
          text: '活动'
        },
        {
          name: 'ins2c',
          text: '录单'
        },
        {
          name: 'car',
          text: '车险'
        },
        {
          name: 'pro',
          text: '产品'
        },
        {
          name: 'fast',
          text: '快投'
        },
        {
          name: 'gear',
          text: '展业'
        },
        {
          name: 'analysis',
          text: '分析'
        },
        {
          name: 'increase',
          text: '增员'
        }
      ],
      showSearchArea: false,
      // showPullDom: false,
      // pullstart: false,
      // pullmove: false,
      // pullRefreshing: false
    }
  },
  methods: {
    pullStart() {
      console.log('==> 下拉开始')
      // 显示loading dom
      // this.showPullDom = true
      this.$store.dispatch('setPullDownState', true)
    },
    pullMove(e) {
      if (e.detail.touchesDiff >= 40 && e.detail.touchesDiff < 85) {
        // 下拉到一定区域，下拉箭头显示
        // this.pullstart = true
        this.$store.dispatch('setPullStart', true)
      } else if (e.detail.touchesDiff >= 85) {
        // 下拉箭头隐藏，释放箭头显示
        // this.pullstart = false
        // this.pullmove = true
        this.$store.dispatch('setPullStart', false)
        this.$store.dispatch('setPullMove', true)
      }
    },
    pullEnd() {
      console.log('==> 下拉完毕')
      // 下拉箭头和释放箭头隐藏
      // this.pullstart = false
      // this.pullmove = false
      this.$store.dispatch('setPullStart', false)
      this.$store.dispatch('setPullMove', false)
    },
    loadMore(event, done) {
      // loading图标显示
      // this.pullRefreshing = true
      this.$store.dispatch('setPullRefreshing', true)
      setTimeout(() => {
        // 刷新完毕，获取到数据，loading图标隐藏，loading dom隐藏
        console.log('==> 下拉刷新：', '数据已更新')
        // this.pullRefreshing = false
        // this.showPullDom = false
        this.$store.dispatch('setPullRefreshing', false)
        this.$store.dispatch('setPullDownState', false)
        done()
      }, 1000)
    },
    openSearchArea() {
      this.showSearchArea = true
    },
    // 关闭搜索内容框
    closeSearchBar() {
      this.showSearchArea = false
    }
  },
  mounted() {
    // 原生dom选择器绑定刷新方法
    // this.$$('.ptr-content').on('ptr:refresh', () => {
    //   setTimeout(() => {
    //     this.$f7.ptr.done()
    //   }, 1000)
    // })
  },
  components: {
    // navHome
  }
}
</script>

<style>

</style>
