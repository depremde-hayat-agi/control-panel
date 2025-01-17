import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import YourConsts from './plugins/constsPlugin'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'leaflet/dist/leaflet.css';
import store from '@/store/store'
import Vuex from 'vuex'


Vue.use(Vuex)
Vue.use(YourConsts)
Vue.config.productionTip = false



new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
