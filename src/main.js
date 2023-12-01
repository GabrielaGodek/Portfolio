import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vueClickOutsideElement from 'vue-click-outside-element'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

import '@/scss/style.css'
import nprogressBar from '@/includes/nprogress'
import "nprogress/nprogress.css"

const app = createApp(App)
library.add(faGithub, faLinkedin, faEnvelopeOpenText, faFile, faUpRightFromSquare, faLaptopCode)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
nprogressBar(router)
app.use(vueClickOutsideElement)

app.mount('#app')

