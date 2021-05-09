<template>
  <div>
    <div class='my-box'>
    </div>
    <footer class="footer">
      <nav v-if="$themeConfig.footer" class="link-list">
        <nav-link
          v-for="(item, index) in $themeConfig.footer"
          :key="index"
          :value="item"
          class="list-item"
        />
      </nav>
      <router-link :to="$localePath" class="copyright">Copyright {{' &copy; '}} Tufts University School of Engineering. All Rights Reserved.
        <!-- {{$site.title + ' &copy; ' + new Date().getFullYear()}} -->
        </router-link>
    </footer>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Footer',
  components: {
    NavLink
  }
}
</script>

<style lang="stylus" scoped>
.my-box
  // height: 20px
  // height $footerHeight
  // padding 1rem 0 .5rem
.footer
  position: fixed
  right: 0px
  left: 0px
  bottom 0px
  // padding 1rem 0 .5rem
  padding-top 1rem
  background $codeBgColor
  text-align center
  transition background .5s ease-in-out
  
  height $footerHeight
  // height $footerHeight
  // width $sidebarWidth+$contentWidth
  @media (prefers-color-scheme: dark)
    background $codeBgDarkColor
  .link-list
    .list-item
      margin 0 .5rem
      font-size .9rem
      color $whiteColor
  .copyright
    display inline-block
    margin-top .55rem
    font-size .7rem
    color #fff
  @media print
    display none
</style>
