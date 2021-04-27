import themeConfig from '@theme/lib/themeConfig'
import { objectDeepMerge } from '@theme/lib/util'
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


export default ({ Vue }) => {
  Vue.use(VueAwesomeSwiper)
  Vue.component(ImgLazy.name, ImgLazy)
  Vue.mixin({
    computed: {
      $themeConfig() {
        return objectDeepMerge(themeConfig, this.$site.themeConfig)
      },
      $cover() {
        const item = this.$themeConfig.cover
        // console.log(item)
        // console.log(Array.isArray(item))
        if (this.$frontmatter.image) {
          return this.$frontmatter.image
        } else if (typeof item === 'string') {
          return item
        } else if (item[this.$route.path]) {
          return item[this.$route.path];
        } else if (Array.isArray(item)) {
          // console.log(item)
          return item;
        } else {
          return item.base || "";
        }
      },
      $isHome() {
        return (
          this.$localePath === this.$page.regularPath ||
          this.$page.regularPath.startsWith(
            '/' + this.$pluginConfig.paginatioPath
          )
        )
      },
      $homeImages() {
        // console.log(this.$themeConfig.home_images)
        return this.$themeConfig.home_images;
      }
    }
  })
}
