<template>
  <div>
    <span>关联子设备</span>
    <el-button type="primary"
               icon="fa fa-plus pull-left"
               @click="dialogTableVisible = true"
               style="float:right;"
               :size="GlobalCss.buttonSize">选择设备</el-button>
    <el-button type="danger"
               icon="el-icon-delete"
               style="float:right;margin-right:10px;"
               @click="handleDeleteClick"
               :size="GlobalCss.buttonSize">移除</el-button>
    <el-table :data="tableData"
              @selection-change="handleSelectionChange"
              size="small"
              style="width: 100%">
      <el-table-column type="selection"
                       width="55">
      </el-table-column>
      <el-table-column prop="deviceNum"
                       label="设备编号"></el-table-column>
      <el-table-column prop="deviceName"
                       label="设备名称"></el-table-column>
      <el-table-column prop="installLocation"
                       label="类型"></el-table-column>
      <el-table-column prop="deviceModel"
                       label="型号"></el-table-column>
      <el-table-column prop="brand"
                       label="品牌"></el-table-column>
    </el-table>

    <!--设备选择弹窗-->
    <el-dialog title="设备台账"
               :visible.sync="dialogTableVisible">
      <eam-list @handlerSelect="handlerSelect"
                :deviceKey="deviceKey"></eam-list>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogTableVisible = false"
                   :size="GlobalCss.buttonSize">取 消</el-button>
        <el-button type="primary"
                   @click="handlerConfirm"
                   :size="GlobalCss.buttonSize">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import EamList from './eamList'
export default {
  data () {
    return {
      dialogTableVisible: false,
      tableData: [],
      selectDatas: [],
      checkedDatas: []
    }
  },
  props: {
    deviceKey: String
  },
  components: {
    EamList
  },
  watch: {
    deviceKey: function (val) {
      this.getRelatedDeviceByKey(val)
    },
    selectDatas: {
      handler (newValue) {
        this.tableData.push.apply(this.tableData, newValue)
      },
      deep: true
    }
  },
  methods: {
    // 移除
    handleDeleteClick () {
      console.log(this.checkedDatas)
      const checked = this.checkedDatas
      if (!checked.length > 0) {
        this.$message({
          message: '请选择要移除的子设备',
          type: 'warning'
        })
      } else {
        let keys = this.handlerArrayDatas(checked)
        this.handlerRemove(keys)
      }
    },
    handlerRemove (keys) {
      this.$axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/removeEamLedger', { params: { deviceKey: this.deviceKey, keys: keys } }).then(res => {
        if (res.data.resultType === 'ok') {
          this.$message({
            message: res.data.message,
            type: 'success'
          })
          this.getRelatedDeviceByKey(this.deviceKey)
        } else {
          this.$message({
            message: res.data.message,
            type: 'info'
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    getRelatedDeviceByKey () {
      this.$axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/getChildDevByKey', { params: { key: this.deviceKey } }).then(res => {
        this.tableData = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    handlerConfirm (val) {
      const datas = this.selectDatas
      this.dialogTableVisible = false
      this.$emit('getRelatedKeys', this.handlerArrayDatas(datas))
    },
    handlerSelect (data) { // 传递给子组件的方法
      this.selectDatas = data
    },
    handleSelectionChange (val) {
      this.checkedDatas = val
    },
    handlerArrayDatas (datas) {
      let keys = ''
      for (let i = 0; i < datas.length; i++) {
        keys += datas[i].key + ','
      }
      if (keys.length > 0) {
        keys = keys.substr(0, keys.length - 1)
      }
      return keys
    }

  }
}
</script>
