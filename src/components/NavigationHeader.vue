<script>
// import { ref } from "vue";
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { onClickOutside } from '@vueuse/core'

export default {
  name: "headerItem",
  setup() {
    const isOpen = ref(false);
    const currentPos = ref(0);
    const scrollingUp = ref(false)
    const target = ref(null)

    const toggleMenu = () => {
      if (window.innerWidth < 1000) {
        isOpen.value = true;
      }
    };

    const scrollUp = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if ((scrollPos < currentPos.value)) {
        scrollingUp.value = true
      } else {
        scrollingUp.value = false
      }
      currentPos.value = scrollPos;
    };

    onClickOutside(target, (event) => {
      console.log(event.target.outerHTML.includes('span'))

      if(event.target.outerHTML.includes('span')){
        isOpen.value = !isOpen.value
      } else {
        isOpen.value = false
      }
    })

    onMounted(() => {
      currentPos.value = window.scrollY
      document.addEventListener('scroll', handleScroll);
    }),
  
    onBeforeUnmount(() => {
      document.removeEventListener('scroll', handleScroll);
    })

    return {
      isOpen,
      toggleMenu,
      scrollUp,
      scrollingUp,
      target
    };
  },
};
</script>

<template>
  <header :class="{ scroll: scrollingUp }">
  <nav class="navigation" :class="{ open: isOpen }" ref="target">
    <ul>
      <li title="home">
        <router-link :to="{ name: 'home' }" @click="toggleMenu"
          >Home</router-link
        >
      </li>
      <li title="experience">
        <router-link :to="{ name: 'experience' }" @click="toggleMenu"
          >Experience</router-link
        >
      </li>
      <li title="projects">
        <router-link :to="{ name: 'projects' }" @click="toggleMenu"
          >Projects</router-link
        >
      </li>
    </ul>
  </nav>
  <div class="header_wrapper">
    <div class="logo" @click="scrollUp">
      <font-awesome-icon
        icon="fa-solid fa-laptop-code"
        size="lg"
        style="color: #343837"
      />&nbsp;|&nbsp;GG
    </div>
    <div class="menu_icon" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</header>
</template>
