import Vue from 'vue'
import Vuex from 'vuex'
import Router from './router'
import globalCss from './styles/variables.scss'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentHeight: 0,
    menuDatas: [],
    selectedTabs: [],
    resourceMenuKey: ''
  },
  mutations: {
    setResourceMenuKey (state, menukey) {
      state.resourceMenuKey = menukey
    },
    addTabs (state, route) {
      let isAdd = true
      for (var i = state.selectedTabs.length - 1; i >= 0; i--) {
        if (state.selectedTabs[i].name === route.name) {
          isAdd = false
        }
      }
      if (isAdd) {
        state.selectedTabs.push(route)
      }
    },
    removeTabs (state, name) {
      let c = 1
      for (let i = state.selectedTabs.length - 1; i >= 0; i--) {
        if (state.selectedTabs[i].name === name) {
          c = i
          state.selectedTabs.splice(i, 1)
        }
      }
      Router.push({ name: state.selectedTabs[c - 1].name })
    },
    resize (state) {
      let ccHeight = document.body.offsetHeight >= parseInt(globalCss.bodyMinHight) ? document.body.offsetHeight : parseInt(globalCss.bodyMinHight)
      state.contentHeight = (ccHeight - parseInt(globalCss.headerHeight) - parseInt(globalCss.footerHeight) - parseInt(globalCss.tabHeight))
    },
    initMenuDatas (state) {
      // 测试-数据 typ[0上级菜单，1页面菜单，2页面功能]，这里是http请求后端接口获取数据路由数据。
      state.menuDatas = [
        { code: 'home', label: '首页', key: '1', path: '/', component: '/layout/content/portal', leaf: true },
        {
          code: 'edmAccountManager',
          label: '设备管理',
          key: '2',
          path: '',
          leaf: false,
          children: [
            { code: 'edmAccountPrintManager', label: '设备台帐', key: '21', path: '/eam/eamAccountPrint/index', component: '/eam/eamAccountPrint/index', leaf: true }
          ]
        },
        {
          code: 'edmPartLibraryManager',
          label: '备件管理',
          key: '3',
          path: '',
          leaf: false,
          children: [
            { code: 'edmPartManager', label: '备件台帐', key: '31', path: '/eam/eamPartLibrary/index', component: '/eam/eamPartLibrary/index', leaf: true }
          ]
        },
        {
          code: 'systemManager',
          label: '系统管理',
          key: '4',
          path: '',
          leaf: false,
          children: [
            { code: 'systemManagerCenter', label: '个人中心', key: '31', path: '/account/setting/index', component: '/account/setting/index', leaf: true, business: true },
            { code: 'systemManagerOrg', label: '组织管理', key: '32', path: '/account/center/index', component: '/account/center/index', leaf: true }
          ] }
      ]
    }
  },
  actions: {
    resizeWindowMethod (context) {
      context.commit('resize')
    },
    initMenuDatasMethod (context) {
      context.commit('initMenuDatas')
    },
    addTabsMethod (context, route) {
      context.commit('addTabs', route)
    },
    removeTabsMethod (context, name) {
      context.commit('removeTabs', name)
    },
    setResourceMenuKey (context, menukey) {
      context.commit('setResourceMenuKey', menukey)
    }
  }
})
