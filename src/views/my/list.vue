<template>
  <f7-page ptr @ptr:refresh="loadMore" class="inline-page">
    <f7-navbar :title="title" back-link="返回" :no-hairline="true" :sliding="false" innerClass="sub-navbar">
      <f7-link slot="nav-right" panel-open="right" icon-f7="persons_round_fill">
      </f7-link>
    </f7-navbar>
     <!-- 顶部导航栏开始 -->
    <f7-list media-list>
      <f7-list-item
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :subtitle="item.author">
        <img slot="media" :src="item.cover" width="44" />
      </f7-list-item>

      <f7-block-footer>
        <p>Just pull page down to let the magic happen.<br>Note that pull-to-refresh feature is optimised for touch and native scrolling so it may not work on desktop browser.</p>
      </f7-block-footer>
    </f7-list>
    <f7-block-title>Another ultra long content block title</f7-block-title>
    <f7-block strong>
      <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
    </f7-block>

    <f7-block-title>Inset</f7-block-title>
    <f7-block strong inset>
      <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
    </f7-block>

    <f7-block-title>Tablet Inset</f7-block-title>
    <f7-block strong tablet-inset>
      <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
    </f7-block>

    <f7-block-title>With Header & Footer</f7-block-title>
    <f7-block>
      <f7-block-header>Block Header</f7-block-header>
      <p>Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      <f7-block-footer>Block Footer</f7-block-footer>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      title: '这里是下级列表页',
      items: [
        {
          title: 'Yellow Submarine',
          author: 'Beatles',
          cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-1.jpg',
        },
        {
          title: 'Don\'t Stop Me Now',
          author: 'Queen',
          cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-2.jpg',
        },
        {
          title: 'Billie Jean',
          author: 'Michael Jackson',
          cover: 'https://cdn.framework7.io/placeholder/abstract-88x88-3.jpg',
        },
      ],
      songs: ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'],
      authors: ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'],
    };
  },
  methods: {
    loadMore(event, done) {
      const self = this;

      setTimeout(() => {
        const picURL = `https://cdn.framework7.io/placeholder/abstract-88x88-${Math.round(Math.random() * 10)}.jpg`;
        const song = self.songs[Math.floor(Math.random() * self.songs.length)];
        const author = self.authors[Math.floor(Math.random() * self.authors.length)];

        self.items.push({
          title: song,
          author,
          img: picURL,
        });

        done();
      }, 1000);
    },
  },
  components: {
  }
}
</script>

<style>

</style>
