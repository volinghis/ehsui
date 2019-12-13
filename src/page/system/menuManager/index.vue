<template>
  <div>

    <el-row :gutter="10">
      <el-col :span="6">
        <el-card>
          <el-tree :data="treeData"
                   ref="tree"
                   :props="defaultProps"
                   default-expand-all
                   highlight-current
                   @node-click="handleNodeClick"></el-tree>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <div class="container">
            <div class="operation">
              <el-button type="primary"
                         :size="GlobalCss.buttonSize"
                         @click="handleAuthToMenu">授权</el-button>
            </div>
            <div class="refRoleTable">
              <template>
                <el-table :data="tableData"
                          size="small"
                          border
                          style="width: 100%">
                  <el-table-column prop="name"
                                   align="center"
                                   label="角色名称">
                  </el-table-column>
                  <el-table-column prop="dataCode"
                                   align="center"
                                   label="角色编码">
                  </el-table-column>
                  <el-table-column align="center"
                                   label="操作">
                    <template slot-scope="scope">
                      <el-button @click="handleRomoveAuth(scope.row)"
                                 type="warning"
                                 :size="GlobalCss.buttonSize">移除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </div>
            <!--授权弹框-->
            <el-dialog title="角色授权"
                       :visible.sync="dialogTableVisible">
              <left-roles-table :currentMenuKey="currentMenuKey"
                                @handleSelect="handleSelect" />
              <div slot="footer"
                   class="dialog-footer">
                <el-button @click="dialogTableVisible = false"
                           :size="GlobalCss.buttonSize">取 消</el-button>
                <el-button type="primary"
                           @click="handleSubmit"
                           :size="GlobalCss.buttonSize">确 定</el-button>
              </div>
            </el-dialog>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LeftRolesTable from './moduls/leftRolesTable'
export default {
  components: {
    LeftRolesTable
  },
  data () {
    return {
      treeData: [],
      tableData: [],
      currentMenuKey: '',
      selectRoles: [],
      dialogTableVisible: false,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    this.initTree()
  },
  methods: {
    initTree () {
      this.$axios.get(this.GlobalVars.globalServiceServlet + '/auth/menu/menuDatas').then(res => {
        this.treeData = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    handleNodeClick (data) {
      this.currentMenuKey = data.key
      this.findRolesByMenu(data.key)
    },
    findRolesByMenu (key) { // 查询菜单所有的角色权限
      this.$axios.get(this.GlobalVars.globalServiceServlet + '/auth/menu/findMenuRoles', { params: { menuKey: key } }).then(res => {
        this.tableData = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    handleRomoveAuth (row) {
      this.$confirm('是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var roleList = []
        roleList.push(row)
        const params = {
          menuKey: this.currentMenuKey,
          roleList: roleList
        }
        console.log(params)
        this.$axios.post(this.GlobalVars.globalServiceServlet + 'auth/menu/deleteMenuRole', params)
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
    },
    handleAuthToMenu () {
      const node = this.$refs.tree.getCurrentNode()
      if (node === null) {
        this.$message({
          message: '请选择菜单',
          type: 'warning'
        })
      } else {
        this.dialogTableVisible = true
      }
    },
    handleSubmit () {
      const roles = this.selectRoles
      const key = this.currentMenuKey
      if (this.selectRoles.length <= 0) {
        this.$message({
          message: '请选择角色',
          type: 'warning'
        })
      } else {
        this.$axios.post(this.GlobalVars.globalServiceServlet + '/auth/menu/saveMenuRole', { menuKey: key, roleList: roles }).then(res => {
          if (res.data.resultType === 'ok') {
            this.$message({
              message: res.data.message,
              type: 'success'
            })
            this.findRolesByMenu(key)
            this.dialogTableVisible = false
          } else {
            alert('失败')
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    handleSelect (data) {
      this.selectRoles = data
      console.log(this.selectRoles)
    }

  }
}
</script>
<style lang="scss" scoped>
.operation {
  margin-bottom: 10px;
}
</style>
