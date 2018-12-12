import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import City from '../components/city/City'
import Play from '../components/play/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    }
  ]
})
