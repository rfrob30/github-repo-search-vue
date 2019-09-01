import Vue from 'vue';
import Router from 'vue-router';
import HelloComponent from '@/components/Hello';
import ReadMeComponent from '@/components/ReadMe';
import UserRepoComponent from '@/components/UserRepo';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.ROUTER_PREFIX,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloComponent,
    },
    {
      path: '/user-repo',
      name: 'userRepo',
      alias: '/vuex',
      component: UserRepoComponent,
    },
    {
      path: '/read-me',
      name: 'readMe',
      alias: '/vuex',
      component: ReadMeComponent,
    },
    {
      path: '*',
      component: {
        functional: true,
        render(h) {
          return h('h1', 'Page not found!');
        },
      },
    },
  ],
});

export default router;
