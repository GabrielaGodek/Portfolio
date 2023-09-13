import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/scss/style.css'
// import './scss/style.css.map'

import VueClosable from 'vue-closable'

const app = createApp(App)

app.use(router)
app.use(VueClosable)

app.mount('#app')

