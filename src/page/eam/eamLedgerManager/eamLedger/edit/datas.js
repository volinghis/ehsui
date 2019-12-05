import ParamsTable from '../../../components/paramsTable'
import PastInspectors from '../../../components/pastInspectors'
import EamList from '../../../components/eamList'
import userSelector from '@components/org/user-selector'
export default {
  name: 'eamAccountPrintEdit',
  components: {
    ParamsTable,
    PastInspectors,
    EamList,
    userSelector
  },
  data () {
    return {
      dialogTableVisible: false,
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
        ]
      },
      tableData: [
        {
          deviceNum: '2019100001',
          deviceName: '锅炉',
          installLocation: '锅炉专业',
          deviceModel: '6314-2RS',
          purchaseTime: '2016-05-02',
          brand: '西安东恒'
        },
        {
          deviceNum: '2019100001',
          deviceName: '锅炉',
          installLocation: '锅炉专业',
          deviceModel: '6314-2RS',
          purchaseTime: '2016-05-02',
          brand: '西安东恒'
        },
        {
          deviceNum: '2019100001',
          deviceName: '锅炉',
          installLocation: '锅炉专业',
          deviceModel: '6314-2RS',
          purchaseTime: '2016-05-02',
          brand: '西安东恒'
        },
        {
          deviceNum: '2019100001',
          deviceName: '锅炉',
          installLocation: '锅炉专业',
          deviceModel: '6314-2RS',
          purchaseTime: '2016-05-02',
          brand: '西安东恒'
        }
      ],
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  mounted: function () {
  },
  methods: {
    handleAvatarSuccess: function (res, file) {

    },
    submitForm: function (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
    resetForm: function (formName) {
      this.$refs['form'].resetFields()
    },
    handleRemove (file, fileList) {
    },
    // 删除
    handleDeleteClick () {

    },
    // 编辑
    handleEditClick () {

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
    handlechange (res) {
      console.log(res)
    }
  }
}
