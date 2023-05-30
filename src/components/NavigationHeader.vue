<script>
export default {
    mounted() {
        // let url = window.location.href;
        // document.querySelectorAll('nav > ul > li').forEach(link => {
        //     url.includes(link.getAttribute('title')) ? link.style.textDecoration = 'underline' : '';
        // // link.style.textDecoration = 'underline';
        // });
    },
  methods: {
    openMenu(){
        window.innerWidth < 1000 ? document.querySelector('header nav').classList.toggle('open') : '';
        // document.querySelector('header nav').classList.toggle('open')

    },
    
  }
}
</script>

<template>
    <nav>
        <ul>
            <li title="home"><router-link :to="{ name: 'home' }" @click="openMenu">Home</router-link></li>
            <li title="experience"><router-link :to="{ name: 'experience' }" @click="openMenu">Experience</router-link></li>
            <li title="projects"><router-link :to="{ name: 'projects' }" @click="openMenu">Projects</router-link></li>
        </ul>
    </nav>
    <div class="header_wrapper">
        <h1 class="header">Portfolio</h1>
        <div class="menu_icon" @click="openMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
