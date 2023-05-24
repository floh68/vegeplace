import { createRouter, createWebHistory } from 'vue-router';
import index from '@/Pages/index.vue';
import profil from '@/Pages/Profil.vue';
import panier from '@/Pages/panier.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      path: '/panier',
      name: 'panier',
      component: panier,
    },
    {
      path: '/profil',
      name: 'profil',
      component: profil,
    },
  ],
});

export default router;