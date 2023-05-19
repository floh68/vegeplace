import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../Pages/HomeView.vue';
//import Contact from '../Pages/contact.vue';
import Panier from '../Pages/panier.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/panier',
      name: 'panier',
      component: Panier,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});

export default router;
