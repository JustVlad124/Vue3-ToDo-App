import './assets/output.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import $bus from './utils/Events'
import $data from './data'

const app = createApp(App)

app.use(router)

app.provide('$bus', $bus)
app.provide('$data', $data)

app.mount('#app')
