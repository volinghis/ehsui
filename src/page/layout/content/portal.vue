<template>
  <div class="container" style="width: 100%" max-height="$store.state.contentHeight">
    <el-row >
      <el-col  :span="6" :md="24" :lg="6">
        <el-card shadow="hover">
          <template>
            <centers></centers>
          </template>
        </el-card>
      </el-col>

      <el-col :span="12" :md="24" :lg="12">
        <el-card shadow="hover">
          <el-row>
            <el-col :span="12">
              <!-- <div>设备概况</div> -->
              <accountDoughnut></accountDoughnut>
            </el-col>
            <el-col :span="12">
              <div>
                <!-- <div>备件概况</div> -->
                <partDoughnut></partDoughnut>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="hover">
          <!-- <div slot="header" class="item-title" >
            <span>检修统计</span>
          </div> -->
          <linechart></linechart>
        </el-card>
      </el-col>

      <el-col :span="6" :md="24" :lg="6">
        <el-card shadow="hover">
          <!-- <div slot="header"
               class="item-title"
               size="small">代办任务
          </div> -->
          <task></task>
        </el-card>
        <el-card shadow="hover">
          <!-- <div slot="header" class="item-title" size="small">
            <span>故障原因占比</span>
          </div> -->
          <charts></charts>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :md="24" :lg="6">
        <el-card shadow="hover">
          <template>
            <div slot="header" class="item-title" size="small" style="text-align:center;border-radius: 30px;">
                 <el-button size="mini" round type="primary" style="weight:100px;">
                    <span class="mainTitle">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贡&nbsp;献&nbsp;度&nbsp;季&nbsp;度&nbsp;排&nbsp;名&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                  </el-button>
              </div>
            <ranking></ranking>
          </template>
        </el-card>
      </el-col>
      <el-col :span="12" :md="24" :lg="12">
        <el-card shadow="hover">
          <div slot="header" class="item-title" size="small">
            <span class="mainTitle">新增检修记录</span>
          </div>
          <maintenanceRecord></maintenanceRecord>
        </el-card>
        <el-card shadow="hover">
          <div slot="header" class="item-title" size="small">
            <span class="mainTitle">动&nbsp;&nbsp;&nbsp;&nbsp;态</span>
          </div>
          <dynamic></dynamic>
        </el-card>
      </el-col>
      <el-col :span="6" :md="24" :lg="6">
        <el-card shadow="hover">
          <div slot="header" class="item-title" size="small">
            <span class="mainTitle">资料完整度</span>
          </div>
          <devices></devices>
        </el-card>
        <el-card shadow="hover">
          <div slot="header" class="item-title" size="small">
            <span class="mainTitle">热门关注</span>
            <a href="#"><span style="float:right;color:#409EFF">更多</span></a>
          </div>
          <documents></documents>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import centers from './models/centers.vue'
import charts from './models/charts.vue'
import task from './models/task.vue'
import accountDoughnut from './models/accountDoughnut.vue'
import partDoughnut from './models/partDoughnut.vue'
import linechart from './models/linechart.vue'
import devices from './models/devices.vue'
import maintenanceRecord from './models/maintenanceRecord.vue'
import dynamic from './models/dynamic.vue'
import ranking from './models/ranking.vue'
import documents from './models/documents.vue'
export default {
  components: {
    'centers': centers,
    'charts': charts,
    'task': task,
    'accountDoughnut': accountDoughnut,
    'partDoughnut': partDoughnut,
    'linechart': linechart,
    'devices': devices,
    'maintenanceRecord': maintenanceRecord,
    'dynamic': dynamic,
    'documents': documents,
    'ranking': ranking
  }
}
</script>
<style scoped>
  .el-card__header{
    padding:8px;
  }
  .mainTitle{
    font-size: large;
    font-weight: bold;
    color: #646669
  }
  .el-card {
    border: 1px solid #ffffff;
  }
</style>
