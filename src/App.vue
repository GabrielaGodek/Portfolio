<script>
import navigationHeader from '@/components/NavigationHeader.vue'
import footerItem from '@/components/FooterItem.vue'
export default {
  name: 'app',
  components: {
    navigationHeader,
    footerItem
  }
}
</script>

<template>
    <navigation-header />
  <div class="relative_header"></div>

  <main class="main_wrapper">
    <router-view></router-view>
  </main>

  <footer>
    <footer-item />
  </footer>
</template>
