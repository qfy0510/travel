import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'  
import './assets/css/swiper.min.css'
import './assets/css/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  store,   
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
