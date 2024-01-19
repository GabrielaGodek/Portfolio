<script lang="ts">
import { ref, defineComponent } from "vue";
import TimelineItem from "@/components/TimelineItem.vue";
import { TimeLineItem } from '@/includes/interfaces'

// interface TimeLineItem {
//   date: string;
//   header: string;
//   company: string;
//   subHeader: string;
//   isSubHeader: boolean;
// }
export default defineComponent({
  name: "EducationItem",
  components: {
    TimelineItem,
  },
  setup() {
    const timelineItem = ref<TimeLineItem[]>([
      {
        date: "10.22 - ongoing",
        header: "Master's Degree",
        company: "Applied Informatics",
        subHeader: "University of Economics at Cracow",
        isSubHeader: true,
      },
      {
        date: "2018 - 02.22",
        header: "Bachelor's Degree",
        company: "Physics",
        subHeader: "University of Technology at Cracow",
        isSubHeader: true,
      }
    ])
    return {
      timelineItem
    }
  }
})
</script>

<template>
  <h1>Education</h1>
  <div class="timeline-wrapper">
    <TimelineItem :items="timelineItem" />
  </div>
</template>
