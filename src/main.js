import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.min.css'
import './style.scss'
import router from './router/index.js'
import App from './App.vue'

createApp(App).use(router).mount('#app')