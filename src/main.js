import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/scss/style.css'
// import './scss/style.css.map'

const app = createApp(App)

app.use(router)

app.mount('#app')
