<script lang="ts">
import { ref, defineComponent } from "vue";
import TimelineItem from "@/components/TimelineItem.vue";
import { TimeLineItem } from '@/includes/interfaces'

export default defineComponent({
  name: "ExperienceItem",
  components: {
    TimelineItem,
  },
  setup(){
    const timelineItem = ref<TimeLineItem[]>([
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
      }
    ])
    return {
      timelineItem
    }
  }
})
</script>

<template>
    <h3 class="experience__header">Experience</h3>
    <div class="timeline-wrapper">
      <TimelineItem :items="timelineItem" />
    </div>
</template>
