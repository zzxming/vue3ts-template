import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@unocss/reset/tailwind.css';
import 'uno.css';
import '@/assets/style/main.less';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
