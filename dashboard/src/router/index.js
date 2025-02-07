import { createRouter, createWebHistory } from 'vue-router'
import StatusPanel from '../components/StatusPanel.vue'
import MapPanel from '../components/MapPanel.vue'
import ChartsPanel from '../components/ChartsPanel.vue'

const routes = [
  { path: '/', redirect: '/status' },
  { path: '/status', component: StatusPanel },
  { path: '/map', component: MapPanel },
  { path: '/charts', component: ChartsPanel }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
