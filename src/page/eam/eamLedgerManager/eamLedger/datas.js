import RepairRecord from '../../components/repairRecord'
export default {
  components: {
    RepairRecord
  },
  data () {
    return {
      queryParam: {},
      form: {},
      state: '',
      restaurants: [],
      activeName: 'first',
      currentPage: 1,
      pageSize: 3,
      total: 0,
      tableData: []
    }
  },
  mounted: function () {
    this.initTable()
    this.loadAll()
  },
  methods: {
    initTable () {
      this.Axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/getList').then(res => {
        this.tableData = res.data
        this.total = res.data.length
      })
    },
    customColorMethod: function (percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    handleViewClick: function (scope) {
      // 详情查看
      this.$router.push({ name: '23', params: { flag: 'view' } })
    },
    handleEditClick: function (scope) {
      this.$router.push({ name: '22', params: { flag: 'edit' } })
    },
    handleClick: function (tab, event) {
    },
    handleSizeChange: function () {
    },
    handleCurrentChange: function (val) {
      console.log(`当前页: ${val}`)
    },
    handleAdd () {
      this.$router.push({ name: '22', params: { flag: 'edit' } })
    },
    handleExport () {
      this.$message({
        showClose: true,
        message: '准备导出',
        type: 'warning'
      })
    },
    handleDelete () {
      this.$message({
        showClose: true,
        message: '继续删除',
        type: 'warning'
      })
    },
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    },
    loadAll () {
      this.Axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/getSuggestions').then(res => {
        this.restaurants = res.data
        console.log(res.data)
      })
    }
  }
}
