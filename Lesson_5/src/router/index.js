'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import PageDashboard from '../pages/PageDashboard';
import About from '../pages/About';
import Page404page from '../pages/Page404page';
import Login from '@/pages/Login';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PageDashboard,
            name: 'Dashboard'
        },
        {
            path: '/dashboard',
            component: PageDashboard,
            name: 'Dashboard'
        },
        {
            path: '/dashboard/:page',
            component: PageDashboard,
            name: 'Dashboard'
        },
        {
            path: '/add/payment/:category',
            component: () => import('../components/AddPaymentForm'),
            name: 'AddPaymentFromUrl'
        },
        {
            path: '/about',
            component: About,
            name: 'About'
        },
        {
            path: '/page404page',
            component: Page404page,
            name: '404'
        },
        {
            path: '/auth',
            component: Login,
            name: 'login'
        },
        {
            path: '*',
            component: Page404page
        }
    ]

});

const isAuth = true;

router.beforeEach((to, from, next) => {
    if(to.name !== 'login' && !isAuth) {
        next({name: 'login'});
    } else {
        next();
    }
});

const getTitleByRouteName = routeName => {
    return {
        'Dashboard': 'Page Dashboard',
        'About': 'Page About',
        '404': 'Not Found'
    }[routeName];
};

router.afterEach((to) => {
    document.title = getTitleByRouteName(to.name);
});

export default router;