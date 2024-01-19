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
  <div class="contact-icon">
    <a href="https://www.linkedin.com/in/gabrielagodek/" aria-label="LinkedIn profile" rel="noopener" class="contact-icon__link">
      <font-awesome-icon icon="fa-brands fa-linkedin" size="lg" width="23" height="23" loading="lazy"
        :style="{ color: color }" />
      <span class="contact-icon__label">LinkedIn</span>
    </a>
    <a href="https://github.com/GabrielaGodek" aria-label="GitHub profile" rel="noopener" class="contact-icon__link">
      <font-awesome-icon icon="fa-brands fa-github" size="lg" width="23" height="23" loading="lazy"
        :style="{ color: color }" />
      <span class="contact-icon__label">GitHub</span>
    </a>
    <a href="mailto:godekgabriela39@gmail.com" aria-label="Send an email">
      <font-awesome-icon icon="fa-solid fa-envelope-open-text" size="lg" width="23" height="23" loading="lazy" class="contact-icon__link"
        :style="{ color: color }" />
      <span class="contact-icon__label">Email</span>
    </a>
    <a href="GabrielaGodek_ENG.pdf" download="" aria-label="Download resume" class="contact-icon__link">
      <font-awesome-icon icon="fa-regular fa-file" size="lg" width="23" height="23" loading="lazy"
        :style="{ color: color }" />
      <span class="contact-icon__label">Resume</span>
    </a>
  </div>
</template>

<style scoped>
.contact-icon {
  z-index: 99;
}

.contact-icon__label{
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
