<template>
  <div>
    <el-button @click="innerDrawer = true"
               type="primary"
               :size="GlobalCss.controlSize"
               style="margin-left:15px;margin-bottom:5px;">授 权</el-button>
    <div class="refRoleTable"
         style="margin:0px 15px;">
      <el-table :data="roleTableData"
                :size="GlobalCss.controlSize"
                border>
        <el-table-column prop="dataCode"
                         align="center"
                         label="角色编码">
        </el-table-column>
        <el-table-column prop="name"
                         align="center"
                         label="角色名称">
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
    </div>
    <el-drawer title="角色授权"
               :append-to-body="true"
               :before-close="handleCloseDrawer"
               :visible.sync="innerDrawer">
               <div>
    <!-- Form -->
    <div style="margin:0px 10px">
    <div class="search-wrapper" >
      <el-form ref="searchForm"
               :model="form"
               :inline="true">
        <el-form-item>
          <el-input type="text"
                    :size="GlobalCss.buttonSize"
                    v-model="form.query"
                    placeholder="请输入角色编码或名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     :size="GlobalCss.buttonSize">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
      <div class="table-container">
        <el-table :data="tableData"
                  border
                  v-loading="loading"
                  @selection-change="handleSelectionChange"
                  style="width: 100%">
          <el-table-column type="selection"
                          width="55">
          </el-table-column>
          <el-table-column prop="name"
                          align="center"
                          label="角色姓名">
          </el-table-column>
          <el-table-column prop="dataCode"
                          align="center"
                          label="角色编码">
          </el-table-column>
          <el-table-column prop="remark"
                          align="center"
                          label="备注">
          </el-table-column>
          <el-table-column prop="creationTime"
                          align="center"
                          label="创建时间">
          </el-table-column>
        </el-table>
        <el-pagination @current-change="handleCurrentChange"
                      :current-page.sync="form.page"
                      :page-size="form.size"
                      layout="total, prev, pager, next"
                      :total="totalCount">
        </el-pagination>
      </div>
    </div>
    </div>
    </el-drawer>
  </div>
</template>
<script>
import datas from './datas.js'
export default datas
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
