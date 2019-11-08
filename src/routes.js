import Portal from './layout/content/portal.vue';
import UserLogin from './user/login.vue';
import Layout from './layout/layout.vue';
import Content from './layout/content/content.vue';
import PageOne from './page/test/pageone.vue';
import UserSetting from './page/account/setting/index.vue';
import eamPartLibrary from './page/eam/eamPartLibrary/index.vue';
import details from './page/eam/eamPartLibrary/details.vue';
import eamAccountPrint from './page/eam/eamAccountPrint/index.vue';
import UserCenter from './page/account/center/index.vue';
import EamAccountDetails from './page/eam/eamAccountPrint/details.vue';
const routes = [
    { path: '/',name:'home',component:Layout,
    children: [
        {path: '', name:"portal", component: Portal },
        {path: 'page', name:"content", component: Content,children: [
            {path: 'test/pageone', name:"pageone", component: PageOne },
            {path: 'test/pageone', name:"pageone", component: PageOne },
            {path: 'account/setting/index', name:'index',component: UserSetting },
            {path: 'eam/eamPartLibrary/index', name:'index',component: eamPartLibrary },
            {path: 'eam/eamPartLibrary/details', name:'details',component: details },
            {path: 'account/center/index', name:"center",component:UserCenter},
            {path: 'eam/eamAccountPrint/index', name:"eamAccountPrint",component:eamAccountPrint},
            {path: 'eam/eamAccountPrint/details', name:"EamAccountDetails",component:EamAccountDetails}
      ] },
    { path: '/user/login', name:'userLogin',component: UserLogin }
    ]}
];
export default routes;