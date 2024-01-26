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
  <section class="projects">
    <h1 class="projects__header">Skills Development
    </h1>
    <h2 class="projects__subheader">Personal and academic projects</h2>
    <projects-temp></projects-temp>
  </section>
</template>
