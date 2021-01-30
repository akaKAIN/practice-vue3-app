import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
  RouterHistory
} from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: MainLayout,
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
  routes
});

router.beforeEach((to, from, next) => {
  const requireAuth: boolean = to.meta.auth;
  console.log(
    'store.getters[auth/token]',
    store.getters['auth/token'],
    store.getters['auth/isAuthenticated']
  );
  if (requireAuth && store.getters['auth/isAuthenticated']) {
    next();
  } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth');
  } else {
    next();
  }
});

export default router;
