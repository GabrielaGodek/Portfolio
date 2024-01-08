<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { onClickOutside } from "@vueuse/core";

export default {
  name: "headerItem",
  setup() {
    const isOpen = ref(false);
    const currentPos = ref(0);
    const scrollingUp = ref(false);
    const target = ref(null);

    const headerColors = {
      "/": "#030035",
    };
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
    };
    onClickOutside(target, (event) => {
      if (event.target.outerHTML.includes("span")) {
        isOpen.value = !isOpen.value;
      } else {
        isOpen.value = false;
      }
    });

    onMounted(() => {
      currentPos.value = window.scrollY;
      document.addEventListener("scroll", handleScroll);
    }),
      onBeforeUnmount(() => {
        document.removeEventListener("scroll", handleScroll);
      });

    return {
      isOpen,
      scrollUp,
      scrollingUp,
      target,
      headerColors,
      closeMenu
    };
  },
};
</script>

<template>
  <header
    :class="{ 'header--scroll': scrollingUp }"
    :style="{ backgroundColor: headerColors[$route.path] }"
  >
    <nav class="navigation" :class="{ open: isOpen }" ref="target">
      <ul>
        <li class="navigation__item" title="home">
          <router-link :to="{ name: 'home' }" @click="closeMenu"
            >Home</router-link
          >
        </li>
        <li class="navigation__item" title="experience">
          <router-link :to="{ name: 'experience' } " @click="closeMenu">Experience</router-link>
        </li>
        <li class="navigation__item" title="projects">
          <router-link :to="{ name: 'projects' }" @click="closeMenu">Projects</router-link>
        </li>
        <li class="navigation__item" title="about">
          <router-link :to="{ name: 'about' }" @click="closeMenu">About</router-link>
        </li>
      </ul>
    </nav>
    <div class="header-wrapper">
      <div class="header__logo" @click="scrollUp">
        <font-awesome-icon
          icon="fa-solid fa-laptop-code"
          size="lg"
          style="color: #ced7e0"
        />
        &nbsp;|&nbsp;GG
      </div>
      <div class="header__menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header--home {
  background-color: #062c43;
}
</style>
