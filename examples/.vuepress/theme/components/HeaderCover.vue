<template>
  <section
    v-if="item"
    :style="{ 'backgroundImage': `url(${get_image_show})` }"
    class="flex-ycc header-cover"
  >
    <h1 class="cover-title">
      <!-- <img-lazy
        v-if="$themeConfig.logo"
        v-show="$isHome"
        :src="$themeConfig.logo"
        class="title-img"
      /> -->
      <!-- <span v-if="coverTitle" class="title-text">{{ coverTitle }}</span> -->
    </h1>
    <!-- <h2 class="cover-text">{{ $site.description }}</h2> -->
  </section>
</template>

<script>
export default {
  name: 'HeaderCover',
  props: {
    item: {
      // type: String,
      default: null
    },
  },
  data: function () {
    return {
      image_show: {
        // type: String,
        default: null
      },
      image_index: 0
    }
  },
  computed: {
    coverTitle() {
      const navItem = this.$themeConfig.nav.find(item => {
        return item.link === this.$route.path
      })

      if (this.$isHome) {
        // return this.$themeConfig.logo ? false : this.$title
        // return 'home title'
        return ''

      } else {
        return (
          (navItem && navItem.text) || this.$frontmatter.title || this.$title
        )
      }
    },
    get_image_show() {
      return this.image_show
    }
  },
  mounted() {
    // console.log(this.item)
    // console.log(Array.isArray(this.item))
    // console.log(typeof(this.item))
    if (typeof(this.item) == 'string') {
      // console.log('hahah')
      this.image_show = this.item
    }
    else if (Array.isArray(this.item)) {
      // console.log('haha')
      this.image_index = 0
      this.image_show = this.item[this.image_index]
      // console.log(this.image_show)

      this.interval = setInterval(() => {
        this.image_index = (this.image_index + 1) % this.item.length
        this.image_show = this.item[this.image_index]
      }, 10 * 1000);
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-cover
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  width 100%
  height 100%
  background-size cover
  background-position center
  transition transform .5s ease-out
  .cover-title
    width 100%
    text-align center
    .title-img
      max-width 100%
      max-height ($coverHeight / 5)
    .title-text
      max-width 100%
      max-height: ($coverHeight / 5)
      font-size 4rem
      color $whiteColor
      overflow-wrap break-word
  .cover-text
    margin-top .5rem
    font-size 1.2rem
    color $whiteColor
@media (max-width $phoneWidth)
  .header-cover
    .cover-title
      .title-text
        font-size 3rem
</style>
