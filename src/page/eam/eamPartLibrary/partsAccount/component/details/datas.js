// import ParamsTable from '../../../../components/paramsTable.vue'
import ParamsTable from '../paramsTable/index.vue'
import ModifyRecord from '../modifyRecord/index.vue'
export default {
  // name: 'eamAccountPrintEdit',
  refWidth: 0,
  components: {
    paramsTable: ParamsTable,
    modifyRecord: ModifyRecord
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
      ],
      eamInfos: [
        { title: '备件名称', content: '1号增压风机冷却油泵电机' },
        { title: '备件编码', content: 'SB12457854' },
        { title: '备件型号', content: '1LE0003-0DA32-1AA4 1.1KW*2P*B3' },
        { title: '出厂编号', content: '1LE0003-0DA32-1AA4' },
        { title: '生产厂家', content: 'SIEMENS/西门子' },
        { title: '出厂日期', content: '2018-06-20 12:41:50' },
        { title: '创建人', content: '张工' }
      ]
    }
  },
  mounted: function () {
  },
  methods: {
    handleAvatarSuccess: function (res, file) {

    },
    handlePrint: function () {
    },
    handleBack: function () {
      this.$router.go(-1)
    },
    handleRemove (file, fileList) {
    },
    handlePreview (file) {
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
