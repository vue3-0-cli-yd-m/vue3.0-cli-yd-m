import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/home/index.vue';

const HomeRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
];

export default HomeRoute;
