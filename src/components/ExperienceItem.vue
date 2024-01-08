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
          date: "11.22 - 10.23",
          header: "Junior Web Developer",
          company: "Marketing Investment Group",
          subHeader: "",
          isSubHeader: false,
        },
        {
          date: "03.22 - 11.22",
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
