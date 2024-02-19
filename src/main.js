import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'
import './assets/theme.scss'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app
  .use(PrimeVue, {
    pt: {
      checkbox: {
        root: {}
      }
    }
  })
  .mount('#app')
