<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectData } from '@/includes/interfaces';

export default defineComponent({
  name: 'ProjectItem',
  props: {
    projectDetails: {
      type: Object as PropType<ProjectData>,
      required: true,
    },
  },
  setup() {
    return {};
  }
});
</script>

<template>
  <div v-motion-fade-visible class="project">
    <a class="project__img-links" :href="projectDetails.links">
      <img :src="'/projects_images/' + projectDetails.image" :alt="projectDetails.title" />
    </a>
    <div class="project__description">
      <h3 class="project__header">{{ projectDetails.title }}</h3>
      <h4 class="project__tech">{{ projectDetails.tech }}</h4>
      <a :href="projectDetails.links" class="project__links">
        Click for code
      </a>
    </div>
  </div>
</template>

