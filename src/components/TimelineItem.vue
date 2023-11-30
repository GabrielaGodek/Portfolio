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
    <span class="line"></span>
    <template v-for="(item, index) in items" :key="index">
      <p class="date">{{ item.date }}</p>
      <span class="event"></span>
      <div class="details">
        <h2 class="title">{{ item.header }}</h2>
        <h3 class="additional" v-show="item.isSubHeader">{{ item.subHeader }}</h3>
        <h4 class="company">{{ item.company }}</h4>
      </div>
    </template>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  /* width: 80vw; */
  max-width: 360px;
  /* margin: 0 auto; */
}
.line {
  left: 80px;
  transform: translate(-50%, 0);
  position: absolute;
  height: 100%;
  width: 10px;
  background-color: #343837;
}
  .line:after {
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
    border-color: transparent transparent #343837 transparent;
  }

.event {
  left: 80px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #AAAAAA;
  border: 6px solid #343837;
  border-radius: 50%;
}
  .event:after {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .event:before {
    position: absolute;
    right: 30px;
  }
  .event:nth-of-type(3) {
    bottom: 50px;
  }
  .event:nth-of-type(2) {
    top: 50px;
  }

.date {
  position: absolute;
  font-size: 14px;
}
  .date:nth-of-type(1) {
    top: 52px;
  }
  .date:nth-of-type(2) {
    bottom: 54px;
  }

.details {
  position: absolute;
  text-align: left;
}
  p {
    font-size: 16px;
    text-align: left;
    padding: 0;
  }
  .company {
    font-size: 13px;
  }
  .additional {
    font-style: italic;
    font-size: 14px;
  }
  .title {
    font-size: 16px;
  }
  .details:nth-of-type(1) {
    top: 38px;
    left: 110px;
  }
  .details:nth-of-type(2) {
    bottom: 44px;
    left: 110px;
  }

</style>
