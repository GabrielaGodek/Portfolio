<script lang="ts">
import { ref, onMounted, onBeforeUnmount, defineComponent } from "vue";
import { useRoute } from "vue-router";
import { onClickOutside } from "@vueuse/core";
// import type { OnClickOutsideOptions } from '@vueuse/core'

export default defineComponent({
  name: "headerItem",
  setup() {
    const isOpen = ref(false);
    const currentPos = ref(0);
    const scrollingUp = ref(false);
    const target = ref<HTMLElement | null>(null);
    const route = useRoute();

    const scrollUp = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos < currentPos.value) {
        scrollingUp.value = true;
      } else {
        scrollingUp.value = false;
      }
      currentPos.value = scrollPos;
    };
    const closeMenu = () => {
      isOpen.value = false;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    };

    onClickOutside(target, (event) => {
      const clickedElement = event.target as HTMLElement;
      if (clickedElement.outerHTML.includes("span")) {
        isOpen.value = !isOpen.value;
      } else {
        isOpen.value = false;
      }
    });

    onMounted(() => {
      currentPos.value = window.scrollY;
      document.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("scroll", handleScroll);
    });

    return {
      isOpen,
      scrollUp,
      scrollingUp,
      target,
      // headerColors,
      closeMenu,
      route
    };
  },
})
</script>




<template>
  <header :class="{ 'header--scroll': scrollingUp }">
    <nav class="navigation" :class="{ open: isOpen }" ref="target">
      <ul>
        <li class="navigation__item" title="experience">
          <router-link class="navigation__item-link" :to="{ name: 'experience' }"
            @click="closeMenu">Experience</router-link>
          <router-link class="navigation__item-link" :to="{ name: 'experience' }"
            @click="closeMenu">Experience</router-link>
        </li>
        <li class="navigation__item" title="projects">
          <router-link class="navigation__item-link" :to="{ name: 'projects' }" @click="closeMenu">Projects</router-link>
          <router-link class="navigation__item-link" :to="{ name: 'projects' }" @click="closeMenu">Projects</router-link>
        </li>
      </ul>
    </nav>
    <div class="header-wrapper">
      <div class="header__logo navigation__item" @click="scrollUp">
        <router-link class="navigation__item-link" :to="{ name: 'home' }">Gabriela
          Godek</router-link>
        <router-link class="navigation__item-link" :to="{ name: 'home' }">Gabriela
          Godek</router-link>
      </div>
      <div class="header__menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>
