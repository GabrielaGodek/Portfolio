<script>
import { ref, onBeforeMount } from 'vue';
import ProjectsItem from '@/components/ProjectItem.vue';

export default {
  name: 'ProjectPage',
  components: {
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
    };
  },
};
</script>

<template>
  <section class="project_wrapper">
    <h1>Projects</h1>
      <ProjectsItem v-for="item in dataAPI" :key="item.id" :projectDetails="item" />
    
  </section>
</template>
