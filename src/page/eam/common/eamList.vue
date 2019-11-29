<template>
  <div class="table-wrapper">
    <div>
      <el-form :inline="true"
               label-width="80px">
        <el-form-item label="设备编号:">
          <el-input v-model="queryParam.deviceNum"
                    size="small" />
        </el-form-item>
        <el-form-item label="设备名称:">
          <el-input v-model="queryParam.deviceNum"
                    size="small" />
        </el-form-item>
        <el-button type="primary"
                   size="small"
                   @click="$refs.table.refresh(true)"
                   icon="el-icon-search">查询</el-button>
        <el-button size="small"
                   @click="() => (queryParam = {})">重置</el-button>
      </el-form>
    </div>
    <div class="table-list">
      <el-table :data="tableData"
                style="width: 100%"
                border
                :size="GlobalCss.controlSize">
        <!-- <el-table-column type="index"
                           width="50"></el-table-column> -->
        <el-table-column type="selection"
                         width="50"> </el-table-column>
        <el-table-column prop="deviceNum"
                         label="设备编号"></el-table-column>
        <el-table-column prop="deviceName"
                         label="设备名称"></el-table-column>
        <el-table-column prop="installLocation"
                         label="类型"></el-table-column>
        <el-table-column prop="deviceModel"
                         label="型号"></el-table-column>
        <el-table-column prop="brand"
                         width="100"
                         label="品牌"></el-table-column>
        <el-table-column align="center"
                         width="160"
                         label="操作">
          <template slot-scope="scope">
            <el-button @click="handleViewClick(scope.row)"
                       type="primary"
                       size="mini">查看</el-button>
            <el-button type="warning"
                       @click="handleEditClick(scope.row)"
                       size="mini">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination"
         style="text-align:right;margin-top:12px;">
      <el-pagination background
                     layout="total, prev, pager, next"
                     :current-page="1"
                     :page-size="10"
                     :total="100"
                     @current-change="handlePageChange"></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      queryParam: {},
      form: {},
      tableData: [
        {
          deviceNum: '2019100001',
          deviceName: '锅炉',
          installLocation: '锅炉专业',
          deviceModel: '6314-2RS',
          purchaseTime: '2016-05-02',
          brand: '西安东恒'
        },
        {
          deviceNum: '2019100001',
          deviceName: '锅炉',
          installLocation: '锅炉专业',
          deviceModel: '6314-2RS',
          purchaseTime: '2016-05-02',
          brand: '西安东恒'
        },
        {
          deviceNum: '2019100001',
          deviceName: '锅炉',
          installLocation: '锅炉专业',
          deviceModel: '6314-2RS',
          purchaseTime: '2016-05-02',
          brand: '西安东恒'
        },
        {
          deviceNum: '2019100001',
          deviceName: '锅炉',
          installLocation: '锅炉专业',
          deviceModel: '6314-2RS',
          purchaseTime: '2016-05-02',
          brand: '西安东恒'
        }
      ]
    }
  },
  mounted: function () {
  },
  methods: {
    customColorMethod: function (percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    handlePageChange: function () {
    },
    handConfirmClick: function () {
    },
    handleEditClick: function () {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
