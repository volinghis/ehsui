export default {
  methods: {
    handleAdd: function () {
      this.$router.push({ name: '341' })
    },
    handleClick: function (row) {
      this.$router.push({ name: 'partDetails' })
    },
    handleEdit: function (row) {
      this.$router.push({ name: 'partEdit' })
    },
    toggleAdvanced: function () {
      this.advanced = !this.advanced
    },
    handleSizeChange: function (val) {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    handleCurrentChange: function (val) {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    }
  },
  mounted: function () {
    var hcard = document.querySelector('.cardHeight').offsetHeight
    var hfrom = document.querySelector('.fromHeight').offsetHeight
    var hpage = document.querySelector('.pageHeight').offsetHeight
    var hbutton = document.querySelector('.buttonHeight').offsetHeight
    this.htable = (hcard - hfrom - hpage - hbutton - 25) + 'px'
  },
  data () {
    return {
      htable: ' ',
      fit: 'cover',
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'],
      currentPage1: 1,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      tableData: [{
        code: 'FM-0001',
        date: '2019-11-11',
        completion: 80,
        type: '借用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0001',
        date: '2019-11-01',
        completion: 20,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'QYFM-0001',
        date: '2019-11-15',
        completion: 60,
        type: '借用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'FDJ-0001',
        date: '2019-11-15',
        completion: 100,
        type: '借用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'FM-0002',
        date: '2019-11-11',
        completion: 70,
        type: '借用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'FM-0002',
        date: '2019-11-11',
        completion: 70,
        type: '借用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'FM-0002',
        date: '2019-11-11',
        completion: 70,
        type: '借用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }, {
        code: 'GL-0002',
        date: '2019-11-01',
        completion: 90,
        type: '领用出库',
        department: '设备部',
        person: '王珊',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        warehouseManager: '张衡',
        status: '已通过',
        remark: '维修领用'
      }]
    }
  }
}
