<script setup>
// document.addEventListener('click', (event) => {
//   const composed = event.composedPath()
//   const nav = document.querySelector('header nav.navigation')
//   const menu = document.querySelector('header .menu_icon')

//   if (!composed.includes(nav) && !composed.includes(menu)) {
//     document.querySelector('header nav').classList.remove('open')
//   }
// })

let oldScrollPos = window.scrollY
document.addEventListener('scroll', () => {
  let scrollPos = window.scrollY
  if (scrollPos < oldScrollPos || document.querySelector('header nav.open')) {
    document.querySelector('header').style.position = 'fixed'
  } else {
    document.querySelector('header').style.position = 'absolute'
  }
  oldScrollPos = window.scrollY
})
</script>

<script>
import { ref } from 'vue'
export default {
  name: 'headerItem',
  data() {
    return {
      isOpen: ref(false)
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    scrollUp() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <nav class="navigation" :class="{ open: isOpen }">
    <ul>
      <li title="home">
        <router-link :to="{ name: 'home' }" @click="toggleMenu">Home</router-link>
      </li>
      <li title="experience">
        <router-link :to="{ name: 'experience' }" @click="toggleMenu">Experience</router-link>
      </li>
      <li title="projects">
        <router-link :to="{ name: 'projects' }" @click="toggleMenu">Projects</router-link>
      </li>
    </ul>
  </nav>
  <div class="header_wrapper">
    <div class="logo" @click="scrollUp">
      <img width="62" height="30" src="@/assets/logo.svg" alt="Gabriela Godek's Portfolio" />
    </div>
    <div class="menu_icon" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
