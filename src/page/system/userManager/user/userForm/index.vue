<template>
  <el-form ref="form"
           :model="form"
           :rules="rules"
           inline="inline"
           label-width="100"
           label-position="left"
           :size="GlobalCss.controlSize">
    <el-row>
      <el-divider content-position="left"><span style="color:#409EFF">基础信息</span></el-divider>
      <el-col :span="12"
              style="text-align: center;">
        <el-form-item label="登陆账号："
                      prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="员工姓名："
                      prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码："
                      prop="mobilePhone">
          <el-input v-model="form.mobilePhone"></el-input>
        </el-form-item>
        <el-form-item label="所属部门：" prop="department">
          <el-input v-model="form.department"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12" style="text-align: center;">
        <el-form-item label="登陆密码："
                      prop="passWord">
          <el-input v-model="form.passWord"></el-input>
        </el-form-item>
        <el-form-item label="员工性别："
                      prop="gender">
          <el-input v-model="form.gender"></el-input>
        </el-form-item>
        <el-form-item label="邮箱地址："
                      prop="email">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="当前职务："
                      prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-divider content-position="left"><span style="color:#409EFF">辅助信息</span></el-divider>
      <el-col :span="12"
              style="text-align: center;">
        <el-form-item label="员工工号："
                      prop="jobNum">
          <el-input v-model="form.jobNum"></el-input>
        </el-form-item>
        <el-form-item label="员工学历："
                      prop="education">
          <el-input v-model="form.education"></el-input>
        </el-form-item>
        <el-form-item label="毕业院校："
                      prop="graduatedSchool">
          <el-input v-model="form.graduatedSchool"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12"
              style="text-align: center;">
        <el-form-item label="员工籍贯："
                      prop="homeTown">
          <el-input v-model="form.homeTown"></el-input>
        </el-form-item>
        <el-form-item label="员工专业："
                      prop="profession">
          <el-input v-model="form.profession"></el-input>
        </el-form-item>
        <el-form-item label="毕业时间："
                      prop="graduatedDate">
          <el-input v-model="form.graduatedDate"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <!-- <el-row>
                <el-form-item label="备注：" prop="remark" style="width:100%;">
                    <el-input type="textarea" v-model="form.remark" placeholder="请输入内容" maxlength="300" show-word-limit style="width:100%;"></el-input>
                </el-form-item>
            </el-row> -->
  </el-form>
</template>
<script>
import datas from './datas.js'
export default datas
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
