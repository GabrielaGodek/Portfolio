<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
import ContactIcons from "@/components/ContactIcons.vue";
import ProjectsTemp from "@/components/ProjectsTemp.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ScrollParallax,
    ContactIcons,
    ProjectsTemp,
  },
  setup() {
    const rotatedText = ref('');
    const textToRotate = ref('Gabriela Godek - Web Developer -');
    onMounted(() => {
      // const textElement = document.querySelector('.hero__greeting__image-text');
      if (textToRotate.value) {

        rotatedText.value = textToRotate.value
          .split('')
          .map((char, i) => `<span style="transform:rotate(${i * 11}deg)">${char}</span>`)
          .join('');
      }
    });
    return {
      rotatedText
    }
  }

})
</script>
<template>
  <section class="hero">
    <div class="hero__greeting">
      <h1 class="hero__greeting__header">Crafting effective features, consistent investigation into innovative technologies.</h1>
        <h2 class="hero__greeting__header-text">
          I am enthusiastic about web development, just diving into the world of blockchain, and fueled by coffee ☕️. I am
          coding my own path.
          Let's connect and delve into the fascinating realm of technology!
        </h2>
        <div class="hero__greeting__image">
          <div class="hero__greeting__image-logo"></div>
          <div class="hero__greeting__image-text">
            <span v-html="rotatedText"></span>
          </div>

        </div>
    </div>
  </section>

  <section class="projects">
    <projects-temp></projects-temp>
  </section>
</template>

<style scoped>
.contact-icon {
  display: flex;
  justify-content: space-evenly;
}
</style>

