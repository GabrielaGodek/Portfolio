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

<style lang="scss">
@keyframes top {
  0% {
    top: 0;
    transform: rotate(0);
  }
  50% {
    top: 8.5px;
    transform: rotate(0);
  }
  100% {
    top: 8.5px;
    transform: rotate(45deg);
  }
}

@keyframes top-2 {
  0%,
  50% {
    top: 8.5px;
    transform: rotate(45deg);
  }
  100% {
    top: 0;
    transform: rotate(0deg);
  }
}

@keyframes bottom {
  0% {
    bottom: 0;
    transform: rotate(0);
  }
  50% {
    bottom: 8.5px;
    transform: rotate(0);
  }
  100% {
    bottom: 8.5px;
    transform: rotate(135deg);
  }
}

@keyframes bottom-2 {
  0%,
  50% {
    bottom: 8.5px;
    transform: rotate(135deg);
  }
  100% {
    bottom: 0;
    transform: rotate(0);
  }
}

@keyframes scaled {
  100% {
    transform: scale(0);
  }
}

@keyframes scaled-2 {
  0%,
  50% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

header {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #0c0c0c;
  z-index: 998;

  .navigation__item {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    position: relative;
    text-align: center;
    .navigation__item-link {
      display: block;
      // margin: 0px 30px;
      height: 100%;
      position: relative;
      top: 0%;
      transition: 0.3s;
    }
    &:hover .navigation__item-link {
      top: -100%;
    }
  }
  .header-wrapper {
    z-index: 99;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 97px;
    padding: 25px 20px 24px 20px;
    .header__logo {
      justify-content: center;
      align-items: center;
      a {
        font-size: 20px;
        font-weight: 400;
        color: #f4e7d4;
        text-decoration: none;
        &.router-link-active {
          text-decoration: underline;
        }
      }
    }

    .header__menu-icon {
      position: relative;
      width: 32px;
      height: 18px;
      @media (min-width: 1000px) {
        display: none;
      }
      span {
        display: block;
        width: 100%;
        box-shadow: 0 2px 8.5px 0 rgba(0, 0, 0, 0.3);
        border-radius: 8.5px;
        height: 3px;
        background: #f4e7d4;
        transition: all 0.3s;
        position: relative;
        &:nth-child(1) {
          animation: ease 0.3s top-2 forwards;
        }
        &:nth-child(2) {
          animation: ease 0.3s scaled-2 forwards;
          margin: 5.5px 0 5.5px 0;
        }

        &:nth-child(3) {
          animation: ease 0.3s bottom-2 forwards;
        }
      }
    }
  }
  nav {
    position: inherit;
    top: 97px;
    right: 0;
    bottom: 0;
    background-color: #f4e7d4;
    color: #0c0c0c;
    height: 100%;
    max-width: 0;
    width: 100%;
    overflow: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    height: 100vh;

    &.open {
      max-width: 293px;
      z-index: 999;
      -webkit-box-shadow: -18px 14px 42px -11px rgba(11, 11, 11, 1);
      -moz-box-shadow: -18px 14px 42px -11px rgba(11, 11, 11, 1);
      box-shadow: -18px 14px 42px -11px rgba(11, 11, 11, 1);
      // height: 100vh;
      & + .header-wrapper {
        .header__menu-icon {
          span {
            &:nth-child(1) {
              animation: ease 0.7s top forwards;
              // transform: translate(0, 9px) rotate(45deg);
            }
            &:nth-child(2) {
              animation: ease 0.7s scaled forwards;
            }
            &:nth-child(3) {
              animation: ease 0.7s bottom forwards;
            }
          }
        }
      }
    }
    ul {
      padding: 140px 82px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 50px;
      list-style: none;
      width: 100%;
      li {
        // color: #000;
        font-family: "Montserrat", sans-serif;
        font-size: 26px;
        margin: auto 0;
        a {
          text-decoration: none;
          color: #0c0c0c;
          &.router-link-active {
            text-decoration: underline;
          }
          &:visited {
            color: #0c0c0c;
          }
        }
        @media (min-width: 1000px) {
          font-size: 18px;
        }
      }
    }
  }

  &.header--scroll {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  // desktop
  @media (min-width: 1000px) {
    .header-wrapper {
      padding: 25px 80px 24px 80px;
      .header__logo {
        font-size: 24px;
      }
    }
    nav {
      // position: relative;
      top: 0;
      max-width: 50%;
      max-height: 97px;
      background-color: transparent;
      padding: 25px 80px 24px 80px;
      ul {
        padding: 0;
        flex-direction: row;
        justify-content: flex-end;
        height: 100%;
        li {
          a {
            z-index: 999;
            color: #f4e7d4;
            &:visited {
              color: #f4e7d4;
            }
          }
        }
      }
    }
  }
}
.relative_header {
  height: 97px;
  padding: 0;
  margin: 0;
}
</style>