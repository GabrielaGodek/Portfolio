<template>
    <div class="main_wrapper">
        <section class="first_view">
            <div class="avatar">
                <img src="../assets/avatar.svg" alt="Avatar">
            </div>
            <h2>Hello there,<br>I’m Gabriela</h2>
            <p>A young, ambitious web developer keen on resolving intricate challenges.</p>
            <div class="buttons">
                <router-link to="projects">Project</router-link>
                <router-link to="experience">Experience</router-link>
            </div>
        </section>
        <section class="second_view">
            <div class="avatar">
                <img src="../assets/avatar.svg" alt="Avatar">
            </div>
            <div class="description">
                <p>My life goal is to become an expert in my chosen field. For this purpose, I regularly update and expand my knowledge. I like getting into substantive discussions and brainstorming.</p>
                <p>At my current position I am mostly responsible for creating, implementing and maintaining features using JavaScript language and occasionally jQuery library. Furthermore, one of my key responsibilities is coding campaign Landing Pages based on projects prepared in Figma, Adobe XD or Adobe Photoshop.</p>
                <p>Moreover, I played an instrumental role in the successful implementation of a new e-commerce website.</p>
            </div>
            <div class="tech">
                <div class="daily">
                    <h3 class="header">I use on daily basis</h3>
                    <ul>
                        <li>JavaScript (ES6+)</li>
                        <li>Sass/CSS3</li>
                        <li>Semantic HTML</li>
                    </ul>
                </div>
                <div class="additional">
                    <h3 class="header">But I can use</h3>
                    <ul>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>WordPress</li>
                    </ul>
                </div>
                <div class="tools">
                    <h3 class="header">Tools</h3>
                    <ul>
                        <li>VS Code</li>
                        <li>Jira</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>