import { Auth } from '@/utils/auth/auth';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '../views/Home.vue'),
    children: [{ path: 'page/:page' }]
  },
  {
    path: '/login',
    name: 'login-page',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard-page',
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '../views/Dashboard.vue')
  },
  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "error-pages" */ '../views/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!Auth.isLogged()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
