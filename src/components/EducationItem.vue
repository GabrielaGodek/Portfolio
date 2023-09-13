<script >
import { ref } from "vue";
import Timeline from '@/components/TimelineItem.vue' 
  export default {
    components: {
      Timeline,
    },
    data() {
      return {
        firstDate: ref('Ongoing'),
        firstHeader: ref('Master Degree'),
        firstCompany: ref('Cracow University of Economics'),
        secondCompany: ref('University of Technology at Cracow'),
        secondHeader: ref('Bachelor Degree'),
        secondDate: ref('02.2022'),
        firAddText: ref('Applied Informatics'),
        secAddText: ref('Physics'),
      };
    },
  };
</script>

<template>
  <section class="education_wrapper">
    <h1>Education</h1>
    <div class="timeline_wrapper">
      <Timeline :firstHeader="firstHeader" :firAddText="firAddText" :firstDesc="firstDesc" :firstCompany="firstCompany" :currentDate="firstDate"
        :secondHeader="secondHeader" :secAddText="secAddText" :secondCompany="secondCompany" :secondDate="secondDate"/>
    </div>
    <div class="text">
      <p>During my engineering studies, I conducted many simulations of physical phenomena using the Python language. </p>
      <p>Throughout master's studies, I mainly use JavaScript and Python. For individual projects also R and Vue.js</p>
    </div>
  </section>
  
</template>