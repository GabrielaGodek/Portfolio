<script>
import { ref, onBeforeMount, onMounted } from "vue";
// import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

// import ContactIcons from "@/components/ContactIcons.vue";
import ProjectsItem from "@/components/ProjectItem.vue";

export default {
    name: "ProjectsTemp",
    components: {
        // ScrollParallax,
        // ContactIcons,
        ProjectsItem,
    },
    setup() {
        const dataAPI = ref([]);
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
};
</script>
<template>
    <h1>Skills Development</h1>
    <h2>Personal and Academic Projects</h2>
    <div class="scroll_wrapper">
        <ProjectsItem v-for="(item, index) in dataAPI" :key="item.id" :index="index" :projectDetails="item" />
    </div>
</template>