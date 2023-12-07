<script>
import { ref, onBeforeMount } from 'vue'
import ContactIcons from '@/components/ContactIcons.vue'
import ProjectsItem from '@/components/ProjectItem.vue'
export default {
  name: 'HomeView',
  components: {
    ContactIcons,
    ProjectsItem,
  },
  setup() {
    
    const dataAPI = ref([]);
    const errorMessage = ref('');

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
        errorMessage.value = 'Failed to fetch data';
      }
    };

    onBeforeMount(getData);

    return {
      dataAPI,
      errorMessage,
      location
    };
  },
};
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
        I’m a<span class="greeting__header-marker">&nbsp;web developer&nbsp;</span>dedicated
        to delivering innovative solutions
      </h2>
      <ContactIcons :color="'#ced7e0'"/>

      <div class="greeting__buttons">
        <router-link to="about">About Me</router-link>
        <router-link to="experience">Experience</router-link>
      </div>
    </div>
  </section>
  <section class="project_wrapper">
    <h1>Projects</h1>
      <ProjectsItem v-for="item in dataAPI" :key="item.id" :projectDetails="item" />
    
  </section>
</template>

<style scoped>
.contact_icon {
 display: flex;
 justify-content: space-evenly;
}
</style>
