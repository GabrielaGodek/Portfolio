<script>
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

export default {
  name: "projectItem",
  props: {
    projectDetails: Object,
    index: Number,
  },
  components: {
    ScrollParallax,
  },
};
</script>

<template>
  <!-- <scroll-parallax :right="index % 2 === 0 ? true : false" :left="index % 2 !== 0 ? true : false"  direction="x"> -->
    <div class="project">
      <a class="project__img-wrapper links" :href="projectDetails.links">
        <img
          :src="'/projects_images/' + projectDetails.image"
          :alt="projectDetails.title"
        />
      </a>
      <div class="project__description">
        <h2 class="project__header">{{ projectDetails.title }}</h2>
        <h3 class="project__tech">{{ projectDetails.tech }}</h3>
        <a :href="projectDetails.links" class="project__links links"
          >Click for code
        </a>
      </div>
    </div>
  <!-- </scroll-parallax> -->
</template>
