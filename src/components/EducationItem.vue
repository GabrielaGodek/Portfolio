<script lang="ts">
import { ref, defineComponent } from "vue";
import TimelineItem from "@/components/TimelineItem.vue";
import { TimeLineItem } from '@/includes/interfaces'

export default defineComponent({
  name: "EducationItem",
  components: {
    TimelineItem,
  },
  setup() {
    const timelineItem = ref<TimeLineItem[]>([
      {
        date: "10.22 - now",
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
  <h3 class="education__header">Education</h3>
  <div class="timeline-wrapper">
    <TimelineItem :items="timelineItem" />
  </div>
</template>
