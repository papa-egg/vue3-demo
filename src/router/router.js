import { createRouter, createWebHistory } from 'vue-router';
import '../pages/index/Index'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import('@/pages/index/Index.vue'),
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('@/pages/request/Request.vue'),
    },
    {
      path: '/transmit',
      name: 'transmit',
      component: () => import('@/pages/transmit/Transmit.vue'),
    },
    {
      path: '/vuex-demo',
      name: 'vuex-demo',
      component: () => import('@/pages/vuex-demo/VuexDemo.vue'),
    },
    {
      path: '/router-demo',
      name: 'router-demo',
      component: () => import('@/pages/router-demo/RouterDemo.vue'),
      children: [
        {
          path: '/router-demo/page1',
          name: 'page1',
          component: () => import('@/pages/router-demo/components/router-page1/RouterPage1'),
        },
        {
          path: '/router-demo/page2',
          name: 'page2',
          component: () => import('@/pages/router-demo/components/router-page2/RouterPage2'),
        },
      ],
    },
    {
      path: '/',
      redirect: '/index',
    },
  ]
});
