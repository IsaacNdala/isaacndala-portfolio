import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line 
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return { 
        el: to.hash, 
        behavior: 'smooth' 
      }
    }
    return { top: 0 }
  }
})

export default router