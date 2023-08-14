<script >
import Timeline from './TimelineItem.vue' 
  export default {
    components: {
      Timeline,
    },
    data() {
      return {
        currentDate: 'Ongoing',
        firstHeader: 'Junior Web Developer',
        firstDesc: 'Marketing Investment Group',
        secondHeader: 'Assistant Web Developer',
        secondDate: '03.2022',
      };
    },
  };
</script>
<template>
    <section class="experience_wrapper">
      <h1>Experience</h1>
      <div class="timeline_wrapper">
        <Timeline :firstHeader="firstHeader" :firstCompany="firstDesc" :currentDate="currentDate"
        :secondHeader="secondHeader" :secondCompany="firstDesc" :secondDate="secondDate" />
      </div>
        <div class="text">
          <p>In my professional work, using JavaScript and Sass, I create responsive and accessible Landing Pages and advanced features for e-commerce stores,  thereby enhancing the overall User Experience.</p>
          <p>I also actively participate in the implementation of new stores. My responsibilities include ensuring the timely completion of all tasks assigned to the team and aligning the Product Owner's ideas with the technological limitations and possibilities of the existing store infrastructure.</p>
          <p>Recently, I had the opportunity to collaborate on a project involving WordPress, where I contributed to the creation of an online catalog and a blog for one of the top fashion brands.</p>
        </div>

    </section>
    
</template>