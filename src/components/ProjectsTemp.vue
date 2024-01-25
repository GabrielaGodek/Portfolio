<script lang="ts">
import { ref, onBeforeMount, defineComponent } from "vue";
import { useRouter } from 'vue-router'
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
        const isProjectPage = ref(false)
        const router = useRouter()
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

        onBeforeMount(() => {
            if (router.currentRoute.value.path === '/projects') {
                isProjectPage.value = true
            }
            getData()
        });
        return {
            dataAPI,
            errorMessage,
            isProjectPage
        };
    },
})
</script>
<template>
    <h1 class="projects__header">Skills Development</h1>
    <h2 class="projects__subheader" v-if="isProjectPage">Personal and academic projects</h2>
    <div class="projects__list">
        <ProjectItem v-for="item in dataAPI" :key="item.id" :projectDetails="item" />
    </div>
</template>
