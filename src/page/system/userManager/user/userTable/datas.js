import userForm from '../userForm/index.vue'
export default {
  components: {
    userForm
  },
  props: {
    organizationKey: String,
    organizationName: String,
    organizationChildren: Number,
    userDatas: Array
  },
  watch: {
    userDatas: {
      handler (newValue, oldValue) {
        if (newValue) {
          this.tableData = newValue
        }
      },
      deep: true
    }
  },
  methods: {
    addUser: function () {
      const node = this.organizationKey
      const nodeName = this.organizationName
      const nodeChild = this.organizationChildren
      console.log('nodeChild===' + nodeChild)
      this.userInfo = true
      if (node === '') {
        this.$message({
          message: '请选择部门',
          type: 'warning'
        })
        return
      } if (nodeChild > 0) {
        this.$message({
          message: '请选择具体部门',
          type: 'warning'
        })
      } else {
        console.log('打开-----')
        this.organKey = node
        this.organName = nodeName
        this.dialogVisible = true
      }
    },
    editUser: function (row) {
      this.dialogVisible = true
      this.editUserForm = row
      this.userInfo = true
    },
    // 当前状态：data,  d:当前数据对象, index:当前序号(数组下标)
    changeState: function (e, row, index) {
      this.$axios.post(this.GlobalVars.globalServiceServlet + '/auth/orgUser/changeState', row).then(res => {
        if (res.data.state === 0) {
          this.$message({
            message: '已经切换到启用状态',
            type: 'success'
          })
        } else {
          this.$message({
            message: '已经切换到停用状态',
            type: 'warning'
          })
        }
        // TODO ：刷新列表数据
      }).catch(() => {
        this.$message.error('切换状态失败')
        let newData = row
        newData.state = newData.state === 0 ? 1 : 0// 恢复 原状态
        this.tableData[index] = newData
      })
    },
    authorizeUser: function () {
      console.log('=========')
    },
    handleInfo: function (row) {
      this.dialogVisible = true
      this.editUserForm = row
      this.userInfo = false
    },
    onSubmit: function () {
      this.$refs.addUserForm.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmit()
        } else {
          return false
        }
      })
    },
    handleSubmit: function () {
      console.log(this.$refs.addUserForm.form)
      this.$axios.post(this.GlobalVars.globalServiceServlet + '/auth/orgUser/saveOrgUser', this.$refs.addUserForm.form).then(res => {
        if (res.data.resultType === 'ok') {
          this.$message({
            message: `用户信息保存成功`,
            type: 'success'
          })
          this.dialogVisible = false
          this.initTable()
        } else {
          this.$message({
            message: res.data.message,
            type: 'info'
          })
          this.dialogVisible = false
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
          this.$refs.addUserForm.$refs.form.resetFields()
          this.initTable()
        })
        .catch(_ => { })
    },
    initTable: function () {
      this.$axios.post(this.GlobalVars.globalServiceServlet + '/auth/orgUser/getAllUser', this.form)
        .then((res) => {
          this.tableData = res.data.dataList
          this.totalCount = res.data.totalCount
        })
    },
    handleCurrentChange (val) { // 页面跳转
      this.form.page = val
      this.initTable()
    },
    handleDelete (row) {
      this.$confirm('此操作将删除该条记录及相关信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.get(this.GlobalVars.globalServiceServlet + '/auth/orgUser/deleteOrgUser', { params: { key: row.key } })
          .then((res) => {
            if (res.data.resultType === 'ok') {
              this.$message({
                message: res.data.message,
                type: 'success'
              })
              this.initTable()
            }
          }).catch((error) => {
            console.log(error)
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  mounted () {
    this.initTable()
  },
  data () {
    return {
      userInfo: '',
      organName: '',
      organKey: '',
      dialogVisible: false,
      tableData: [],
      totalCount: 0,
      editUserForm: {},
      form: {
        query: '',
        page: 1,
        size: 20
      }
    }
  }
}
