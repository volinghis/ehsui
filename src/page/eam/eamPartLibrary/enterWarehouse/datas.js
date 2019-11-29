export default {
  methods: {
    handleAdd: function () {
      this.$router.push({ name: '321' })
    },
    handleClick: function (row) {
      this.$router.push({ name: '321' })
    },
    handleDelete: function (row) {
      confirm('确定删除此数据吗？')
    },
    exportExcel: function (row) {
      this.$message({
        message: '导出数据中，请稍等',
        type: 'success'
      })
    },
    handleEdit: function (row) {
      this.$router.push({ name: '321' })
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
        date: '2019-11-19',
        completion: 80,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'
      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '2号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '3号仓库',
        unit: '张三',
        status: '申请完成',
        remark: '常用设备入库'

      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请完成',
        remark: '常用设备入库'

      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请完成',
        remark: '常用设备入库'

      }, {
        code: 'GL-0001',
        date: '2019-01-11',
        completion: 20,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'QYFM-0001',
        date: '2019-10-11',
        completion: 60,
        type: '盘盈入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '2号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'FDJ-0001',
        date: '2019-11-11',
        completion: 100,
        type: '普通入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '2号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'FM-0002',
        date: '2019-11-19',
        completion: 70,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '3号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'FM-0002',
        date: '2019-11-19',
        completion: 70,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'FM-0002',
        date: '2019-11-19',
        completion: 70,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }, {
        code: 'GL-0002',
        date: '2019-01-11',
        completion: 90,
        type: '采购入库',
        model: '西安余辉',
        norm: '李四',
        brand: '上海市普陀牌',
        warehouse: '1号仓库',
        unit: '张三',
        status: '申请中',
        remark: '常用设备入库'

      }]
    }
  }
}
