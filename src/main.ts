import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
// import VueAnimateOnScroll from 'vue-animate-onscroll'
import vueClickOutsideElement from 'vue-click-outside-element'
import { MotionPlugin } from '@vueuse/motion'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons/faFile'

// import AOS from 'aos'
// import 'aos/dist/aos.css'

import '@/scss/style.css'
import nprogressBar from '@/includes/nprogress'
import "nprogress/nprogress.css"

const app = createApp(App)
library.add(faGithub, faLinkedin, faEnvelopeOpenText, faFile, faLaptopCode)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.component('scroll-parallax', ScrollParallax);
nprogressBar(router)
app.use(vueClickOutsideElement)
// app.use(VueAnimateOnScroll)
app.use(MotionPlugin)

app.mount('#app')

