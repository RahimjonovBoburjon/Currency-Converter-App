import { createApp } from 'vue'
import './assets/main.css';
import App from './App.vue'
import router from "./router"; 

createApp(App).mount('#app')
createApp(App).use(router).mount("#app");