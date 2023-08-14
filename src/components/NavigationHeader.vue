<script setup>
const openMenu = () => {
    if (window.innerWidth < 1000) {
        document.querySelector('header nav').classList.toggle('open')
    } 
}
document.addEventListener('click', (event) => {
    const composed = event.composedPath()
    const nav = document.querySelector('header nav.navigation')
    const menu = document.querySelector('header .menu_icon')

    if (!composed.includes(nav) && !composed.includes(menu)) {
        document.querySelector('header nav').classList.remove('open')
    }
})

let oldScrollPos = window.scrollY
document.addEventListener('scroll', () => {
    let scrollPos = window.scrollY
    if(scrollPos < oldScrollPos || document.querySelector('header nav.open')) {
        document.querySelector('header').style.position = 'fixed'
    } else {
        document.querySelector('header').style.position = 'absolute'
    }
    oldScrollPos = window.scrollY

})
</script>

<template>
    <nav class="navigation">
        <ul>
            <li title="home"><router-link :to="{ name: 'home' }" @click="openMenu">Home</router-link></li>
            <li title="experience"><router-link :to="{ name: 'experience' }" @click="openMenu">Experience</router-link></li>
            <li title="projects"><router-link :to="{ name: 'projects' }" @click="openMenu">Projects</router-link></li>
        </ul>
    </nav>
    <div class="header_wrapper">
        <div class="logo"><img src="@/assets/Logo.svg" alt="Gabriela Godek's Portfolio"></div>
        <div class="menu_icon" @click="openMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
