import GlobalVars from '@components/global/globalVars.js'
const Mock = require('mockjs')
Mock.mock(GlobalVars.globalServiceServlet + '/auth/menu/menuDatas', 'get', require('./json/menuDatas'))
Mock.mock(GlobalVars.globalServiceServlet + '/eam/eamLedger/getList', 'get', require('./json/eam/eamLedger/eamTableData'))
Mock.mock(GlobalVars.globalServiceServlet + '/eam/eamLedger/getSuggestions', 'get', require('./json/eam/eamLedger/searchSuggestions'))
