import Vue from 'vue'
import VueRouter from 'vue-router'
// import Ebook from '../views/ebook/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    component: resolve => require(['@/views/ebook/index.vue'], resolve),
    children: [
      {
        path: ':kindName/:fileName',
        component: resolve => require(['@/components/ebook/EbookReader.vue'], resolve)
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
