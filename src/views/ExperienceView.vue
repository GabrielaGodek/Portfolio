<script land="ts">
import { defineComponent } from "vue";
import Experience from "@/components/ExperienceItem.vue";
import Education from "@/components/EducationItem.vue";

import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

export default defineComponent({
  name: "ExperienceView",
  components: {
    ScrollParallax,
    Education,
    Experience,
  },
})
</script>
<template>
  <scroll-parallax :down="true" direction="y" :speed="0.5">
    <section class="wrapper">
      <Experience />
      <div class="text">
        <p>
          In my role as a <strong>Web Developer</strong>, my primary
          responsibilities revolved around creating, implementing, and maintaining
          features using <strong>PHP</strong>, <strong>JinJava</strong> and
          <strong>JavaScript</strong>, alongside open-source libraries such as
          <strong>jQuery</strong>. I also mastered coding campaign landing pages
          based on projects designed in <strong>Figma</strong>,
          <strong>Adobe XD</strong>, or <strong>Adobe Photoshop</strong>.
          <br />
          A noteworthy achievement includes my
          <strong>
            significant contribution to the successful implementation
          </strong>
          of a new e-commerce website. Throughout this long-term project, I took
          on a<strong> mentoring role, guiding and supporting</strong> new members
          of the team. I conducted <strong>onboarding trainings</strong> for the
          newest members of the team.
        </p>
        <p>
          At present, I am actively engaged in mastering
          <strong>TypeScript</strong> and <strong>Node.js</strong>, including
          <strong>Express</strong>, and refining my proficiency in
          <strong>unit testing</strong> with <strong>Jest</strong> and
          <strong>Vitest</strong>, with a strong dedication to
          <strong>frontend development</strong>. This pursuit is complemented by
          my exploration of <strong>MongoDB</strong> with
          <strong>Mongoose</strong>, further broadening my skill set.
          Additionally, I am delving into the realms of Mobile and Web Design.
        </p>
        <p>
          I believe that this comprehensive knowledge will not only facilitate
          improved communication among teams but also significantly contribute to
          the primary objective of enhancing overall team growth and performance.
        </p>
      </div>
    </section>
  </scroll-parallax>
  <section class="wrapper education">
    <Education />
    <div class="text">
      <p>
        During my engineering studies, I conducted many simulations of physical
        phenomena using the <strong>Python</strong> language. Throughout
        master's studies, I mainly use <strong>JavaScript</strong> and
        <strong>Python</strong>. For individual projects also
        <strong>R</strong>, <strong>Vue.js</strong> or <strong>React.js</strong>
      </p>
    </div>
  </section>
</template>
