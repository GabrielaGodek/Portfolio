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
          subHeader: "University of Economics at Cracow",
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
    <h1>Education</h1>
    <div class="timeline-wrapper">
      <TimelineItem :items="timelineItems" />
    </div>

</template>
