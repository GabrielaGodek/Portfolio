<script>
import ContactIcons from "@/components/ContactIcons.vue";
export default {
  name: 'footerItem',
  components: {
    ContactIcons
  }
}
</script>
<template>
  <div class="wrapper">
    <ContactIcons :color="'#ced7e0'" />
    <div class="signature__name">Gabriela <br class="signature__name--hide" />Godek</div>
  </div>
</template>



