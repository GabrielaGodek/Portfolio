<script>
export default {
  props: {
    projectDetails: Object
    }
};
</script>

<template>
    <div class="img_wrapper">
        <img :src="projectDetails.src" :alt="projectDetails.title">
    </div>
    <div class="description">
        <h2>{{ projectDetails.title }}</h2>
        <h3 class="tech">{{ projectDetails.tech }}</h3>
        <a :href="projectDetails.links" class="links">Click for Code <img src="../assets/open-in-new.svg" alt="Open Github in new tab"></a>
    </div>
</template>