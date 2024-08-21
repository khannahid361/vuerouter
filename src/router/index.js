import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactusView from '@/views/ContactusView.vue'
import Jobs from '@/views/job/Jobs.vue'
import JobDetails from '@/views/job/JobDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => AboutView
  },
  {
    path: '/contact',
    name: 'ContactusView',
    component: () => ContactusView
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => JobDetails,
    props: true
  },
  {
    path: '/all-jobs',
    redirect : '/jobs'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
