import paramsTable from '../paramsTable/index.vue'
export default {
  components: {
    paramsTable
  },
  mounted () {
    this.sessionUser = JSON.parse(sessionStorage.getItem(this.GlobalVars.userToken))
    this.person = this.sessionUser.username
  },
  data () {
    return {
      sessionUser: {},
      person: '',
      imageUrl: '',
      form: {
        deviceName: '',
        deviceCode: '',
        deviceModel: '',
        materialCode: '',
        materialType: '',
        factoryName: '',
        leaveCode: '',
        leaveDate: '',
        person: ''
      },
      rules: {
        deviceName: [
          { required: true, message: '请输入设备名称', trigger: 'blur' }
        ],
        deviceModel: [
          { required: true, message: '请输入设备型号', trigger: 'blur' }
        ],
        materialCode: [
          { required: true, message: '请输入物资编码', trigger: 'blur' }
        ],
        materialType: [
          { required: true, message: '请输入物资类别', trigger: 'blur' }
        ]
      },
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  methods: {
    handleAvatarSuccess: function (res, file) {
      console.log(file)
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    submitForm: function (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.Axios.post(this.GlobalVars.globalServiceServlet + '/eam/eamPartsAccount/getList').then(res => {
          //   console.info(this.formInline)
          // })
          console.info(this.form)
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm: function (formName) {
      this.$refs['form'].resetFields()
    },
    handleRemove: function (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview: function (file) {
      console.log(file)
    },
    handleExceed: function (files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove: function (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    beforeAvatarUpload: function (file) {
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
