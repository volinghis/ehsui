let id = 1
export default {
  data () {
    return {
      treeData: [],
      maxexpandId: 999, // 新增节点开始id
      non_maxexpandId: 1, // 新增节点开始id(不更改)
      isLoadingTree: true, // 是否加载节点树
      setTree: this.data // 节点树数据
    }
  },
  mounted () {
    this.initTreeData()
  },
  methods: {
    initTreeData: function () {
      this.$axios.get(this.GlobalVars.globalServiceServlet + '/auth/organization/getAll').then(res => {
        this.treeData = res.data
      })
    },
    handleNodeClick: function (data) {
      if (data.children === undefined) {
        console.log(data.id)
      }
    },
    NodeBlur (n, d) { // 输入框失焦
      if (n.isEdit) {
        this.$axios.post(this.GlobalVars.globalServiceServlet + '/auth/organization/saveOrg', d).then(res => {
          if (res.data.resultType === 'ok') {
            this.$message.success('修改成功')
          }
        })
        this.$set(n, 'isEdit', false)
      }
    },
    addNode (node, data) {
      const newChild = { id: id++, label: '新增节点', children: [], parentId: data.id }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
      // this.$axios.post(this.GlobalVars.globalServiceServlet + '/auth/organization/saveOrg', newChild).then(res => {
      //   if (res.data.resultType === 'ok') {
      //     this.$message.success('添加成功')
      //     this.initTreeData()
      //   }
      // })
      if (!node.expanded) node.expanded = true
      this.$message({
        message: '请修改名称',
        type: 'warning'
      })
    },
    editNode (node, data) {
      if (!node.isEdit) { // 检测isEdit是否存在or是否为false
        this.$set(node, 'isEdit', true)
      }
      this.$nextTick(() => {
        this.$refs['slotTreeInput' + data.id].$refs.input.focus()
      })
    },
    removeNode (node, data) {
      if (data.children && data.children.length !== 0) {
        this.$message.error('此节点有子级，不可删除！')
        return false
      } else {
        // 新增节点可直接删除，已存在的节点要二次确认
        // 删除操作
        let DelFun = () => {
          let _list = node.parent.data.children || node.parent.data// 节点同级数据
          let _index = _list.map((c) => c.id).indexOf(data.id)
          console.log(_index)
          _list.splice(_index, 1)
          this.$message.success('删除成功！')
        }
        // 二次确认
        let ConfirmFun = () => {
          this.$confirm('是否删除此节点？', '提示', {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            DelFun()
          }).catch(() => { })
        }
        // 判断是否是新增节点
        data.id > this.non_maxexpandId ? DelFun() : ConfirmFun()
      }
    }
  }
}
