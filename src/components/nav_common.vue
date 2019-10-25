<template>
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
    <f7-searchbar
      class="common-searchbar"
      :form="false"
      :backdrop="false"
      disable-button-text="取消"
      placeholder="康乐一生2019版"
      :clear-button="true"
      no-hairline
      search-container=".search-list"
      search-in=".item-title"
      @focus="openSearchArea"
      @click:disable="closeSearchBar"
    ></f7-searchbar>
  </f7-navbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    openSearchArea() {
      this.$store.dispatch('setSearchResultState', true)
    },
    // 关闭搜索内容框
    closeSearchBar() {
      this.$store.dispatch('setSearchResultState', false)
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