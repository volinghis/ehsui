<template>
  <div class="step-container">
    <el-button type="primary"
               size="small"
               icon="el-icon-plus"
               @click="dialogTableVisible = true">选择设备</el-button>
    <template>
      <el-table :data="tableData"
                border
                ref="multipleTable"
                class="tableHeight"
                :size="GlobalCss.controlSize">
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="code"
                         label="设备编号"> </el-table-column>
        <el-table-column prop="name"
                         label="设备名称"> </el-table-column>
        <el-table-column prop="type"
                         label="设备类型"> </el-table-column>
      </el-table>
    </template>
    <div style="text-align:center;">
      <el-button @click="prevStep"
                 style="margin:10px;">上一步</el-button>
      <el-button type="primary"
                 @click="nextStep()"
                 style="margin:10px;">下一步</el-button>
    </div>
    <!--设备选择弹窗-->
    <el-dialog title="设备台账"
               :visible.sync="dialogTableVisible">
      <eam-list></eam-list>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import EamList from '../../../common/eamList'
export default {
  name: 'partStepTwo',
  components: {
    EamList
  },
  methods: {
    nextStep () {
      this.$emit('nextStep')
    },
    prevStep () {
      this.$emit('prevStep')
    }
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
        remark: ''
      },
      tableData: [
        {
          code: 'FM-0001',
          name: '阀门',
          type: '阀门'
        },
        {
          code: 'FM-0001',
          name: '阀门',
          type: '阀门'
        },
        {
          code: 'FM-0001',
          name: '阀门',
          type: '阀门'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.stepFormText {
  margin-bottom: 24px;

  .ant-form-item-label,
  .ant-form-item-control {
    line-height: 22px;
  }
}
/deep/.el-dialog__footer {
    text-align: center;
}
</style>
