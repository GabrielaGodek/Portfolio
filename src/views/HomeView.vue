<script lang="ts">
import { defineComponent } from 'vue'
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

})
</script>
<template>
  <section class="hero-view">
    <div class="stars">
      <div class="star star--falling"></div>
      <div class="star star--small"></div>
      <div class="star star--medium"></div>
      <div class="star star--large"></div>
    </div>

    <div class="greeting">
      <h1 class="greeting__header">Hi, I’m Gabriela</h1>
      <h2 class="greeting__header-text">
        I’m a<span class="greeting__header-marker">&nbsp;web developer&nbsp;</span>dedicated to delivering innovative
        solutions
      </h2>
      <ContactIcons :color="'#ced7e0'" />
      <div class="greeting__buttons">
        <router-link to="about">About Me</router-link>
        <router-link to="experience">Experience</router-link>
      </div>
    </div>
  </section>

  <section class="projects_wrapper ">

    <projects-temp></projects-temp>
  </section>
</template>

<style scoped>
.contact_icon {
  display: flex;
  justify-content: space-evenly;
}
</style>
