<template>
  <f7-page 
    @ptr:pullmove="pullMove" 
    @ptr:pullend="pullEnd" 
    @ptr:refresh="loadMore" 
    :ptr-preloader="false"
    class="user-index no-navbar">
    <!-- <div class="user-index no-navbar"> -->
      <!-- <div class="transform-top-back"></div> -->
      <div class="my-top-back">
        <!-- 头部背景 -->
        <!-- <img class="back-avatar" :src="topbackimg" alt=""> -->
        <div class="avatar">
          <img :src="avatar" alt="">
          <div class="text-info">
            <label class="name">保联科技</label>
            <span class="summary">总部直属</span>
          </div>
          <span class="right">
            <i class="icon icon-coins"></i>
            <em>每日签到</em>
          </span>
        </div>
        <!-- 广告推广区域 -->
        <!-- <div class="info-block shadow">
        </div> -->
      </div>
      <!-- 主功能区 -->
      <f7-card
        class="my-order"
        title="我的订单"
      >
        <div class="order-btns">
          <div class="split"></div>
          <ul>
            <li class="" @click="$f7router.navigate('/my/list')">
              <i class="icon icon-order-car"></i>
              <p>寿险订单</p>
            </li>
            <li class="">
              <i class="icon icon-order-life"></i>
              <p>车险订单</p>
            </li>
          </ul>
        </div>
      </f7-card>
      <!-- 主功能区 -->
      <f7-card
        class="my-service"
        title="我的服务"
      >
        <div class="main-btns" slot="content">
          <ul>
            <li v-for="(item, index) in services" :key="index">
              <f7-icon :class="'icon-' + item.name + ''"></f7-icon>
              <label>{{ item.text }}</label>
            </li>
          </ul>
        </div>
      </f7-card>
      <!-- 邀请广告位 -->
      <div class="invite-block">
        <div class="text">
          <p class="no-margin-bottom"><label>邀请好友</label>  <em>即得30元红包</em></p>
          <p class="no-margin-top no-margin-bottom">更有机会获得枸杞和保温杯</p>
          <i class="icon icon-go"></i>
        </div>
      </div>
      <!-- 其他业务模块入口 -->
      <f7-card title="其他">
        <f7-list>
          <f7-list-item link="#" title="工号管理" after="999">
            <f7-icon slot="media" icon="icon-cardno"></f7-icon>
          </f7-list-item>
          <f7-list-item link="#" title="机构查询" after="深圳机构">
            <f7-icon slot="media" icon="icon-officequery"></f7-icon>
          </f7-list-item>
          <f7-list-item link="#" title="折标速查">
            <f7-icon slot="media" icon="icon-discount"></f7-icon>
          </f7-list-item>
          <f7-list-item link="#" title="海报管理" badge="7">
            <f7-icon slot="media" icon="icon-poster"></f7-icon>
          </f7-list-item>
        </f7-list>
      </f7-card>
    <!-- </div> -->
  </f7-page>
</template>

<script>
import '../../assets/styles/my.styl'
import avatar from '../../assets/images/avatar.jpeg'
import inviteImg from '../../assets/images/welfare.jpg'
// import topbackimg from '../../assets/images/user-top-back-3.png'
export default {
  data() {
    return {
      avatar,
      // topbackimg,
      inviteImg,
      // 中间功能区菜单
      services: [
        {
          name: 'orders',
          text: '保单管理'
        },
        {
          name: 'teamwork',
          text: '团队管理'
        },
        {
          name: 'products',
          text: '计划书管理'
        },
        {
          name: 'integral',
          text: '积分管理'
        },
        {
          name: 'birthday',
          text: '生日跟踪'
        },
        {
          name: 'proceeddate',
          text: '续期管理'
        },
        {
          name: 'timesheet',
          text: '考勤'
        },
        {
          name: 'wallet',
          text: '信用钱包'
        }
      ],
      refreshing: false
    }
  },
  created() {
    // 设置背景颜色与头部背景图片的色调一致
    // document.querySelector('body').style.backgroundColor = '#3b8aff'
  },
  methods: {
    beforeIn() {
      console.log('==> 准备进入', '个人中心')
    },
    pullMove(e) {
      this.refreshing = false
      let value = e.detail.translate
      document.querySelector('.transform-top-back').style.transform = `scale(${1 + value / 500})`
    },
    pullEnd() {
      if (!this.refreshing) {
        this.resetScale()
      }
    },
    resetScale() {
      document.querySelector('.transform-top-back').style.transform = 'scale(1)'
    },
    loadMore(event, done) {
      this.refreshing = true
      setTimeout(() => {
        console.log('==> 下拉刷新：', '数据已更新')
        this.resetScale()
        this.refreshing = false
        done()
      }, 1000)
    }
  }
}
</script>

<style>

</style>
