import RepairRecord from '../../components/repairRecord'
export default {
  components: {
    RepairRecord
  },
  data () {
    return {
      queryParam: {
        size: 10,
        page: 1,
        query: ''
      },
      form: {},
      restaurants: [],
      activeName: 'first',
      total: 0,
      tableData: [],
      tableId: ''
    }
  },
  mounted: function () {
    this.initTable()
    this.loadAll()
  },
  methods: {
    initTable () {
      this.$axios.post(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/getList', this.queryParam).then(res => {
        this.tableData = res.data.dataList
        this.total = res.data.totalCount
      }).catch(error => {
        console.log(error)
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
    handldbClick: function (row) {
      // 详情查看
      this.$router.push({ name: 'eamLedgerDetail', params: { flag: 'view', data: row } })
    },
    // 编辑
    handleEditClick: function (scope) {
      this.$router.push({ name: 'eamLedgerEdit', params: { flag: 'edit', data: scope } })
    },
    handleClick: function (tab, event) {
    },
    handleSizeChange: function () {
    },
    handleCurrentChange (val) {
      this.tableId = val.id
    },
    handleAdd () {
      this.$router.push({ name: 'eamLedgerEdit', params: { flag: 'add' } })
    },
    handleExport () {
      this.$message({
        showClose: true,
        message: '准备导出',
        type: 'warning'
      })
    },
    handleDelete (row) {
      this.$confirm('此操作将删除相关联设备, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row.key)
        this.$axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/deleteEamLedgerByKey', { params: { key: row.key } }).then(res => {
          if (res.data.resultType === 'ok') {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.initTable()
          } else {
            this.$message({
              type: 'info',
              message: '删除失败!'
            })
          }
        }).catch(error => {
          console.log(error)
        })
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
      // this.$axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/getSuggestions').then(res => {
      //   this.restaurants = res.data
      // })
    }
  }
}
