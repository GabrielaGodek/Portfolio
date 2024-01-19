<script lang="ts">
import { ref, onBeforeMount, defineComponent } from "vue";
import ProjectItem from "@/components/ProjectItem.vue";
import { ProjectData } from '@/includes/interfaces'

export default defineComponent({
    name: "ProjectsTemp",
    components: {
        ProjectItem
    },
    setup() {
        const dataAPI = ref<ProjectData[]>([]);
        const errorMessage = ref("");

        const getData = async () => {
            try {
                const response = await fetch(`/db/db.json`);
                const data = await response.json();

                if (response.ok) {
                    dataAPI.value = data;
                } else {
                    const error = response.status;
                    throw error;
                }
            } catch (error) {
                console.error(error);
                errorMessage.value = "Failed to fetch data";
            }
        };

        onBeforeMount(getData);
        return {
            dataAPI,
            errorMessage
        };
    },
})
</script>
<template>
    <h1>Skills Development</h1>
    <h2>Personal and Academic Projects</h2>
    <div class="scroll_wrapper">
        <ProjectItem v-for="item in dataAPI" :key="item.id" :projectDetails="item" />
    </div>
</template>
