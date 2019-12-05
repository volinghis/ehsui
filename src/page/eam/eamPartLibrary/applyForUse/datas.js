import details from './component/details/index.vue'
export default {
  component: {
    'details': details
  },
  methods: {
    handleAdd: function () {
      this.$router.push({ name: '331' })
    },
    handleClick: function (row) {
      this.$router.push({ name: '332' })
    },
    handleEdit: function (row) {
      this.$router.push({ name: '331' })
    },
    handleDelete: function (row) {
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
      dialogTableVisible: false,
      queryParam: {},
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      partData: [
        { title: '申请名称', content: '增压风机冷却油泵领用申请' },
        { title: '领用编号', content: '0107001006012' },
        { title: '申请人', content: '张工' },
        { title: '申请日期', content: '2019-11-20 12:41:50' },
        { title: '申请部门', content: '设备部' },
        { title: '备注', content: '2号机组缺少因此领用设备。' }
      ],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区'
      }],
      tableData: [
        {
          code: '201901110001',
          date: '2019-01-11',
          type: '领用出库',
          department: '设备部',
          person: '张三',
          warehouse: '1号仓库',
          responsible: '王三',
          remark: '维修领用',
          status: '申请中'
        },
        {
          code: '201901110001',
          date: '2019-01-11',
          type: '领用出库',
          department: '检修部',
          person: '李伟',
          warehouse: '1号仓库',
          responsible: '王三',
          remark: '维修领用',
          status: '已完结'
        },
        {
          code: '201901110001',
          date: '2019-01-11',
          type: '电气专业',
          department: '设备部',
          person: '张三',
          warehouse: '1号仓库',
          responsible: '王三',
          remark: '维修领用',
          status: '已完结'
        },
        {
          code: '201901110001',
          date: '2019-01-11',
          type: '借用出库',
          department: '设备部',
          person: '赵武',
          warehouse: '2号仓库',
          responsible: '王三',
          remark: '维修领用',
          status: '申请中'
        },
        {
          code: '201901110001',
          date: '2019-01-11',
          type: '领用出库',
          department: '设备部',
          person: '何晨',
          warehouse: '1号仓库',
          responsible: '王三',
          remark: '维修领用',
          status: '已完结'
        },
        {
          code: '201901110001',
          date: '2019-01-11',
          type: '借用出库',
          department: '设备部',
          person: '张三',
          warehouse: '2号仓库',
          responsible: '王三',
          remark: '维修领用',
          status: '申请中'
        },
        {
          code: '201901110001',
          date: '2019-01-11',
          type: '领用出库',
          department: '设备部',
          person: '张三',
          warehouse: '1号仓库',
          responsible: '王三',
          remark: '维修领用',
          status: '申请中'
        }
      ]
    }
  }
}
