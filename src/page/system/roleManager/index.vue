<template>
  <div class="role-table">
    <el-card>
      <div class="search-wrapper">
        <el-form ref="form"
                 :model="form"
                 :inline="true">
          <el-form-item>
            <el-input type="text"
                      :size="GlobalCss.buttonSize"
                      v-model="form.searchKey"
                      placeholder="请输入角色编码或名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       :size="GlobalCss.buttonSize">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="operation">
        <el-button type="primary"
                   icon="fa fa-plus pull-left"
                   @click="dialogFormVisible = true"
                   :size="GlobalCss.buttonSize">添加</el-button>
        <el-button type="primary"
                   icon="fa fa-download pull-left"
                   :size="GlobalCss.buttonSize">导出</el-button>
      </div>
      <div class="">
        <el-table :data="tableData"
                  border
                  style="width: 100%">
          <el-table-column prop="roleName"
                           label="角色姓名">
          </el-table-column>
          <el-table-column prop="roleCode"
                           label="角色编码">
          </el-table-column>
          <el-table-column prop="remark"
                           label="备注">
          </el-table-column>
          <el-table-column prop="creationTime"
                           label="创建时间">
          </el-table-column>
          <el-table-column prop="updateTime"
                           label="更新时间">
          </el-table-column>
          <el-table-column fixed="right"
                           label="操作"
                           width="160">
            <template slot-scope="scope">
              <el-button @click="handleAuthorize(scope.row)"
                         type="text"
                         :size="GlobalCss.buttonSize">授权</el-button>
              <el-button type="text"
                         :size="GlobalCss.buttonSize">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination @current-change="handleCurrentChange"
                       :current-page.sync="currentPage"
                       :page-size="20"
                       layout="total, prev, pager, next"
                       :total="100">
        </el-pagination>
      </div>
    </el-card>
    <!-- Form -->

    <el-dialog title="角色添加"
               width="30%"
               :visible.sync="dialogFormVisible">
      <el-form :model="role"
               size="small"
               label-width="80px">
        <el-form-item label="角色名称">
          <el-input v-model="role.roleName"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色编码">
          <el-input v-model="role.roleCode"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="role.description"
                    type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false"
                   :size="GlobalCss.buttonSize">取 消</el-button>
        <el-button type="primary"
                   @click="dialogFormVisible = false"
                   :size="GlobalCss.buttonSize">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 0,
      dialogFormVisible: false,
      role: {
        roleName: '',
        roleCode: '',
        description: ''
      },
      form: {
        searchKey: ''
      },
      tableData: [{
        creationTime: '2016-05-02',
        updateTime: '2016-05-02',
        roleName: '测试',
        roleCode: 'dh_test',
        remark: '测试角色'
      }, {
        creationTime: '2016-05-02',
        updateTime: '2016-05-02',
        roleName: '测试',
        roleCode: 'dh_test',
        remark: '测试角色'
      }, {
        creationTime: '2016-05-02',
        updateTime: '2016-05-02',
        roleName: '测试',
        roleCode: 'dh_test',
        remark: '测试角色'
      }, {
        creationTime: '2016-05-02',
        updateTime: '2016-05-02',
        roleName: '测试',
        roleCode: 'dh_test',
        remark: '测试角色'
      }]
    }
  },
  methods: {
    handleAuthorize (row) {
      console.log(row)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style lang="sass" scoped>
@import './styles.scss'
</style>
