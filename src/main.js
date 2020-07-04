import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
