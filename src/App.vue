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
  <header>
    <navigation-header />
  </header>
  <div class="relative_header"></div>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <footer-item />
  </footer>
</template>
