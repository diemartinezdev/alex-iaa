import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import ActividadesIaa from './components/ActividadesIaa.vue';

const routes = [
  { path: '/', component: ActividadesIaa },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(ActividadesIaa);
app.use(router);
app.mount('#app');
