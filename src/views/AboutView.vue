<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AboutView'
})
</script>
<template>
  <section class="about">
    <h1>About me</h1>
    <div class="description">
      <p>
        My professional aspiration is to attain mastery in
        <strong>Web Development</strong>, dedicated to crafting aesthetically
        pleasing and user-friendly solutions that enhance the overall user
        experience and simplify daily life. Throughout my experience as a web
        developer and through independent learning, I have come to appreciate
        the significance of conscientious planning in implementing
        functionality. With a well-prepared project and a clear understanding of
        the objectives, project execution becomes seamless, and the resulting
        code remains clean.
      </p>
      <p>
        My commitment lies in delivering functionalities that are effective and
        aligned with the specified requirements, accompanied by well-organized
        and aesthetically pleasing code.
      </p>
    </div>
    <div class="tech">
      <div class="daily">
        <h3 class="tech__header">Professionally, I use</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>CSS3 + SASS</li>
          <li>Semantic HTML</li>
        </ul>
      </div>
      <div class="additional">
        <h4 class="tech__header">But I can also use</h4>
        <ul>
          <li>Python</li>
          <li>PHP</li>
          <li>WordPress</li>
        </ul>
      </div>
      <div class="additional">
        <h3 class="tech__header">Outside of work I use</h3>
        <ul>
          <li>Vue.js 3</li>
          <li>TypeScript</li>
          <li>Node.js + Express</li>
        </ul>
      </div>
      <div class="tools">
        <h3 class="tech__header">Tools</h3>
        <ul>
          <li>VS Code</li>
          <li>Jira</li>
          <li>Figma</li>
        </ul>
      </div>
      <div class="tools">
        <h3 class="tech__header">Currently learning</h3>
        <ul>
          <li>Vitest / Jest</li>
          <li>MongoDB + Mongoose</li>
          <li>Vite / Webpack</li>
        </ul>
      </div>
    </div>
  </section>
</template>

