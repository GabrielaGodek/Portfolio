<script lang="ts">
import { defineComponent } from 'vue'
import ProjectsTemp from "@/components/ProjectsTemp.vue";
export default defineComponent({
  name: 'ProjectPage',
  components: {
    ProjectsTemp
  },

})
</script>

<template>
  <section class="projects_wrapper">
    <projects-temp></projects-temp>
  </section>
</template>
