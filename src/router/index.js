import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Purchase from '@/page/purchase'
import Seller from '@/page/seller'
import Stock from '@/page/stock'
import PDF from '@/page/pdf'
import TestPage from '@/views/About'
import EditPurchase from '@/components/purchase/edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: '/', component: Purchase },
      { path: '/seller', component: Seller },
      { path: '/stock', component: Stock },
      { path: '/edit', component: EditPurchase }
    ]
  },
  { path: '/pdf', component: PDF },
  { path: '/test', component: TestPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
