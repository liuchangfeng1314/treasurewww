<template>
  <div class="company-index">
    <f7-block>
      <div class="block-title">
        <h1><f7-icon f7="cat"></f7-icon> 所有保险公司</h1>
        <p>请选择你想查询的保险公司</p>
      </div>
      <!-- 公司搜索框 -->
      <f7-searchbar
        :backdrop="false"
        disable-button-text="取消"
        placeholder="保险公司名称"
        search-container=".search-list"
        search-in=".item-title"
        :disabled="showSearchDataList"
        :disable-button="!$theme.aurora"
        @focus="showSearchDataList = true"
        @blur="showSearchDataList = false"
        @click:disable="showSearchDataList = false"
      ></f7-searchbar>
      <div class="company-search-result" v-show="showSearchDataList">
        <f7-list class="searchbar-not-found">
          <f7-list-item title="暂无结果"></f7-list-item>
        </f7-list>
        <f7-list class="search-list searchbar-found">
          <f7-list-item 
            v-for="(item, index) in companyList" 
            :key="index" 
            :title="item.name"
            @click="chooseCompany(item.code, item.name)"
          ></f7-list-item>
        </f7-list>
      </div>
      <!-- Inset content block -->
      <div class="block block-strong inset">
        <f7-row class="company-row">
          <f7-col width="50" tablet-width="25" v-for="(item, index) in companyList" :key="index">
            <f7-button @click="chooseCompany(item.code, item.name)" :color="currCompany === item.code ? 'red' : 'black'">{{ item.name }}</f7-button>
          </f7-col>
        </f7-row>
      </div>
    </f7-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearchDataList: false,
      currCompany: -1,
      companyList: [
        {
          code: 1,
          name: '招商仁和'
        },
        {
          code: 2,
          name: '恒大人寿'
        },
        {
          code: 3,
          name: '横琴人寿'
        }
      ]
    }
  },
  methods: {
    // 选中方法
    chooseCompany(code, name) {
      // 对搜索结果的处理（隐藏搜索数据框）
      this.showSearchDataList = false
      this.currCompany = code
      this.$store.dispatch('setCurrentChoosedCompany', {
        code: code,
        name: name
      })
    }
  }
}
</script>

<style lang="stylus">
.company-index
  .block.inset
    margin 0
    padding 10px
  .block
    h1
      margin-bottom 0
    p
      margin 0
    .chip
      margin-left 6px
      margin-right 6px
      margin-bottom 10px
  .searchbar
    margin-bottom 12px
  .company-search-result
    .list
      margin 0
      margin-bottom 24px
</style>