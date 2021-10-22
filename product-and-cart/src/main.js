import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/style.scss'
// * this is the same as:
// const app = createApp(App)
// app.use(router)
// app.mount('#app')
createApp(App).use(router).mount('#app')
