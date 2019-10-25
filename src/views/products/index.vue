<template>
  <div class="products-index">
    <f7-page>
      <!-- 头部navbar -->
      <!-- <navProducts /> -->
      <!-- 左侧保险公司选择 -->
      <f7-panel left reveal resizable class="products-panel">
        <f7-view>
          <company />
        </f7-view>
      </f7-panel>
    </f7-page>
  </div>
</template>

<script>
import '../../assets/styles/products.styl'
import company from '../../components/company'
// import navProducts from 'coms/nav_products'
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.company)
  },
  methods: {
    deleteChip(e) {
      const $$ = this.$$
      const app = this.$f7
      const target = e.target
      app.dialog.confirm('Do you want to delete this tiny demo Chip?', () => {
        $$(target).parents('.chip').remove()
      })
    },
  },
  computed: {
    ...mapState({
      company: state => state.common.currChoosedCompany
    })
  },
  components: {
    company,
    // navProducts
  }
}
</script>

<style>

</style>
