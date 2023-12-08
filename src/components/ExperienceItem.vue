<script>
import { ref } from "vue";
import TimelineItem from "@/components/TimelineItem.vue";

export default {
  name: "ExperienceItem",
  components: {
    TimelineItem,
  },
  data() {
    return {
      timelineItems: ref([
        {
          date: "11.2022",
          header: "Junior Web Developer",
          company: "Marketing Investment Group",
          subHeader: "",
          isSubHeader: false,
        },
        {
          date: "03.2022",
          header: "Assistant Web Developer",
          company: "Marketing Investment Group",
          subHeader: "",
          isSubHeader: false,
        },
      ]),
    };
  },
};
</script>

<template>
    <h1>Experience</h1>
    <div class="timeline-wrapper">
      <TimelineItem :items="timelineItems" />
    </div>
</template>
