<template>
  <f7-toolbar tabbar labels position="bottom" :no-hairline="true">
    <f7-link tab-link="#tab-1" tab-link-active>
      <f7-icon class="icon-fill" f7="home">
      </f7-icon>
      <span class="tabbar-label">首页</span>
    </f7-link>
    <f7-link tab-link="#tab-2">
      <f7-icon class="icon-fill" f7="rocket">
      </f7-icon>
      <span class="tabbar-label">产品</span>
    </f7-link>
    <f7-link tab-link="#tab-3">
      <f7-icon class="icon-fill" f7="person_round">
        <f7-badge color="red">9</f7-badge>
      </f7-icon>
      <span class="tabbar-label">我的</span>
    </f7-link>
  </f7-toolbar>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>

</style>
