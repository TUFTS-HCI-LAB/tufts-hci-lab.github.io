<template>
  <section class="layout">
    <!-- <list :class="{ 'cover-list': $cover, 'home-list': $isHome }"></list> -->
    <!-- <pagination /> -->
    <info />
  </section>
</template>

<script>
// import List from '@theme/components/List.vue'
// import Pagination from '@theme/components/Pagination.vue'
import Info from '@theme/components/Info.vue'

export default {
  name: 'Layout_about',
  components: {
    Info,
  },
  mounted() {
    // console.log('Is it home? '+this.$isHome)
    // console.log(this.$cover)
  }
}
</script>

<style lang="stylus" scoped>
.layout
  .content
    padding 0
</style>
