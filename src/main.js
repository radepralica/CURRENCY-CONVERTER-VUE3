import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import TheFooter from './components/TheFooter.vue';
const app = createApp(App);

app.component('the-footer', TheFooter);
app.mount('#app');
