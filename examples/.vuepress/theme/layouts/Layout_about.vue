<template>
  <section class="theme-container" :class="pageClasses">
    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />
    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
    </Sidebar>
    <SinglePageContent></SinglePageContent>
  </section>
</template>

<script>
import Sidebar from '@theme/components/Sidebar.vue'
import SinglePageContent from '@theme/components/SinglePageContent.vue'
import { resolveSidebarItems } from '../util'
export default {
  name: 'Layout_about',
  components: {
    Sidebar,
    SinglePageContent
  },
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          // 'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          // 'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },
  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },
  }
}
</script>