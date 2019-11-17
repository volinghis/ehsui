import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import ECharts from 'vue-echarts/components/ECharts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss' // global css
import GlobalCss from './styles/variables.scss'
import GlobalVars from './components/global/globalVars.js'
import './components/global/common.js'
import Ehsecharts from './components/theme/ehsecharts.project.json'
Vue.config.productionTip = false
Vue.prototype.GlobalCss = GlobalCss
Vue.prototype.GlobalVars = GlobalVars
Vue.use(ElementUI)
ECharts.registerTheme('ehsecharts', Ehsecharts)
Vue.component('chart', ECharts)
const store = Store
const router = Router
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
