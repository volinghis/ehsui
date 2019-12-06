export default {
  methods: {
    handleAdd: function () {
      this.$router.push({ name: '312' })
    },
    handleDelete: function () {
      this.$message({
        message: '恭喜你，删除成功',
        type: 'success'
      })
    },
    handleClick: function (row) {
      this.$router.push({ name: '311' })
    },
    handleEdit: function (row) {
      this.$router.push({ name: '312' })
    },
    exportExcel: function () {
      this.$message('正在导出，请稍等···')
    },
    handleSizeChange: function (val) {
      this.$message({
        message: '恭喜你，这是一条成功消息111',
        type: 'success'
      })
    },
    handleCurrentChange: function (val) {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    querySearch: function (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter: function (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    getTableData: function () {
      this.Axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamPartsAccount/getList').then(res => {
        this.tableData = res.data
        this.total = res.data.length
      })
    },
    loadAll: function () {
      this.Axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamPartsAccount/getSuggestions').then(res => {
        this.restaurants = res.data
      })
    },
    handleSelect: function (item) {
      console.log(item)
    }
  },
  mounted: function () {
    var hcard = document.querySelector('.cardHeight').offsetHeight
    var hfrom = document.querySelector('.fromHeight').offsetHeight
    var hpage = document.querySelector('.pageHeight').offsetHeight
    var hbutton = document.querySelector('.buttonHeight').offsetHeight
    this.htable = (hcard - hfrom - hpage - hbutton - 25) + 'px'
    this.restaurants = this.loadAll()
    this.getTableData()
    this.loadAll()
  },
  data () {
    return {
      state: '',
      htable: ' ',
      currentPage: 1,
      total: 0,
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
      tableData: []
    }
  }
}
