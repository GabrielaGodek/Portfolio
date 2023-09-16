import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vueClickOutsideElement from 'vue-click-outside-element'

import { inject } from '@vercel/analytics';
 
inject();

import '@/scss/style.css'


const app = createApp(App)

app.use(router)
app.use(vueClickOutsideElement)

app.mount('#app')

