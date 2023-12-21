

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TeamView from '../views/TeamView.vue';
import PlayerView from '../views/PlayerView.vue';
import HeroView from '../views/HeroView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView, // Use the imported AboutView component
    },
    {
      path: '/player',
      name: 'player',
      component:PlayerView,
    },
    {
      path: '/hero',
      name: 'hero',
      component:HeroView,
    },
  ],
});

export default router;



