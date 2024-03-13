import './assets/main.css'
import './assets/normalize.css'
import { createApp } from 'vue'
import App from './App.vue'

import  infrastructure  from "@/infrastructure";

const app = createApp(App);

app.use(infrastructure);
app.mount('#app');

