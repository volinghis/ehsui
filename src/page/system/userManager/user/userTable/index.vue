<template>
  <div>
    <div>
      <div style="float:left;">
        <el-input :size="GlobalCss.controlSize" style="margin:5px 0px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div style="float:right">
        <el-button type="primary" :size="GlobalCss.controlSize" @click="dialogVisible = true">新 增</el-button>
      </div>
    </div>
    <el-table :data="tableData"
              border
              :size="GlobalCss.controlSize"
              style="width: 100%">
      <el-table-column fixed
                       prop="account"
                       label="账号"
                       align="center"
                       width="80">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名"
                       align="center"
                       width="80">
      </el-table-column>
      <el-table-column prop="position"
                       label="职务"
                       align="center"
                       width="100">
      </el-table-column>
      <el-table-column prop="gender"
                       label="性别"
                       align="center"
                       width="70">
      </el-table-column>
      <el-table-column prop="email"
                       label="邮箱"
                       align="center"
                       width="150">
      </el-table-column>
      <el-table-column prop="mobilePhone"
                       label="手机"
                       align="center"
                       width="120">
      </el-table-column>
      <el-table-column prop="enable"
                       label="启用"
                       align="center"
                       width="80">
        <template slot-scope="scope">
          <el-switch v-model="scope.enable"
                     active-color="#13ce66"
                     inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column fixed="right"
                       label="操作"
                       align="center"
                       width="100">
        <template slot>
          <el-button type="text"
                     :size="GlobalCss.controlSize"
                     @click="dialogVisible = true">查看</el-button>
          <el-button type="text"
                     :size="GlobalCss.controlSize"
                     @click="dialogVisible = true">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增员工"
                     :visible.sync="dialogVisible"
                     width="40%"
                     :before-close="handleClose">
            <user-form></user-form>
            <el-divider></el-divider>
            <span slot="footer"
                  class="dialog-footer">
              <el-button @click="dialogVisible = false"
                         :size="GlobalCss.controlSize">取 消</el-button>
              <el-button type="primary"
                         @click="dialogVisible = false"
                         :size="GlobalCss.controlSize"
                         style="margin-left:15px;">提 交</el-button>
            </span>
          </el-dialog>
  </div>
</template>
<script>
import datas from './datas.js'
export default datas
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
