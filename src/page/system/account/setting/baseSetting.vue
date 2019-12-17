<template>
  <div>
    <el-form ref="form"
             :model="form"
             label-width="80px"
             :rules="rules">
      <p>
        <span style="font-size: large;">个人资料</span></p>
      <el-row>
        <el-col :span="10">
          <el-form-item label="昵称"
                        prop="name">
            <el-input v-model="form.name"
                      prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="邮箱"
                        prop="email">
            <el-input v-model="form.email"
                      prefix-icon="el-icon-message"></el-input>
          </el-form-item>
          <el-form-item label="性别"
                        prop="gender">
            <el-radio-group v-model="form.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="居住地"
                        prop="desc">
            <el-cascader placeholder="试试搜索：西安"
                         :options="options"
                         value="changan"
                         filterable>
            </el-cascader>
          </el-form-item>
          <el-form-item label="联系电话"
                        prop="telephone">
            <el-input v-model="form.telephone"
                      prefix-icon="el-icon-phone-outline"></el-input>
          </el-form-item>
          <el-form-item label="个人简介"
                        prop="desc">
            <el-input type="textarea"
                      :autosize="{ minRows: 2, maxRows: 2}"
                      v-model="form.desc"
                      maxlength="100"
                      show-word-limit> </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="onSubmit('form')">更新基本信息</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="14"
                style="text-align:center;">
          <el-upload class="avatar-uploader"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :show-file-list="false"
                     :on-success="handleAvatarSuccess"
                     :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl"
                 :src="imageUrl"
                 class="avatar">
            <i v-else
               class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
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
