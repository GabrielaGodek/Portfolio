
<template>
    <div class="main_wrapper">
        <section class="first_view">
            <h2>Hello there, I’m Gabriela Godek</h2>
            <p>Young, ambitious web developer with talent to solve complex problems.</p>
            <div class="buttons">
                <router-link to="project"><input type="button" value="Project"></router-link>
                <router-link to="experience"><input type="button" value="Experience"></router-link>
            </div>
        </section>
        <section class="second_view">
            <p class="description">
                My life goal is to become an expert in my chosen field. For this purpose, I regularly update and expand my
                knowledge. I like getting into substantive discussions and brainstorming. <br> <br>

                At my current position I am mostly responsibly for creating, implement and maintaining features using
                JavaScript language and occasionally jQuery library. Furthermore one of my key responsibility is to code
                campaign Landing Page based on project prepared in Figma, Adobe XD or .psd format.
                Moreover I was responsible for the implementation of the new e-commerce website.
            </p>
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
                        <li>Jira/Trello</li>
                        <li>Figma/Adobe XD</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>