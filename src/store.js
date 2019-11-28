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
      let ccHeight =
        document.body.offsetHeight >= parseInt(globalCss.bodyMinHight)
          ? document.body.offsetHeight
          : parseInt(globalCss.bodyMinHight)
      state.contentHeight =
        ccHeight -
        parseInt(globalCss.headerHeight) -
        parseInt(globalCss.footerHeight) -
        parseInt(globalCss.tabHeight)
    },
    initMenuDatas (state) {
      // 测试-数据 typ[0上级菜单，1页面菜单，2页面功能]，这里是http请求后端接口获取数据路由数据。
      state.menuDatas = [
        {
          code: 'home',
          label: '首页',
          key: '1',
          path: '/',
          component: '/layout/content/portal',
          leaf: true
        },
        {
          code: 'eamAccountManager',
          label: '设备管理',
          key: '2',
          path: '',
          leaf: false,
          children: [
            {
              code: 'eamAccountPrintManager',
              label: '设备台帐',
              key: '21',
              path: '/eam/eamAccountPrint/eamAccount/index',
              component: '/eam/eamAccountPrint/eamAccount/index',
              leaf: true
            },
            {
              code: 'eamAccountPrintEdit',
              label: '设备编辑',
              key: '22',
              path: '/eam/eamAccountPrint/eamAccount/edit',
              component: '/eam/eamAccountPrint/eamAccount/edit',
              leaf: true,
              business: true
            },
            {
              code: 'eamAccountPrintDetail',
              label: '设备详情',
              key: '23',
              path: '/eam/eamAccountPrint/eamAccount/details',
              component: '/eam/eamAccountPrint/eamAccount/details',
              leaf: true,
              business: true
            },
            {
              code: 'eamScrapManager',
              label: '设备报废',
              key: '24',
              path: '/eam/eamAccountPrint/eamScrap/index',
              component: '/eam/eamAccountPrint/eamScrap/index',
              leaf: true
            },
            {
              code: 'eamScrapBaseForm',
              label: '报废步骤',
              key: '241',
              path: '/eam/eamAccountPrint/eamScrap/stepForm/baseForm',
              component: '/eam/eamAccountPrint/eamScrap/stepForm/baseForm',
              leaf: true,
              business: true
            },
            {
              code: 'eamScrapStep1',
              label: '步骤一',
              key: '2411',
              path: '/eam/eamAccountPrint/eamScrap/stepForm/step1',
              component: '/eam/eamAccountPrint/eamScrap/stepForm/step1',
              leaf: true,
              business: true
            },
            {
              code: 'eamScrapStep2',
              label: '步骤二',
              key: '2412',
              path: '/eam/eamAccountPrint/eamScrap/stepForm/step2',
              component: '/eam/eamAccountPrint/eamScrap/stepForm/step2',
              leaf: true,
              business: true
            },
            {
              code: 'eamScrapStep3',
              label: '步骤三',
              key: '2413',
              path: '/eam/eamAccountPrint/eamScrap/stepForm/step3',
              component: '/eam/eamAccountPrint/eamScrap/stepForm/step3',
              leaf: true,
              business: true
            },
            {
              code: 'eamScrapStep4',
              label: '步骤四',
              key: '2414',
              path: '/eam/eamAccountPrint/eamScrap/stepForm/step4',
              component: '/eam/eamAccountPrint/eamScrap/stepForm/step4',
              leaf: true,
              business: true
            },
            {
              code: 'eamSelectManager',
              label: '设备选择',
              key: '25',
              path: '/eam/common/eamList',
              component: '/eam/common/eamList',
              leaf: true,
              business: true
            },
            {
              code: 'eamAllocate',
              label: '设备调拨',
              key: '26',
              path: '/eam/eamAccountPrint/eamAllocate/index',
              component: '/eam/eamAccountPrint/eamAllocate/index',
              leaf: true
            }
          ]
        },
        {
          code: 'eamPartLibraryManager',
          label: '备件管理',
          key: '3',
          path: '',
          leaf: false,
          children: [
            {
              code: 'eamPartManager',
              label: '备件台帐',
              key: '31',
              path: '/eam/eamPartLibrary/index',
              component: '/eam/eamPartLibrary/index',
              leaf: true
            },
            {
              code: 'eamPartManager',
              label: '入库管理',
              key: '32',
              path: '/eam/eamPartLibrary/index',
              component: '/eam/eamPartLibrary/index',
              leaf: true
            },
            {
              code: 'eamPartManager',
              label: '领用申请',
              key: '33',
              path: '/eam/eamPartLibrary/index',
              component: '/eam/eamPartLibrary/index',
              leaf: true
            },
            {
              code: 'eamPartManager',
              label: '出库管理',
              key: '34',
              path: '/eam/eamPartLibrary/index',
              component: '/eam/eamPartLibrary/index',
              leaf: true
            },
            {
              code: 'eamPartManagerEdit',
              label: '备件台帐编辑',
              key: '32',
              path: '/eam/eamPartLibrary/edit',
              component: '/eam/eamPartLibrary/edit',
              leaf: true,
              business: true
            }
          ]
        },
        {
          code: 'eamBasicDataManager',
          label: '基础数据管理',
          key: '5',
          path: '/eam/common/eamBasicData',
          component: '/eam/common/eamBasicData',
          leaf: true
        },
        {
          code: 'eamInfoAdd',
          label: '设备基础信息添加',
          key: '51',
          path: '/eam/common/eamInfoAdd',
          component: '/eam/common/eamInfoAdd',
          leaf: true,
          business: false
        },
        {
          code: 'dataBase',
          label: '资料库',
          key: '6',
          path: '',
          leaf: false,
          children: [
            {
              code: 'eamDataBase',
              label: '设备资料',
              key: '61',
              path: '/eam/eamDataBase/index',
              component: '/eam/eamDataBase/index',
              leaf: true,
              business: false
            }
          ]
        },
        {
          code: 'systemManager',
          label: '系统管理',
          key: '7',
          path: '',
          leaf: false,
          children: [
            {
              code: 'userCenter',
              label: '个人设置',
              key: '71',
              path: '/account/setting/index',
              component: '/account/setting/index',
              leaf: true,
              business: true
            },
            {
              code: 'userSetting',
              label: '个人中心',
              key: '72',
              path: '/account/center/index',
              component: '/account/center/index',
              leaf: true,
              business: true
            }
          ]
        }
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
