<script>
import { ref, onBeforeMount, onMounted } from "vue";
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

import ContactIcons from "@/components/ContactIcons.vue";
import ProjectsItem from "@/components/ProjectItem.vue";
export default {
  name: "HomeView",
  components: {
    ScrollParallax,
    ContactIcons,
    ProjectsItem,
  },
  setup() {
    const dataAPI = ref([]);
    const errorMessage = ref("");

    const getData = async () => {
      try {
        const response = await fetch(`/db/db.json`);
        const data = await response.json();

        if (response.ok) {
          dataAPI.value = data;
        } else {
          const error = response.status;
          throw error;
        }
      } catch (error) {
        console.error(error);
        errorMessage.value = "Failed to fetch data";
      }
    };

    onBeforeMount(getData);

    return {
      dataAPI,
      errorMessage,
      location,
    };
  },
};
</script>
<template>
  <scroll-parallax :down="true" direction="y" :speed="0.5">
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
          I’m a<span class="greeting__header-marker"
            >&nbsp;web developer&nbsp;</span
          >dedicated to delivering innovative solutions
        </h2>
        <ContactIcons :color="'#ced7e0'" />
        <div class="greeting__buttons">
          <router-link to="about">About Me</router-link>
          <router-link to="experience">Experience</router-link>
        </div>
      </div>
    </section>
  </scroll-parallax>
  <section class="project_wrapper ">
    <!-- <scroll-parallax direction="y"> -->
      <h1>Projects</h1>
      
      <!-- <scroll-parallax> -->
        <ProjectsItem
          v-for="(item, index) in dataAPI"
          :key="item.id"
          :index="index"
          :projectDetails="item"
        />
      <!-- </scroll-parallax> -->
    <!-- </scroll-parallax> -->
  </section>
</template>

<style scoped>
.contact_icon {
  display: flex;
  justify-content: space-evenly;
}
</style>
