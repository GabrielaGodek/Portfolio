<script setup>
document.addEventListener('click', (event) => {
  const composed = event.composedPath()
  const nav = document.querySelector('header nav.navigation')
  const menu = document.querySelector('header .menu_icon')

  if (!composed.includes(nav) && !composed.includes(menu)) {
    document.querySelector('header nav').classList.remove('open')
  }
})

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
    openMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      this.isOpen = false
    },
    scrollUp() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <nav class="navigation" @click="openMenu" :class="{ open: isOpen }">
    <ul>
      <li title="home"><router-link :to="{ name: 'home' }" @click="openMenu">Home</router-link></li>
      <li title="experience">
        <router-link :to="{ name: 'experience' }" @click="openMenu">Experience</router-link>
      </li>
      <li title="projects">
        <router-link :to="{ name: 'projects' }" @click="openMenu">Projects</router-link>
      </li>
    </ul>
  </nav>
  <div class="header_wrapper">
    <div class="logo" @click="scrollUp">
      <img width="62" height="30" src="@/assets/logo.svg" alt="Gabriela Godek's Portfolio" />
    </div>
    <div class="menu_icon" @click="openMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
