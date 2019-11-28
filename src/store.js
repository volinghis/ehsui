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
      state.contentHeight = (ccHeight - parseInt(globalCss.headerHeight))
    },
    initMenuDatas (state) {
      // 测试-数据 typ[0上级菜单，1页面菜单，2页面功能]，这里是http请求后端接口获取数据路由数据。
      state.menuDatas = [
        { code: 'home', label: '首页', key: '1', path: '/home', component: '/layout/container/test', leaf: true }
        // {
        //   code: 'eamAccountManager',
        //   label: '设备管理',
        //   key: '2',
        //   path: '',
        //   leaf: false,
        //   children: [
        //     { code: 'eamAccountPrintManager', label: '设备台帐', key: '21', path: '/eam/eamAccountPrint/index', component: '/eam/eamAccountPrint/index', leaf: true },
        //     { code: 'eamAccountPrintEdit', label: '设备编辑', key: '211', path: '/eam/eamAccountPrint/edit', component: '/eam/eamAccountPrint/edit', leaf: true, business: true },
        //     { code: 'eamAccountPrintDetail', label: '设备详情', key: '212', path: '/eam/eamAccountPrint/details', component: '/eam/eamAccountPrint/details', leaf: true, business: true },
        //     { code: 'eamAccountPrintManager', label: '设备报废', key: '22', path: '/eam/eamAccountPrint/index', component: '/eam/eamAccountPrint/index', leaf: true },
        //     { code: 'eamAccountPrintManager', label: '设备变卖', key: '23', path: '/eam/eamAccountPrint/index', component: '/eam/eamAccountPrint/index', leaf: true },
        //     { code: 'eamAccountPrintManager', label: '设备转移', key: '24', path: '/eam/eamAccountPrint/index', component: '/eam/eamAccountPrint/index', leaf: true },
        //     { code: 'eamAccountPrintManager', label: '设备折价', key: '25', path: '/eam/eamAccountPrint/index', component: '/eam/eamAccountPrint/index', leaf: true }
        //   ]
        // },
        // {
        //   code: 'eamPartLibraryManager',
        //   label: '备件管理',
        //   key: '3',
        //   path: '',
        //   leaf: false,
        //   children: [
        //     { code: 'eamPartManager', label: '备件台帐', key: '311', path: '/eam/eamPartLibrary/index', component: '/eam/eamPartLibrary/index', leaf: true },
        //     { code: 'eamPartManager', label: '入库管理', key: '322', path: '/eam/eamPartLibrary/index', component: '/eam/eamPartLibrary/index', leaf: true },
        //     { code: 'eamPartManager', label: '领用申请', key: '333', path: '/eam/eamPartLibrary/index', component: '/eam/eamPartLibrary/index', leaf: true },
        //     { code: 'eamPartManager', label: '出库管理', key: '344', path: '/eam/eamPartLibrary/index', component: '/eam/eamPartLibrary/index', leaf: true },
        //     { code: 'eamPartManagerEdit', label: '备件台帐编辑', key: '355', path: '/eam/eamPartLibrary/edit', component: '/eam/eamPartLibrary/edit', leaf: true, business: true }
        //   ]
        // },
        // {
        //   code: 'systemManager',
        //   label: '系统管理',
        //   key: '4',
        //   path: '',
        //   leaf: false,
        //   children: [
        //     { code: 'userCenter', label: '个人设置', key: '41', path: '/account/setting/index', component: '/account/setting/index', leaf: true, business: true },
        //     { code: 'userSetting', label: '个人中心', key: '42', path: '/account/center/index', component: '/account/center/index', leaf: true, business: true }
        //   ] }
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
