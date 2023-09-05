import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/home.vue')
        }
      ]
    },
    {
      path: '/redirect',
      component: Layout,
      name: 'Redirect',
      children: [
        {
          path: '/redirect/:path(.*)',
          name: 'Redirect',
          component: () => import('@/views/Redirect/Redirect.vue'),
          meta: {}
        }
      ],
      meta: {
        hidden: true,
        noTagsView: true
      }
    },
    {
      path: '/404',
      name: 'NoFind',
      component: () => import('@/views/404/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]
})

export default router
