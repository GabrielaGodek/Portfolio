<script lang="ts">
import { defineComponent, PropType, defineProps } from 'vue';
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import { ProjectData } from '@/includes/interfaces';

export default defineComponent({
  name: 'ProjectItem',
  components: {
    ScrollParallax,
  },
  props: {
    projectDetails: {
      type: Object as PropType<ProjectData>,
      required: true,
    },
  },
  setup(props) {
    return {};
  }
});
</script>

<template>
  <div class="project">
    <a class="project__img-wrapper links" :href="projectDetails.links">
      <img :src="'/projects_images/' + projectDetails.image" :alt="projectDetails.title" />
    </a>
    <div class="project__description">
      <h3 class="project__header">{{ projectDetails.title }}</h3>
      <h4 class="project__tech">{{ projectDetails.tech }}</h4>
      <a :href="projectDetails.links" class="project__links links">
        Click for code
      </a>
    </div>
  </div>
</template>

