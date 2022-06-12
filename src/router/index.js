import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layouts/default';

// import Okta Vue SDK
import Auth from '@okta/okta-vue';

// import okta callback
import implicitCallback from '@/components/boilerplate/implicitCallback';

// import error page
import errorPage from '@/components/boilerplate/errorPage';

// set Okta Configuration
Vue.use(Auth, {
  issuer: process.env.OKTA_ISSUER,
  clientId: process.env.OKTA_CLIENT_ID,
  redirectUri: process.env.OKTA_REDIRECT_URL,
  scopes: ['openid', 'profile', 'email'],
  responseType: ['id_token'],
});

Vue.use(Router);

const PageHome = () => import('@/pages/Home.vue');
const PageNotFound = () => import('@/pages/NotFound.vue');

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/implicit/callback',
      component: implicitCallback,
    },
    {
      path: '/error',
      name: 'error',
      component: errorPage,
    },
    {
      path: '*',
      name: 'AllPath',
      redirect: {
        path: '/404',
      },
    },
    {
      path: '/404',
      name: 'NotFound',
      component: PageNotFound,
    },
    {
      path: '/',
      name: 'Root',
      component: Layout,
      redirect: {
        name: 'home',
      },

      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component: PageHome,
          meta: {
            title: 'home',
            icon: 'home',
          },
        },
        {
          path: 'site',
          name: 'site',
          component: PageHome,
          meta: {
            title: 'site',
            icon: 'location_on',
          },
        },

      ],
    },
  ],
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
