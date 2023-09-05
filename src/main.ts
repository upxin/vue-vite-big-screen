
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// main.ts

import App from './App.vue'
import router from './router'

import "amfe-flexible";

import './styles/index.css'

import 'virtual:uno.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
