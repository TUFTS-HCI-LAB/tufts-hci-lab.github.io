<template>
  <section class="layout-home">
    <h1>this is home</h1>
    <SwiperImage :images="$homeImages"/>
    <list :class="{ 'cover-list': $cover, 'home-list': $isHome }"></list>
    <pagination />
  </section>
</template>

<script>
import List from '@theme/components/List.vue'
import Pagination from '@theme/components/Pagination.vue'
import SwiperImage from '@theme/components/SwiperImage.vue'

export default {
  name: 'LayoutHome',
  components: {
    List,
    Pagination,
    SwiperImage
  },
  mounted() {
    // console.log('Is it home? '+this.$isHome)
    // console.log(this.$cover)
  }
}
</script>

<style lang="stylus" scoped>
.layout-home
  .content
    padding 0
</style>
