<script>
import { reactive } from 'vue'
import ProjectsItem from "@/components/ProjectItem.vue";
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
            errorMessage: '',
        }
    },
    methods: {
        getData() {
            fetch('https://my-json-server.typicode.com/GabrielaGodek/Portfolio-API/projects')
                .then(res => res.json())
                .then(res => this.dataAPI = res)
                .catch(error => {
                    this.errorMessage = error;
                    console.error("There was an error!", error);
                });

        }
    },
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
