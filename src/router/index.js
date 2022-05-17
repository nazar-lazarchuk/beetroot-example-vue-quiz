import { createRouter, createWebHistory } from 'vue-router'
import { publicPath } from '../../vue.config'
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
  base: publicPath,
})

export default router
