<script>
export default {
  name: 'TimeLine',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="timeline">
    <span class="timeline__line"></span>
    <template v-for="(item, index) in items" :key="index">
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
  width: 10px;
  background-color: #062c43;
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
    border-width: 0 12.5px 25px 12.5px;
    border-color: transparent transparent #062c43 transparent;
  }

.timeline__event {
  left: 120px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #155e89;
  border: 6px solid #062c43;
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
    font-size: 13px;
  }
  .timeline__additional {
    font-style: italic;
    font-size: 14px;
  }
  .timeline__title {
    font-size: 16px;
  }
  .timeline__details:nth-of-type(1) {
    top: 38px;
    left: 160px;
  }
  .timeline__details:nth-of-type(2) {
    bottom: 44px;
    left: 160px;
  }

</style>
