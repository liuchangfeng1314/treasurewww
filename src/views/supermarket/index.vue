<template>
  <div class="market-index">
    <f7-block-title>Deletable Chips / Tags</f7-block-title>
    <f7-block strong>
      <f7-chip text="Example Chip" deleteable @click="deleteChip"></f7-chip>
      <f7-chip text="Chris" media="C" media-bg-color="orange" text-color="black" deleteable @click="deleteChip"></f7-chip>
      <f7-chip text="Jane Doe" deleteable @click="deleteChip">
        <img slot="media" src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"/>
      </f7-chip>
      <f7-chip text="One More Chip" deleteable @click="deleteChip"></f7-chip>
      <f7-chip text="Jennifer" media-bg-color="pink" media="J" deleteable @click="deleteChip"></f7-chip>
      <f7-chip text="Adam Smith" deleteable @click="deleteChip">
        <img slot="media" src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"/>
      </f7-chip>
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
