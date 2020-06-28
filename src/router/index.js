import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../pages/Home/Home'
// import Order from '../pages/Order/Order'
// import Person from '../pages/Person/Person'
// import Search from '../pages/Search/Search'

const Home = () => import('../pages/Home/Home')
const Order = () => import('../pages/Order/Order')
const Person = () => import('../pages/Person/Person')
const Search = () => import('../pages/Search/Search')

import Login from '../pages/Login/Login'

import Shop from '../pages/Shop/Shop'

import Goods from '../pages/Shop/Goods/Goods'
import Info from '../pages/Shop/Info/Info'
import Ratings from '../pages/Shop/Ratings/Ratings'

Vue.use(Router)

const router =  new Router({

  routes:[


    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/person',
      component:Person,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:Goods,
        },
        {
          path:'/shop/ratings',
          component:Ratings,
        },
        {
          path:'/shop/info',
          component:Info,
        },
        {
          path:'/',
          redirect:'/shop/goods'
        }
      ]

    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

      

  

export default router



