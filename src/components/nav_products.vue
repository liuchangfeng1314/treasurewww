<template>
  <!-- <div class="nav-products"> -->
    <f7-navbar
      no-hairline
      innerClass="common-navbar"
    >
      <f7-nav-left>
        <f7-icon f7="chevron_down"></f7-icon>
        <f7-button color="black" panel-open="left">
          {{ company ? company.name : '全部公司' }}
        </f7-button>
      </f7-nav-left>
      <f7-nav-title>
        <f7-searchbar
          :form="false"
          :backdrop="false"
          disable-button-text="取消"
          placeholder="康乐一生2019版"
          :clear-button="true"
          no-hairline
          search-container=".products-search-list"
          search-in=".products-search-title"
          :disable-button="!$theme.aurora"
          @focus="openSearchArea"
          @click:disable="closeSearchBar"
        ></f7-searchbar>
      </f7-nav-title>
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
    </f7-navbar>
  <!-- </div> -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      showSearchArea: false
    }
  },
  methods: {
    openSearchArea() {
      this.showSearchArea = true
    },
    // 关闭搜索内容框
    closeSearchBar() {
      this.showSearchArea = false
    }
  },
  computed: {
    ...mapState({
      company: state => state.common.currChoosedCompany
    })
  }
}
</script>

<style lang="stylus">
.nav-products
  width 100%
  height 100%
  display flex
  .left
    i
      font-size 16px
    a
      padding 0
  .right
    width 70%
    margin-left 0
    margin-right 40px
    display block
    .searchbar
      height auto
      input
        border-radius 8px
  i
    font-size 32px
</style>