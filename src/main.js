import './assets/css/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'
import './assets/scss/theme.scss'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue).mount('#app')
