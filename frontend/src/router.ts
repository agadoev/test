import HomeView from './views/HomeView.vue'
import WalletView from './views/WalletView.vue'
import BenefitsView from './views/BenefitsView.vue'
import ProfileView from './views/ProfileView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeView },
  { path: '/wallet', component: WalletView },
  { path: '/benefits', component: BenefitsView },
  { path: '/profile', component: ProfileView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {
  router
}