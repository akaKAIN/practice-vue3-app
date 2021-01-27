import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import {useStore} from "vuex";

const store = useStore()

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainLayout,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue'),
    meta: {
      layout: 'auth'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && store.getters.token) {
    next();
  } else {

  }
});

export default router;
