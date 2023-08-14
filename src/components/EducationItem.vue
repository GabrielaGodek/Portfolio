<script >
import Timeline from './TimelineItem.vue' 
  export default {
    components: {
      Timeline,
    },
    data() {
      return {
        firstDate: 'Ongoing',
        firstHeader: 'Master Degree',
        firstCompany: 'Cracow University of Economics',
        secondCompany: 'University of Technology at Cracow',
        secondHeader: 'Bachelor Degree',
        secondDate: '02.2022',
        firAddText: 'Applied Informatics',
        secAddText: 'Physics',
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