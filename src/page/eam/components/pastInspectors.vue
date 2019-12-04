<template>
  <el-table :data="tableData"
            style="width: 100%">
    <el-table-column prop="name"
                     label="姓名">
    </el-table-column>
    <el-table-column prop="department"
                     label="部门">
    </el-table-column>
    <el-table-column prop="serveTime"
                     label="担任时间"
                     width="180">
    </el-table-column>
    <el-table-column prop="departureTime"
                     label="离任时间"
                     width="180">
    </el-table-column>
    <template v-if="show">
      <el-table-column fixed="right"
                       label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"
                     size="small"
                     type="primary"
                     icon="el-icon-edit">编辑</el-button>
          <el-button size="small"
                     type="danger"
                     icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick: function (row) {
    }
  },
  mounted: function () {
    var _flag = this.$route.params.flag
    if (_flag === 'view') {
      this.show = false
    } else {
      this.show = true
    }
  },
  data () {
    return {
      show: false,
      tableData: [{
        name: '王小虎',
        department: '虎堂',
        serveTime: '2016-05-02',
        departureTime: '2019-05-02'
      }, {
        name: '王小龙',
        department: '龙堂',
        serveTime: '2016-05-02',
        departureTime: '2019-05-02'
      }, {
        name: '王小鼠',
        department: '鼠堂',
        serveTime: '2016-05-02',
        departureTime: '2019-05-02'
      }]
    }
  }
}
</script>
