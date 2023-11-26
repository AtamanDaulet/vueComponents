import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import("@/views/post/PostList.vue")
    },
    {
      path: '/post/:id',
      name: 'post',
      props: true,
      component: () => import("@/views/post/PostView.vue")
    },
    {
      path: '/users',
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/user/UserList.vue')
    },
    {
      path: '/users/:id',
      name: 'user',
      props: true,
      component: () => import("@/views/user/UserView.vue")
    }
  ]
})

export default router
