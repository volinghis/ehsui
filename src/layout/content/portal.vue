<template>
  <div>
    <el-row >
      <el-col :span="8">
         <el-card shadow="never">
          <div slot="header"
               style="text-align:left;">
            个人中心
          </div>
          <template>
            <centers></centers>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span="8">
       <el-card shadow="never">
          <div slot="header"
               style="text-align:left;">
            精品资料
          </div>
          <template>
            <documents></documents>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <div slot="header"
               style="text-align:left;">
            设备资料完整度
          </div>
          <template>
            <devices></devices>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <div slot="header"
               class="clearfix"
               style="text-align:left;">
            热门搜索
          </div>
          <div>
            <charts></charts>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import charts from './models/charts.vue'
import devices from './models/devices.vue'
import documents from './models/documents.vue'
import centers from './models/centers.vue'
export default {
  components: {
    'charts': charts,
    'devices': devices,
    'documents': documents,
    'centers': centers
  }
}
</script>
<style scoped>

.el-card {
  height: 500px;
  border:none;
}
.el-row {
  margin-bottom: 5px;
  width: 100%;
}
.el-row：last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
