import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
  RouterHistory
} from 'vue-router';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layoutName: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/Help.vue'),
    meta: {
      layoutName: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/Auth.vue'),
    meta: {
      layoutName: 'auth',
      auth: false
    }
  }
];

const history: RouterHistory = createWebHistory(process.env.BASE_URL);

const router: Router = createRouter({
  history,
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
  const requireAuth: boolean = to.meta.auth;
  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next();
  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth');
  } else {
    next();
  }
});

export default router;
