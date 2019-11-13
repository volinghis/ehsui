<template>
  <el-tabs v-model="activeName"
           @tab-click="handleClick">
    <el-tab-pane label="流程"
                 name="first">
      <el-table :data="tableData"
                size="mini">
        <el-table-column type="index"
                         :index="indexMethod">
        </el-table-column>
        <el-table-column prop="date"
                         label="日期"> </el-table-column>
        <el-table-column prop="name"
                         label="流转"> </el-table-column>
        <el-table-column prop="status" label="状态"> </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="任务"
                 name="second">任务管理</el-tab-pane>
    <el-tab-pane label="计划"
                 name="third">计划管理</el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [
        {
          date: '2016/05/02',
          name: '王小虎',
          status: '申请中'
        },
        {
          date: '2016/05/04',
          name: '王小虎',
          status: '驳回'
        },
        {
          date: '2016/05/01',
          name: '王小虎',
          status: '完结'
        },
        {
          date: '2016/05/03',
          name: '王小虎',
          status: '申请中'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
