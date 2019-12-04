<template>
  <div style="padding:0px 20px;">
    <el-form ref="form"
             :model="form"
             :rules="rules"
             label-position="top"
             label-width="80px">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="item-block">
            <div class="item-title">设备图片</div>
            <el-image style="width: 150px; height: 150px"
                      src="https://i.loli.net/2019/11/07/2STd8zUw6x5hWaM.jpg"
                      fit="fill"></el-image>
          </div>
          <!--检修质量标准-->
          <div class="item-block">
            <div class="item-title">检修质量标准</div>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       multiple
                       :limit="3"
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="mini"
                         plain
                         type="primary"
                         icon="el-icon-upload">上传文件</el-button>
            </el-upload>
          </div>
          <!--设备说明书-->
          <div class="item-block">
            <div class="item-title">设备说明书</div>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       multiple
                       :limit="3"
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="mini"
                         plain
                         type="primary"
                         icon="el-icon-upload">上传文件</el-button>
            </el-upload>
          </div>
          <!--设备操作手册-->
          <div class="item-block">
            <div class="item-title">设备操作手册</div>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       multiple
                       :limit="3"
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="mini"
                         plain
                         type="primary"
                         icon="el-icon-upload">上传文件</el-button>
            </el-upload>
          </div>

          <div class="item-block">
            <div class="item-title">资料完整度</div>
            <el-row>
              <el-card>
                <el-col :span="12">
                  <el-progress type="circle"
                               :percentage="75"
                               :stroke-width="10"></el-progress>
                </el-col>
                <el-col :span="12">
                  <p> 当前设备资料的完整度为75%，请尽快完善资料</p>
                </el-col>
              </el-card>
            </el-row>
          </div>
        </el-col>
        <el-col :span="18">
           <div class="item-block right">
            <div class="item-title">设备基本信息</div>
            <div class="contents">
              <el-row>
                <el-col :span="12"
                        v-for="(item, index) in eamInfos"
                        :key="index">
                  <span class="info-title">{{ item.title }}</span>:&nbsp;<span class="info-content">{{ item.content }}</span>
                </el-col>
             </el-row>
            </div>
          </div>
          <!--设备参数-->
          <div class="item-block right">
            <div class="item-title">设备主要参数</div>
            <el-divider></el-divider>
            <params-table></params-table>
          </div>
          <div class="item-block right">
            <div class="item-title">定期工作标准</div>
            <el-divider></el-divider>
            <el-input type="textarea"
                      :rows="5"
                      maxlength="300"
                      show-word-limit
                      placeholder="请输入定期工作标准"
                      v-model="form.textarea">
            </el-input>
          </div>
          <!--历任点检员-->
          <div class="item-block right">
            <div class="item-title">历任点检员</div>
            <el-divider></el-divider>
            <past-inspectors></past-inspectors>
          </div>
        </el-col>
      </el-row>
      <el-form-item style="text-align: center;">
        <el-button size="small"
                   type="primary"
                   @click="handleBack">返回</el-button>
        <el-button size="small"
                   @click="handlePrint">打印</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import ParamsTable from '../../components/paramsTable'
import PastInspectors from '../../components/pastInspectors'
export default {
  name: 'eamAccountPrintEdit',
  refWidth: 0,
  components: {
    paramsTable: ParamsTable,
    pastInspectors: PastInspectors
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
        { title: '设备名称', content: '1号增压风机冷却油泵电机' },
        { title: '设备编码', content: 'SB12457854' },
        { title: '设备型号', content: '1LE0003-0DA32-1AA4 1.1KW*2P*B3' },
        { title: '出厂编号', content: '1LE0003-0DA32-1AA4' },
        { title: '生产厂家', content: 'SIEMENS/西门子' },
        { title: '出厂日期', content: '2018-06-20 12:41:50' },
        { title: '投运日期', content: '2019-01-20 13:41:50' },
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
</script>
<style lang="scss" scoped>
.item-block {
  .item-title {
    font-size: 15px;
    font-weight: 700;
  }
}
.el-form--label-top .el-form-item__label {
  padding: 0 0 0px;
}
.el-form-item {
  margin-bottom: 10px;
}
.contents{
  line-height: 30px;
}
.el-divider--horizontal{
  margin:6px 0;
  background-color: #2db7f5;
}
</style>
