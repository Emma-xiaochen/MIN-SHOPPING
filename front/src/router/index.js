import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import goodsDetail from '../views/goodsDetail.vue'
import orderDetail from '../views/orderDetail.vue'
import personal from '../views/personal.vue'
import myCart from '../views/myCart.vue'
import order from '../views/order.vue'
import search from '../views/search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/goodsDetail',
    name: 'goodsDetail',
    component: goodsDetail
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    component: orderDetail
  },
  {
    path: '/order',
    name: 'order',
    component: order
  },
  {
    path: '/myCart',
    name: 'myCart',
    component: myCart
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal
  },
  {
    path: '/search',
    name: 'search',
    component: search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {undefined
  return originalPush.call(this, location).catch(err => err)
}

export default router
