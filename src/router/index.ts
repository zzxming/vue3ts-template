import { createRouter, createWebHistory } from 'vue-router';

export const routes = [];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/404',
    // },
  ],
});

export default router;
