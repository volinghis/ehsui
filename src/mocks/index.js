import GlobalVars from '@components/global/globalVars.js'
const Mock = require('mockjs')
Mock.mock(GlobalVars.globalServiceServlet + '/auth/menu/menuDatas', 'get', require('./json/menuDatas'))
Mock.mock(GlobalVars.globalServiceServlet + '/eam/eamLedger/getList', 'get', require('./json/eam/eamLedger/eamTableData'))
Mock.mock(GlobalVars.globalServiceServlet + '/eam/eamLedger/getSuggestions', 'get', require('./json/eam/eamLedger/searchSuggestions'))
Mock.mock(GlobalVars.globalServiceServlet + '/eam/eamLedger/getRepairRecord', 'get', require('./json/eam/eamLedger/repairRecord'))
Mock.mock(GlobalVars.globalServiceServlet + '/eam/eamPartsAccount/getList', 'get', require('./json/eam/eamPartsAccount/partTable'))
Mock.mock(GlobalVars.globalServiceServlet + '/eam/eamPartsAccount/getSuggestions', 'get', require('./json/eam/eamLedger/searchSuggestions'))
