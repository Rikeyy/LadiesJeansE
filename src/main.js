import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import router from "./router";

import Aos from 'aos'; 
import "aos/dist/aos.css"

const app = createApp(App);


app.use(router);

app.mount("#app");

Aos.init();