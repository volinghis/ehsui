<template>
  <el-table :data="tableData"
            size="medium"
            style="width: 100%">
    <el-table-column prop="name"
                     label="设备参数">
    </el-table-column>
    <el-table-column prop="value"
                     label="参数值">
    </el-table-column>
    <el-table-column prop="city"
                     label="备注">
    </el-table-column>
    <template v-if="show">
    <el-table-column fixed="right"
                     label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)"
                   size="small" type="primary" icon="el-icon-edit">编辑</el-button>
        <el-button size="small"  type="danger" icon="el-icon-delete">删除</el-button>
      </template>
    </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleClick (row) {
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
        value: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        name: '王小龙',
        value: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        name: '王小鼠',
        value: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }]
    }
  }
}
</script>
