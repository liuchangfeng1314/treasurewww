<template>
  <div class="user-index">
    <f7-block-title>Simple Cards</f7-block-title>
    <f7-card
      content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
    ></f7-card>
    <f7-block-title>Simple Links List</f7-block-title>
    <f7-list>
      <f7-list-item title="保险公司" link="/user/list">
      </f7-list-item>
      <f7-list-item title="Link 2" link="#"></f7-list-item>
      <f7-list-item title="Link 3" link="#"></f7-list-item>
    </f7-list>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(name) {
      this.$router.push({
        name: name
      })
    }
  }
}
</script>

<style>

</style>
