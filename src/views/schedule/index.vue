<template>
  <div class="market-index">
    <f7-block-title>Deletable Chips / Tags</f7-block-title>
    <f7-block strong class="row">
      <f7-col>
        <f7-button raised panel-open="left">Open left panel</f7-button>
      </f7-col>
      <f7-col>
        <f7-button raised panel-open="right">Open right panel</f7-button>
      </f7-col>
    </f7-block>
  </div>
</template>

<script>
export default {
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
}
</script>

<style>

</style>
