<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import WelcomePage from './components/WelcomePage.vue'
import Navigation from './components/NavigationHeader.vue'
import Footer from './components/FooterItem.vue'
// import markActiveLink from './js/script.js'
</script>

<template>
  <header>
    <Navigation/>
  </header>
  <div class="relative_header"></div>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <Footer/>
  </footer>
</template>


