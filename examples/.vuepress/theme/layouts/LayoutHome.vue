<template>
  <section class="layout-home">
    <!-- <h1>this is home</h1> -->
    <SwiperImage :images="$homeImages"/>
    <ListHomePage :class="{ 'cover-list': $cover, 'home-list': $isHome }"></ListHomePage>
    <pagination />
  </section>
</template>

<script>
import ListHomePage from '@theme/components/ListHomePage.vue'
import Pagination from '@theme/components/Pagination.vue'
import SwiperImage from '@theme/components/SwiperImage.vue'

export default {
  name: 'LayoutHome',
  components: {
    ListHomePage,
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
