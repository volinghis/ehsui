import Vue from 'vue'
import Vuex from 'vuex'
import globalCss from './styles/variables.scss'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentHeight: 0,
    menuDatas: []
  },
  mutations: {
    resize (state) {
      let ccHeight = document.body.offsetHeight >= parseInt(globalCss.bodyMinHight) ? document.body.offsetHeight : parseInt(globalCss.bodyMinHight)
      state.contentHeight = (ccHeight - parseInt(globalCss.headerHeight) - parseInt(globalCss.footerHeight))
    },
    initMenuDatas (state) {
      // 测试-数据 typ[0上级菜单，1页面菜单，2页面功能]，这里是http请求后端接口获取数据路由数据。
      state.menuDatas = [
        { code: 'home', label: '首页', key: '1', path: '/', component: '/test/pageone', leaf: true },
        {
          code: 'edmManager',
          label: '设备管理',
          key: '2',
          path: '',
          leaf: false,
          children: [
            { code: 'edmManagerAccount', label: '设备台帐', key: '21', path: '/eam/eamPartLibrary/index', component: '/eam/eamPartLibrary/index', leaf: true },
            { code: 'edmManagerAccountPrint', label: '备件台帐', key: '22', path: '/eam/eamAccountPrint/index', component: '/eam/eamAccountPrint/index', leaf: true }]
        },
        {
          code: 'systemManager',
          label: '系统管理',
          key: '3',
          path: '',
          leaf: false,
          children: [
            { code: 'systemManagerCenter', label: '个人中心', key: '31', path: '/account/setting/index', component: '/account/setting/index', leaf: true },
            { code: 'systemManagerOrg', label: '组织管理', key: '32', path: '/account/center/index', component: '/account/center/index', leaf: true }
          ] }
      ]
    }
  },
  actions: {
    resizeWindow (context) {
      context.commit('resize')
    },
    initMenuDatas (context) {
      context.commit('initMenuDatas')
    }
  }
})
