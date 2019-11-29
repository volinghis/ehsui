import paramsTable from '../paramsTable/index.vue'
import modifyRecord from '../modifyRecord/index.vue'
export default {
  name: 'eamAccountPrintEdit',
  components: {
    'paramsTable': paramsTable,
    'modifyRecord': modifyRecord
  },
  data () {
    return {
      form: {
        deviceName: '',
        deviceNum: '',
        deviceTree: '',
        runDate: '',
        factoryName: '',
        person: '',
        textarea: ''
      },
      rules: {
        deviceName: [
          { required: true, message: '请输入设备名称', trigger: 'blur' }
        ],
        deviceModel: [
          { required: true, message: '请输入设备型号', trigger: 'change' }
        ],
        person: [
          { required: true, message: '请输入创建人', trigger: 'change' }
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
    }
  }
}
