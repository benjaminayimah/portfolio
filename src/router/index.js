import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import DetailedPage from '../views/DetailedPage.vue'


const routes = [
  {
    path: '/', component: Home, name: 'Home'
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  { 
    path: '/project/:id/:name', component: DetailedPage, name: 'DetailedPage'
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
