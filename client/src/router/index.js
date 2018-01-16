import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import House from '@/components/House'
import Apartment from '@/components/Apartment'
import Post from '@/components/Post'
import Register from '@/components/Register'
import Detail from '@/components/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/house',
      name: 'House',
      component: House
    },
    {
      path: '/apartment',
      name: 'Apartment',
      component: Apartment
    },
    {
      path: '/house/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
