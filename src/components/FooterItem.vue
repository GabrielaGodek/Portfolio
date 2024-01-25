<script lang="ts">
import { defineComponent } from 'vue'
import ContactIcons from "@/components/ContactIcons.vue";
export default defineComponent({
  name: 'footerItem',
  components: {
    ContactIcons
  }
})
</script>
<template>
  <section class="contact">
    <h3 class="contact__header">Let's <br> work <br>together</h3>
    <p class="contact__text">I'm currently available for new work. <br> Let's talk about the next big thing!</p>
    <div class="contact__icons">
      <ContactIcons :color="'#F4E7D4'" />
    </div>
  </section>
</template>



