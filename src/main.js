import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import routes from './routes'

Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false;
 
const router = new VueRouter({ routes,mode: 'history' });

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
