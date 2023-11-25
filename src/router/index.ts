import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/views/post/PostList.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      props: true,
      component: () => import('@/views/post/PostView.vue')
    },
    {
      path: '/u',
      name: 'Users',
      component: () => import('@/views/user/UserList.vue')
    },
  ]
})

export default router
