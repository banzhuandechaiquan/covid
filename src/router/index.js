import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home/tabs/chinaMap'
    // redirect:'/policy'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children:[
        {path:'tabs',name:'Tabs',component:() => import('../components/Tabs'),
        children:[
          {path:'chinaMap',name:'ChinaMap',component: () => import('../components/ChinaMap')},
          {path:'worldMap',name:'WorldMap',component: () => import('../components/WorldMap')}
        ]}
        ]
  },
  {
    path:'/city/:city',
    name:'City',
    component:() => import("../views/City"),
    props:true
  },
  {
    // path:'/policy/:citys',
    path:'/policy',
    name:'Policy',
    component:() => import("../views/Policy"),
    props:true
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
