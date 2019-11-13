import Vue from 'vue'
import Router from 'vue-router'
import Portal from './layout/content/portal.vue'
import UserLogin from './user/login.vue'
import Layout from './layout/layout.vue'
import Content from './layout/content/content.vue'
import PageOne from './page/test/pageone.vue'
import UserSetting from './page/account/setting/index.vue'
import eamPartLibrary from './page/eam/eamPartLibrary/index.vue'
import EamPartDetails from './page/eam/eamPartLibrary/details.vue'
import EamPartEdit from './page/eam/eamPartLibrary/edit.vue'
import eamAccountPrint from './page/eam/eamAccountPrint/index.vue'
import UserCenter from './page/account/center/index.vue'
import EamAccountDetails from './page/eam/eamAccountPrint/details.vue'
import BaseStepForm from './page/eam/eamPartLibrary/stepForm/baseForm.vue'
import BaseStepFormOne from './page/eam/eamPartLibrary/stepForm/step1.vue'
import BaseStepFormTwo from './page/eam/eamPartLibrary/stepForm/step2.vue'
import BaseStepFormThree from './page/eam/eamPartLibrary/stepForm/step3.vue'

Vue.use(Router)

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      { path: '', name: 'portal', component: Portal },
      {
        path: 'page',
        name: 'content',
        component: Content,
        children: [
          { path: 'test/pageone', name: 'pageone', component: PageOne },
          { path: 'test/pageone', name: 'pageone', component: PageOne },
          {
            path: 'account/setting/index',
            name: 'index',
            component: UserSetting
          },
          {
            path: 'eam/eamPartLibrary/index',
            name: 'partLibraryIndex',
            component: eamPartLibrary
          },
          {
            path: 'eam/eamPartLibrary/details',
            name: 'partDetails',
            component: EamPartDetails
          },
          {
            path: 'eam/eamPartLibrary/edit',
            name: 'partEdit',
            component: EamPartEdit
          },
          {
            path: 'eam/eamPartLibrary/stepForm/baseForm',
            name: 'partBaseForm',
            component: BaseStepForm
          },
          {
            path: 'eam/eamPartLibrary/stepForm/step1',
            name: 'partStepOne',
            component: BaseStepFormOne
          },
          {
            path: 'eam/eamPartLibrary/stepForm/step2',
            name: 'partStepTwo',
            component: BaseStepFormTwo
          },
          {
            path: 'eam/eamPartLibrary/stepForm/step3',
            name: 'partStepThree',
            component: BaseStepFormThree
          },
          {
            path: 'account/center/index',
            name: 'center',
            component: UserCenter
          },
          {
            path: 'eam/eamAccountPrint/index',
            name: 'eamAccountPrint',
            component: eamAccountPrint
          },
          {
            path: 'eam/eamAccountPrint/details',
            name: 'EamAccountDetails',
            component: EamAccountDetails
          }
        ]
      },
      { path: '/user/login', name: 'userLogin', component: UserLogin }
    ]
  }
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
