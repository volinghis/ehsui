import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import Router from './configs/router'
import Store from './configs/store'
import ECharts from 'vue-echarts/components/ECharts'
import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import './styles/index.scss' // global css
import './styles/font-awesome-4.7.0/scss/font-awesome.scss'
import GlobalCss from './styles/variables.scss'
import GlobalVars from './components/global/globalVars.js'
import Ehsecharts from './components/theme/ehsecharts.project.json'
import Axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.Axios = Axios
Vue.prototype.GlobalCss = GlobalCss
Vue.prototype.GlobalVars = GlobalVars
Vue.use(ElementUI)
ECharts.registerTheme(GlobalVars.ehsecharts, Ehsecharts)
Vue.component('chart', ECharts)
const store = Store
const router = Router
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
