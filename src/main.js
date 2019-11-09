import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './element'
import echarts from './echarts'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  element,
  echarts,
  render: h => h(App)
}).$mount('#app')
