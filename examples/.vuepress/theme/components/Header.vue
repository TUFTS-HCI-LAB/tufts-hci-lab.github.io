<template>
  <header class="header">
    <div class="header-navbar">
      <div class="flex-xbc main header-nav">
        <div class="nav-link">
          <!-- Logo -->
          <router-link
            v-if="$themeConfig.logo"
            :to="$localePath"
            class="inblock link-logo"
          >
            <img-lazy :src="$themeConfig.logo" class="logo-img" alt="logo" />
          </router-link>
          <br/>

          <!-- The Nav links from config.js -->
          <nav class="link-list">
            <nav-link
              v-for="(item, index) in $themeConfig.nav"
              :key="index"
              :value="item"
              class="list-item"
            />
          </nav>
        </div>
        <search-box v-if="$themeConfig.search" />
      </div>
    </div>
    <slot />
  </header>
</template>

<script>
import SearchBox from '@SearchBox'
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Header',
  components: {
    SearchBox,
    NavLink
  }
}
</script>

<style lang="stylus" scoped>
.header
  position relative
  .header-navbar
    position fixed
    top 0
    left 0
    right 0
    z-index 100
    background $maskColor
    backdrop-filter blur(5px)
    transition all .5s ease-in-out
    // height 70px
    height $headerHeight
    @media (prefers-color-scheme: dark)
      background $maskDarkColor
    .header-nav
      height $headerHeight
      .nav-link
        .link-logo
          height $headerHeight * 0.5
          .logo-img
            padding 10% 3% 0
            height 40%
            // width 20%
        .link-list
          display inline-block
          .list-item
            display inline-block
            padding 0 .7rem
            font-size 1rem
            color $whiteColor
            line-height $headerHeight * 0.7
            &:after
              content ''
              display block
              margin-left 20%
              width 60%
              height .1rem
              background $accentColor
              transform scaleX(0)
              transition transform .5s ease-out
            &:hover:after
              transform scaleX(1)
              transition transform .5s ease-out
          .router-link-exact-active,
          .router-link-active
            color $accentColor
          .list-item:nth-child(1)
            &.router-link-active
              color $whiteColor
            &.router-link-exact-active
              color $accentColor
@media (max-width $phoneWidth)
  .nav-link
    white-space nowrap
    overflow-x scroll
    .link-logo
      display none
.cover-header
  height $coverHeight
@media print
  .header
    display none
</style>
