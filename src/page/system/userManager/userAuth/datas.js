// import role from '../../menuManager/moduls/leftRolesTable.vue'
export default {
  components: {
  },
  props: {
    userKey: String,
    roleTable: Array
  },
  watch: {
    userKey: function (newValue, oldValue) {
      console.log('newUserKey====' + newValue)
      this.userKey = newValue
    },
    roleTable: {
      handler (newValue, oldValue) {
        if (newValue) {
          console.log('tableData====' + newValue)
          this.tableData = newValue
        }
      },
      deep: true
    }
  },
  data () {
    return {
      roleTableData: [],
      drawer: false,
      innerDrawer: false,
      tableData: [],
      totalCount: 0,
      loading: true,
      multipleSelection: [],
      form: {
        query: '',
        page: 1,
        size: 20
      }
    }
  },
  // mounted () {
  //   this.initRoleTable()
  // },
  methods: {
    handleRomoveAuth: function () {

    },
    handleCloseDrawer (done) {
      this.$confirm('还有未保存的工作哦确定关闭吗？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleCurrentChange () {
    },
    // initRoleTable () { // 获取所有待选角色
    //   console.log('userkey============' + this.userKey)
    //   // this.$axios.get(this.GlobalVars.globalServiceServlet + '/auth/orgUser/findAllRolesByUserKey', { params: { userKey: this.userKey } }).then(res => {
    //   //   // this.tableData = res.data
    //   //   this.loading = false
    //   // }).catch(error => {
    //   //   console.log(error)
    //   // })
    // },
    handleSelectionChange (val) {
      this.multipleSelection = val
      this.$emit('handleSelect', val)
    }
  }
}
