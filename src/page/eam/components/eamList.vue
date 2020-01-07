<template>
  <div class="table-wrapper">
    <div>
      <el-autocomplete class="inline-input"
                       v-model="queryParam.query"
                       :size="GlobalCss.buttonSize"
                       style="margin-bottom:10px;width:40%;"
                       placeholder="可查询设备名称设备编号">
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search">搜索</el-button>
      </el-autocomplete>
    </div>
    <div class="table-list">
      <el-table :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                border
                :size="GlobalCss.controlSize">
        <el-table-column type="selection"
                         width="50"
                         align="center"> </el-table-column>
        <el-table-column prop="deviceNum"
                         label="设备编号"
                         align="center"></el-table-column>
        <el-table-column prop="deviceName"
                         label="设备名称"
                         align="center"></el-table-column>
        <el-table-column prop="installLocation"
                         label="类型"
                         align="center"></el-table-column>
        <el-table-column prop="deviceModel"
                         label="型号"
                         align="center"></el-table-column>
        <el-table-column prop="supplier"
                         label="品牌"
                         align="center"></el-table-column>
        <el-table-column prop="installLocation"
                         label="位置"
                         align="center"></el-table-column>
      </el-table>
    </div>
    <div class="pagination"
         style="text-align:right;margin-top:12px;">
      <el-pagination background
                     layout="total, prev, pager, next"
                     :current-page="queryParam.page"
                     :page-size="queryParam.size"
                     :total="100"
                     @current-change="handlePageChange">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      queryParam: {
        size: 10,
        page: 1,
        query: ''
      },
      form: {},
      tableData: []
    }
  },
  props: {
    deviceKey: String
  },
  mounted: function () {
    this.initTable()
  },
  methods: {
    initTable () {
      this.queryParam['deviceKey'] = this.deviceKey
      this.$axios.post(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/getLeftEamLedgerList', this.queryParam).then(res => {
        this.tableData = res.data.dataList
        this.total = res.data.totalCount
      }).catch(error => {
        console.log(error)
      })
    },
    handlePageChange: function () {
    },
    handleEditClick: function () {
    },
    handleSelectionChange (val) {
      this.$emit('handlerSelect', val)
    }
  }
}
</script>
<style lang="scss" scoped>
// 搜索按钮样式
/deep/.el-input-group__append{
  background-color:#409EFF;
  border-color:#409EFF ;
  color: #ffffff;
}
</style>
