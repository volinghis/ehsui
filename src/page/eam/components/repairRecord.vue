<template>
  <div class="repair-record-container">
    <el-table :data="tableData"
              border
              size="small"
              style="width: 100%">
      <el-table-column type="index"
                       width="50"></el-table-column>
      <el-table-column prop="repairName"
                       label="检修名称">
      </el-table-column>
      <el-table-column prop="repairTeam"
                       label="检修班组">
      </el-table-column>
      <el-table-column prop="repairTime"
                       label="检修开始时间">
      </el-table-column>
      <el-table-column prop="repairNature"
                       label="检修性质">
      </el-table-column>
      <el-table-column prop="founder"
                       label="创建人">
      </el-table-column>
      <el-table-column prop="personLiable"
                       label="责任人">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  props: {
    currentRow: Object
  },
  mounted: function () {
    this.initTable()
  },
  methods: {
    initTable () {
      // 获取关联设备参数
      const { currentRow } = this
      this.Axios.get(this.GlobalVars.globalServiceServlet + '/eam/eamLedger/getRepairRecord').then(res => {
        if (currentRow !== null) {
          console.log(currentRow)
        } else {
          this.tableData = res.data
        }
      })
    }
  }
}
</script>
