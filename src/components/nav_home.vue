<template>
  <div class="nav-home">
    <f7-navbar
      no-hairline
      innerClass="common-navbar"
    >
      <f7-nav-left>
        <f7-icon f7="message"></f7-icon>
      </f7-nav-left>
      <f7-nav-title>
        <f7-searchbar
          :backdrop="false"
          disable-button-text="取消"
          placeholder="康乐一生2019版"
          :clear-button="true"
          no-hairline
          search-container=".search-list"
          search-in=".item-title"
          :disable-button="!$theme.aurora"
          @focus="openSearchArea"
          @click:disable="closeSearchBar"
        ></f7-searchbar>
      </f7-nav-title>
      <f7-nav-right>
        <f7-icon f7="document_person"></f7-icon>
      </f7-nav-right>
    </f7-navbar>
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
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="stylus">
.nav-home
  width 100%
  display flex
</style>