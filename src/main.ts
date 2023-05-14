import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Geolocation from 'vue3-geolocation';

import './assets/css/style.css'

const app = createApp(App)

app.use(router)
app.use(Vue3Geolocation)
app.mount('#app')
