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
      tableData: [{
        repairTime: '2016-05-02',
        repairName: '2016第一次检修',
        repairTeam: '热控一班',
        repairNature: 'A级',
        founder: '张三',
        personLiable: '王小虎'
      }, {
        repairTime: '2016-05-02',
        repairName: '2016第一次检修',
        repairTeam: '热控一班',
        repairNature: 'A级',
        founder: '张三',
        personLiable: '王小虎'
      }, {
        repairTime: '2016-05-02',
        repairName: '2016第一次检修',
        repairTeam: '热控一班',
        repairNature: 'A级',
        founder: '张三',
        personLiable: '王小虎'
      }, {
        repairTime: '2016-05-02',
        repairName: '2016第一次检修',
        repairTeam: '热控一班',
        repairNature: 'A级',
        founder: '张三',
        personLiable: '王小虎'
      }]
    }
  }
}
</script>
