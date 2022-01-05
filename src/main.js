import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axiosPlugin from './plugins/axiosPlugin'

import AppLayout from './layouts/AppLayout'

const app = createApp(App)
app.use(axiosPlugin)

store.$router = router

app.use(store).use(router).component('AppLayout', AppLayout).mount('#app')
