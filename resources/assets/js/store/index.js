import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

// import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth
      }
});
