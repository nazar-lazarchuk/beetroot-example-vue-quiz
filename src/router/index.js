import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: process.env.NODE_ENV === 'production' ? '/beetroot-example-vue-quiz/' : '/',
})

export default router
