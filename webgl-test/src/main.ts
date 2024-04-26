import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(ElementPlus)


app.mount('#app')
