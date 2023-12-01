<script>
export default {
  name: "projectItem",
  props: {
    projectDetails: Object,
  },
};
</script>

<template>
  <div class="project">
    <a class="img_wrapper links" :href="projectDetails.links">
      <img :src="'/projects_images/' + projectDetails.image" :alt="projectDetails.title" />
    </a>
    <div class="description">
      <h2>{{ projectDetails.title }}</h2>
      <h3 class="tech">{{ projectDetails.tech }}</h3>
      <a :href="projectDetails.links" class="links">Click for code </a>
    </div>
  </div>
</template>
