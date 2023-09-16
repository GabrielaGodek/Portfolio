<script>
import { reactive } from 'vue'
import ProjectsItem from '@/components/ProjectItem.vue'
export default {
  name: 'projectPage',
  components: {
    ProjectsItem
  },
  mounted() {
    this.getData()
  },
  data() {
    return {
      dataAPI: reactive([]),
      errorMessage: ''
    }
  },
  methods: {
    async getData() {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/GabrielaGodek/Portfolio-API/projects`
        )
        let data = await response.json()

        if (response.ok) {
          this.dataAPI = data
        } else {
          const error = response.status
          throw error
        }
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
<template>
  <section class="project_wrapper">
    <h1>Projects</h1>
    <div class="project" v-for="item in dataAPI" :key="item.id">
      <projects-item :projectDetails="item" />
    </div>
  </section>
</template>
