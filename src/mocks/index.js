const Mock = require('mockjs')
Mock.mock('/auth/menu/menuDatas', 'get', require('./json/menuDatas'))
