<template>
  <div class="header">
    <!-- Top Navbar-->
    <f7-navbar :title="title" back-link="Back">
      <f7-link slot="nav-right" panel-open="left" icon-f7="persons_round_fill">
      </f7-link>
    </f7-navbar>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
