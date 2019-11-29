export default {
  data () {
    return {
      value: 3,
      disabled: 'false',
      fit: '设备图片',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      percentage: 60,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      partData: [
        { title: '备件编号', content: 'FM-0001' },
        { title: '备件名称', content: '阀门' },
        { title: '备件类型', content: '阀门' },
        { title: '备件类别', content: '阀门' },
        { title: '备件型号', content: '20' },
        { title: '规格', content: '阀门' },
        { title: '品牌', content: '西安余辉' },
        { title: '所在仓库', content: '1号仓库' },
        { title: '价格', content: '1000RMB' },
        { title: '单位', content: '个' },
        { title: '数量', content: '56' },
        { title: '生产厂商', content: '西安余辉' },
        { title: '供应商', content: '西安余辉' },
        { title: '物资类型', content: 'A级物资' },
        { title: '物资编码', content: 'YH_FM_0001' },
        { title: '使用寿命', content: '10年' },
        { title: '保修期', content: '3年' },
        { title: '购买时间', content: '2019-9-15' },
        { title: '报废时间', content: '2029-9-15' },
        { title: '备注', content: '暂无' }
      ],
      tableData: [{
        code: '0001',
        name: '发动机',
        completion: 20,
        type: 'FDJ_0001',
        model: '发动机',
        factory: '西安余辉',
        supplier: '西安',
        status: '正常',
        runDate: '2019-10-31',
        installLocation: '发动机',
        purchaseTime: '2019-10-01',
        warranty: '3年',
        servicelife: '10年',
        repairFrequency: '1/月/次'

      }, {
        code: '0002',
        name: '锅炉',
        completion: 40,
        type: 'FDJ_0001',
        model: '锅炉',
        factory: '西安余辉',
        supplier: '西安',
        status: '正常',
        runDate: '2019-10-31',
        installLocation: '发动机',
        purchaseTime: '2019-10-01',
        warranty: '3年',
        servicelife: '10年',
        repairFrequency: '1/月/次'

      }, {
        code: '0003',
        name: '起重机',
        completion: 80,
        type: 'FDJ_0001',
        model: '起重机',
        factory: '西安余辉',
        supplier: '西安',
        status: '正常',
        runDate: '2019-10-31',
        installLocation: '发动机',
        purchaseTime: '2019-10-01',
        warranty: '3年',
        servicelife: '10年',
        repairFrequency: '1/月/次'

      }, {
        code: '0004',
        name: '起重机',
        completion: 100,
        type: 'FDJ_0001',
        model: '起重机',
        factory: '西安余辉',
        supplier: '西安',
        status: '正常',
        runDate: '2019-10-31',
        installLocation: '发动机',
        purchaseTime: '2019-10-01',
        warranty: '3年',
        servicelife: '10年',
        repairFrequency: '1/月/次'

      }, {
        code: '0005',
        name: '起重机',
        completion: 60,
        type: 'FDJ_0001',
        model: '起重机',
        factory: '西安余辉',
        supplier: '西安',
        status: '正常',
        runDate: '2019-10-31',
        installLocation: '发动机',
        purchaseTime: '2019-10-01',
        warranty: '3年',
        servicelife: '10年',
        repairFrequency: '1/月/次'

      }, {
        code: '0006',
        name: '起重机',
        completion: 80,
        type: 'FDJ_0001',
        model: '起重机',
        factory: '西安余辉',
        supplier: '西安',
        status: '正常',
        runDate: '2019-10-31',
        installLocation: '发动机',
        purchaseTime: '2019-10-01',
        warranty: '3年',
        servicelife: '10年',
        repairFrequency: '1/月/次'

      }, {
        code: '0007',
        name: '阀门',
        completion: 40,
        type: 'FDJ_0001',
        model: '阀门',
        factory: '西安余辉',
        supplier: '西安',
        status: '正常',
        runDate: '2019-10-31',
        installLocation: '发动机',
        purchaseTime: '2019-10-01',
        warranty: '3年',
        servicelife: '10年',
        repairFrequency: '1/月/次'

      }],
      tableData1: [
        {
          ucontent: '2019-9-9完善资料',
          person: '张三',
          contribution: 3
        },
        {
          ucontent: '2019-9-19纠错',
          person: '李四',
          contribution: 1
        },
        {
          ucontent: '2019-9-20完善资料',
          person: '王五',
          contribution: 4
        },
        {
          ucontent: '2019-9-22纠错',
          person: '王珊',
          contribution: 3
        },
        {
          ucontent: '2019-9-29纠错',
          person: '陈烨',
          contribution: 2
        }
      ]
    }
  },
  methods: {
    edit: function () {
      alert('submit!')
    }
  }
}
