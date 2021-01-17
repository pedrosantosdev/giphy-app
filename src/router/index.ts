import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '../views/Home.vue'),
    children: [{ path: 'page/:page' }]
  },
  {
    path: '/login',
    name: 'Login Page',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '../views/Login.vue')
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

export default router;
