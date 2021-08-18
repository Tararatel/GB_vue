'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import PageDashboard from '../page/PageDashboard';
import PageAbout from '../page/PageAbout';
import Page404 from '../page/Page404';
import PaymentForm from '../components/PaymentForm';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '/add/payment/:category*',
      name: 'addPayment',
      component: PaymentForm
    },
    {
      path: '*',
      name: 'NotFound',
      component: Page404
    }
  ]
});

const titles = {
  dashboard: 'Welcome to Dashboard',
  about: 'About us',
  NotFound: 'Page not found!',
  addPayment: 'Add payment'
};

router.afterEach((to) => {
  document.title = titles[to.name];
});

export default router;
