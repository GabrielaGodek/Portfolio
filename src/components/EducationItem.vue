<script>
import { ref } from "vue";
import TimelineItem from "@/components/TimelineItem.vue";

export default {
  name: "EducationItem",
  components: {
    TimelineItem,
  },
  data() {
    return {
      timelineItems: ref([
        {
          date: "Ongoing",
          header: "Master's Degree",
          company: "Applied Informatics",
          subHeader: "University of Technology at Cracow",
          isSubHeader: true,
        },
        {
          date: "02.2022",
          header: "Bachelor's Degree",
          company: "Physics",
          subHeader: "University of Technology at Cracow",
          isSubHeader: true,
        },
      ]),
    };
  },
};
</script>

<template>
  <section class="wrapper">
    <h1>Education</h1>
    <div class="timeline_wrapper">
      <TimelineItem :items="timelineItems" />
    </div>
    <div class="text">
      <p>
        During my engineering studies, I conducted many simulations of physical phenomena using the <strong>Python</strong> language. Throughout master's studies, I mainly use <strong>JavaScript</strong> and <strong>Python</strong>. For individual projects also <strong>R</strong>, <strong>Vue.js</strong> or <strong>React.js</strong>
      </p>
    </div>
  </section>
</template>
