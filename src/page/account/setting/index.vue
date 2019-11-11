<template>
    <div>
      <el-tabs :tab-position="tabPosition" style="height: 500px;text-align: left;">
          <el-tab-pane label="基本设置">
            <el-form ref="form" :model="form" label-width="80px" :rules="rules" ><p>
              <span style="font-size: large;">个人资料</span></p>
              <el-row>
                <el-col :span="10">
                  <el-form-item label="昵称" prop="name">
                    <el-input v-model="form.name" prefix-icon="el-icon-user"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="form.email" prefix-icon="el-icon-message"></el-input>
                  </el-form-item>
                  <el-form-item label="性别" prop="gender">
                    <el-radio-group v-model="form.gender">
                      <el-radio label="男"></el-radio>
                      <el-radio label="女"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="居住地" prop="desc">
                    <el-cascader
                      placeholder="试试搜索：西安"
                      :options="options"
                      value="changan"
                      filterable>
                    </el-cascader>
                  </el-form-item>
                  <el-form-item label="联系电话" prop="telephone">
                    <el-input v-model="form.telephone" prefix-icon="el-icon-phone-outline"></el-input>
                  </el-form-item>
                  <el-form-item label="个人简介" prop="desc">
                    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 2}" v-model="form.desc"  maxlength="100" show-word-limit> </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">更新基本信息</el-button>
                  </el-form-item>
                </el-col>
                <el-col :span="14" style="text-align:center;">
                  <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-col>
              </el-row>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="安全设置"><p>
            <span style="font-size: large;">安全设置</span></p><p>
            <span style="font-size: small;">账户密码</span></p><p>
            <span style="font-size: small;">当前密码强度：中</span>
            <!-- <a href="#"><span style="float: right; color:#409EFF"  @click="dialogVisible = true">修改</span></a></p> -->
            <el-button type="text" style="float: right;" @click="dialogFormVisible = true"><span style=" color:#409EFF">修改</span></el-button></p>
              <el-dialog title="修改密码" :visible.sync="dialogFormVisible" formLabelWidth="80">
               <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="medium">
                  <el-form-item label="新 密 码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                  </el-form-item>
                  <!-- <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item> -->
                </el-form>
                <div slot="footer" class="dialog-footer" size="medium">
                  <el-button @click="submitForm('ruleForm')" size="medium">保存</el-button>
                  <el-button type="primary" @click="resetForm('ruleForm')" size="medium">取消</el-button>
                </div>
              </el-dialog>
            <el-divider></el-divider>
          </el-tab-pane>
          <el-tab-pane label="个人成长信息">
            <span style="font-size: large;">个人成长信息</span>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      tabPosition: 'left',
      imageUrl: '',
      dialogTableVisible: false,
      dialogFormVisible: false,
      ruleForm: {
        pass: '',
        checkPass: ''
      },
      form1: {
        name: '',
        region: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      options: [{
        value: 'shannxi',
        label: '陕西',
        children: [{
          value: 'xiann',
          label: '西安',
          children: [{
            value: 'changan',
            label: '长安区'
          }, {
            value: 'yanta',
            label: '雁塔区'
          }, {
            value: 'beilin',
            label: '碑林区'
          }, {
            value: 'baqiao',
            label: '灞桥区'
          }]
        }]
      }],
      form: {
        name: '',
        email: '',
        telephone: '',
        gender: '男',
        region: '',
        delivery: false,
        type: [],
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '11位手机号码', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择居住地', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写个人简介', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    OnUpdate () {

    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    handleChange (value) {
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false
          alert('submit!')
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.dialogFormVisible = false
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
