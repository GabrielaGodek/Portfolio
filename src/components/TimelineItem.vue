<script>
export default {
  name: 'timeLine',
  props: {
    currentDate: String,
    firstHeader: String,
    firstDesc: String,
    firAddText: String,

    secondDesc: String,
    secondHeader: String,
    secondDate: String,
    firstCompany: String,
    secondCompany: String,
    secAddText: String
  }
}
</script>

<template>
  <div class="timeline">
    <span class="line"></span>
    <p class="date">{{ currentDate }}</p>
    <span class="event"></span>
    <div class="details">
      <p class="title">{{ firstHeader }}</p>
      <p class="additional" v-show="firAddText">{{ firAddText }}</p>
      <p class="company">{{ firstCompany }}</p>
    </div>

    <p class="date">{{ secondDate }}</p>
    <span class="event"></span>
    <div class="details">
      <p class="title">{{ secondHeader }}</p>
      <p class="additional" v-show="secAddText">{{ secAddText }}</p>
      <p class="company">{{ secondCompany }}</p>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  width: 80vw;
  max-width: 360px;
  margin: 0 auto;
}
.line {
  left: 110px;
  transform: translate(-50%, 0);
  position: absolute;
  height: 100%;
  width: 15px;
  background-color: #323232;
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
    border-color: transparent transparent #323232 transparent;
  }

.event {
  left: 110px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #ddd0c8;
  border: 6px solid #323232;
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
  font-size: 16px;
}
  .date:nth-of-type(1) {
    top: 40px;
    left: 20px;
  }
  .date:nth-of-type(2) {
    bottom: 40px;
    left: 20px;
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
  }
  .details:nth-of-type(1) {
    top: 40px;
    left: 140px;
  }
  .details:nth-of-type(2) {
    bottom: 40px;
    left: 140px;
  }

</style>
