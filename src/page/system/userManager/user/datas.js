import userTree from './userTree/index.vue'
import userTable from './userTable/index.vue'
export default {
  components: {
    userTree,
    userTable
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  data () {
    return {
      currentOrgKey: '',
      currentOrgName: '',
      userTableData: [],
      organizationKey: '',
      organizationName: '',
      organizationChildren: 0,
      defaultExpandKeys: [],
      filterText: '',
      treeData: [],
      treeProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    this.initTreeData()
    this.findOrgsByParentKey()
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    // getOrg: function (currentOrgKey, currentOrgName) {
    //   this.organizationKey = currentOrgKey
    //   this.organizationName = currentOrgName
    // },
    // userData: function (data) {
    //   this.userTableData = data
    // },
    initTreeData: function () {
      this.$axios.get(this.GlobalVars.globalServiceServlet + '/auth/orgManager/getAllForTree').then(res => {
        this.treeData = res.data
        this.defaultExpandKeys = [this.treeData[0].id]
      })
    },
    handleNodeClick: function (data) {
      console.log(data.children)
      this.organizationKey = data.id
      this.organizationName = data.label
      if (data.children !== null) {
        this.organizationChildren = data.children.length
      }
      this.findOrgsByParentKey(data.id)
      this.nodeParentKey = data.id
    },
    findOrgsByParentKey: function (key) { // 查询组织下所有人员
      this.$axios.get(this.GlobalVars.globalServiceServlet + '/auth/orgUser/findUserByOrgKey', { params: { orgKey: key } }).then(res => {
        this.userTableData = Object.keys(res.data)
        console.log('111===' + this.userTableData)
        console.log('222===' + res.data.totalCount)
        this.totalCount = res.data.totalCount
      }).catch(() => {
        this.$message.error('查询出错，请刷新重试！')
      })
    }
  }
}
