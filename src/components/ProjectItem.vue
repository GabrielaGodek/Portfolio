<script>
export default {
  name: 'projectItem',
  props: {
    projectDetails: Object
  }
}
</script>

<template>
  <a class="img_wrapper links" :href="projectDetails.links">
    <img :src="projectDetails.src" :alt="projectDetails.title" />
  </a>
  <div class="description">
    <h2>{{ projectDetails.title }}</h2>
    <h3 class="tech">{{ projectDetails.tech }}</h3>
    <a :href="projectDetails.links" class="links"
      >Click for Code
      <font-awesome-icon icon="fa-solid fa-up-right-from-square" size="ss" style="color: #323232"
    /></a>
  </div>
</template>
