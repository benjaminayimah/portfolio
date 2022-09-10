import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import All from '../components/layouts/HomeTabAll.vue'
import CaseStudies from '../components/layouts/HomeTabCaseStudy.vue'
import Projects from '../components/layouts/HomeTabProjects.vue'




const routes = [
  {
    path: '/', component: Home,
    children: [
      {path: '/', name: 'All', component: All},
      {path: '/case-studies', name: 'CaseStudies', component: CaseStudies},
      {path: '/projects', name: 'Projects', component: Projects}
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
