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
    <h3 :delay="800" class="contact__header">Let's <br> work <br>together</h3>
    <p :delay="1000" class="contact__text">I'm currently available for new work. <br>
      Let me know if you're looking for a ambitious developer.
      Let's talk about the next big thing!</p>
    <div class="contact__icons">
      <ContactIcons :color="'#F4E7D4'" />
    </div>
  </section>
</template>
<style lang="scss">
footer {
  padding-top: 200px;

  .contact {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 48px;

    .contact__header {
      font-style: normal;
      font-size: 56px;
      color: #f4e7d4;
      font-weight: 600;
      line-height: 0.92em;
    }

    .contact__text {
      font-size: 14px;
      text-align: center;
      color: #f4e7d4;
    }

    .contact__icons {
      border-top: 2px solid #f4e7d426;
      padding: 40px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

@media (min-width: 1000px) {
  footer {
    .contact {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      align-items: end;
      gap: 96px;

      .contact__header {
        font-size: 88px;
        line-height: 0.92em;
        flex-basis: calc(50% - 48px);
      }

      .contact__text {
        font-size: 20px;
        line-height: 1.6em;
        flex-basis: 450px;
        text-align: right;
        margin-right: 0;
      }

      .contact__icons {
        flex-basis: 100%;
      }
    }
  }
}
</style>



