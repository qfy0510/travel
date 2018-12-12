import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const defaultcity = "北京"
export default new Vuex.Store({
    state:{
        city:defaultcity
    },
    actions:{
        changecity(ctx,city){
            ctx.commit('changecity',city); 
        }
    },
    mutations:{
        changecity(state,city){
            state.city = city;
            
        }
    }
})
