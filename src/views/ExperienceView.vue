<script land="ts">
import { defineComponent } from "vue";
import Experience from "@/components/ExperienceItem.vue";
import Education from "@/components/EducationItem.vue";


export default defineComponent({
  name: "ExperienceView",
  components: {
    Education,
    Experience,
  },
})
</script>
<template>
  <section class="experience">
    <Experience />
    <div class="experience__text">
      <p class="experience__text-paragraph">
        As a <strong>Web Developer</strong>, I was actively involved in creating, implementing, and maintaining
        features using <strong>PHP</strong>, <strong>JinJava</strong>, and <strong>JavaScript</strong>, along with
        open-source libraries such as <strong>jQuery</strong>.
      </p>
      <h4 class="experience__text-header">Additionally, I:</h4>
      <ul class="experience__text-list">
        <li>Executed coding based on projects from <strong>Figma</strong>, <strong>Adobe XD</strong>, or <strong>Adobe Photoshop</strong>.</li>
        <li>Played a pivotal role in the successful launch of a new e-commerce platform</li>
        <li><strong>Mentored and provided support</strong> to new team members</li>
        <li>Conducted onboarding <strong>training sessions</strong></li>
      </ul>
      <h4 class="experience__text-header">Currently, I am:</h4>
      <ul class="experience__text-list">
        <li>Actively pursuing knowledge in <strong>TypeScript</strong> and <strong>Node.js, specifically Express</strong></li>
        <li>Improving skills in unit testing with <strong>Jest</strong> and <strong>Vitest</strong></li>
        <li><strong>Focusing on fullstack development</strong> with an emphasis on the frontend</li>
        <li>Expanding expertise in <strong>MongoDB with Mongoose</strong> and <strong>MySQL</strong></li>
      </ul>

    </div>
  </section>
  <section class="education">
    <Education />
    <div class="education__text">
      <p class="education__text-paragraph">
        During my engineering studies, I conducted many simulations of physical
        phenomena using the <strong>Python</strong> language. Throughout
        master's studies, I mainly use <strong>JavaScript</strong> and
        <strong>Python</strong>. For individual projects also
        <strong>R</strong>, <strong>Vue.js</strong> or <strong>React.js</strong>
      </p>
    </div>
  </section>
</template>

