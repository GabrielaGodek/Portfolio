<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TimeLine',
  props: {
    items: {
      type: Array as PropType<Array<any>>,
      required: true,
    },
  },
});
</script>


<template>
  <div class="timeline">
    <span class="timeline__line"></span>
    <template v-for="(item) in items" :key="item.header">
      <p class="timeline__date">{{ item.date }}</p>
      <span class="timeline__event"></span>
      <div class="timeline__details">
        <h2 class="timeline__title">{{ item.header }}</h2>
        <h3 class="timeline__additional" v-show="item.isSubHeader">{{ item.subHeader }}</h3>
        <h4 class="timeline__company">{{ item.company }}</h4>
      </div>
    </template>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  width: 80vw;
  max-width: 360px;
  margin: 0 auto;
}
.timeline__line {
  left: 120px;
  transform: translate(-50%, 0);
  position: absolute;
  height: 100%;
  width: 5px;
  background-color: #F4E7D4;
}
  .timeline__line:after {
    content: '';
    display: block;
    position: absolute;
    top: -20px;
    transform: translate(-50%, 0);
    left: 50%;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 8.5px 20px 8.5px;
    border-color: transparent transparent #F4E7D4 transparent;
  }

.timeline__event {
  left: 120px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #F4E7D4;
  border-radius: 50%;
}
  .timeline__event:after {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .timeline__event:before {
    position: absolute;
    right: 30px;
  }
  .timeline__event:nth-of-type(3) {
    bottom: 50px;
  }
  .timeline__event:nth-of-type(2) {
    top: 50px;
  }

.timeline__date {
  position: absolute;
  font-size: 14px;
}
  .timeline__date:nth-of-type(1) {
    top: 52px;
  }
  .timeline__date:nth-of-type(2) {
    bottom: 54px;
  }

.timeline__details {
  position: absolute;
  text-align: left;
}
  p {
    font-size: 16px;
    text-align: left;
    padding: 0;
  }
  .timeline__company {
    font-size: 12px;
    font-style: italic;
  }
  .timeline__additional {
    font-size: 10px;
  }
  .timeline__title {
    font-size: 14px;
    font-weight: 600;
  }
  .timeline__details:nth-of-type(1) {
    top: 28px;
    left: 160px;
  }
  .timeline__details:nth-of-type(2) {
    bottom: 28px;
    left: 160px;
  }

</style>
