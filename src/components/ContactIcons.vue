<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ContactIcons",
  props: {
    color: {
      type: String,
      default: "#ced7e0",
    },
  },
})
</script>
<template>
    <a href="https://www.linkedin.com/in/gabrielagodek/" aria-label="LinkedIn profile" rel="noopener" class="contact__icons__link">
      <font-awesome-icon icon="fa-brands fa-linkedin" size="xl" width="75" height="75" loading="lazy"
        :style="{ color: color }" />
      <span class="contact__icons__label">LinkedIn</span>
    </a>
    <a href="https://github.com/GabrielaGodek" aria-label="GitHub profile" rel="noopener" class="contact__icons__link">
      <font-awesome-icon icon="fa-brands fa-github" size="xl" width="75" height="75" loading="lazy"
        :style="{ color: color }" />
      <span class="contact__icons__label">GitHub</span>
    </a>
    <a href="mailto:godekgabriela39@gmail.com" aria-label="Send an email">
      <font-awesome-icon icon="fa-solid fa-envelope-open-text" size="xl" width="75" height="75" loading="lazy" class="contact__icons__link"
        :style="{ color: color }" />
      <span class="contact__icons__label">Email</span>
    </a>
    <a href="GabrielaGodek_ENG.pdf" download="" aria-label="Download resume" class="contact__icons__link">
      <font-awesome-icon icon="fa-regular fa-file" size="xl" width="75" height="75" loading="lazy"
        :style="{ color: color }" />
      <span class="contact__icons__label">Resume</span>
    </a>
</template>

<style scoped>

.contact__icons__link {
  transition: transform .3s ease;
}
.contact__icons__link:hover {
  transform: translateY(-5px);
}

.contact__icons__label{
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
