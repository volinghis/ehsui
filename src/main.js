import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss' // global css
import globalCss from './styles/variables.scss'
import globalVars from './components/global/globalVars.js'
Vue.config.productionTip = false
Vue.prototype.GlobalCss = globalCss
Vue.prototype.GlobalVars = globalVars
Vue.use(elementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
