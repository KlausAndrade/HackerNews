import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/index.vue';
import StoryPage from '@/pages/StoryPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/story/:id', component: StoryPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;