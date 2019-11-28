import Vue from 'vue'
import Router from 'vue-router'

import Store from './store'
import GlobalVars from './components/global/globalVars.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

const _import = file => require('./page' + file + '.vue').default
// 全局路由(无需嵌套)
const globalRoutes = [
  { path: '/404', component: _import('/404'), name: '404', meta: { title: '404' } },
  { path: '/user/login', component: _import('/user/login/index'), name: 'login', meta: { title: '登录' } }
]
// 主入口路由(需嵌套整体布局页面)
const mainRoutes = {
  path: '/', component: _import('/layout/container/index'), name: 'index', meta: { title: '门户' }, children: []
}

const vueRouter = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  isAdd: false
})
// 判断当前是否全局路由
function isGlobalRoutes (to) {
  for (let i in globalRoutes) {
    if (globalRoutes[i].path === to.path) {
      return true
    }
  }
  return false
}
// 添加动态(菜单)路， 参数menu：菜单列表
function addDynamicMenu (routes, md) {
  if (md && md.length > 0) {
    for (var i = 0; i < md.length; i++) {
      if (md[i].component && !md[i].children) {
        var router = {}
        router.path = md[i].path
        router.name = md[i].key
        router.meta = { title: md[i].label, business: md[i].business }
        router.component = _import(md[i].component)
        routes.push(router)
      } else {
        addDynamicMenu(routes, md[i].children)
      }
    }
  }
}
vueRouter.addRoutes(globalRoutes)
vueRouter.afterEach(function (to, from) {
  Store.dispatch(GlobalVars.addTabsMethodName, to)
  if (!from.meta.business) {
    Store.dispatch(GlobalVars.setResourceMenuKeyMethod, to.name)
  }
  NProgress.done()
})
vueRouter.beforeEach((to, from, next) => { // 添加动态(菜单)路由
  NProgress.start()
  const token = sessionStorage.getItem(GlobalVars.userToken)
  if (!token) {
    // 1.1 如果没有获取到，要访问非登录页面，则不让访问，进入到登录页面/login
    if (!isGlobalRoutes(to)) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    if (vueRouter.options.isAdd || isGlobalRoutes(to)) { // 判断是否已经添加动态路由,或者当前为全局路由的时候。 直接访问
      next()
    } else {
      Store.dispatch(GlobalVars.initMenuDatasMethodName)
      var routes = []
      addDynamicMenu(routes, Store.state.menuDatas)
      mainRoutes.children = routes
      vueRouter.addRoutes([// vue-routers2.2版本以上才支持。
        mainRoutes,
        { path: '*', redirect: { name: '404' } }
      ])
      vueRouter.options.isAdd = true
      next({ name: (mainRoutes.children.length > 0 ? mainRoutes.children[0].name : mainRoutes.name), replace: true })
    }
  }
})
export default vueRouter
