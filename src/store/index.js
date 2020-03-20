import Vue from 'vue'
import Vuex from 'vuex'

import cart from './module/cart.js'
import goodlist from './module/goodlist.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  modules: {
    goodlist,
    cart
  }
})
