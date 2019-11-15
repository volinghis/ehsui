<template>
  <div class="container">
    <el-row :gutter="10">
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
        <br>
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
        <br>
        <el-card shadow="hover">
          <!-- <div slot="header" class="item-title" size="small">
            <span>故障原因占比</span>
          </div> -->
          <charts></charts>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
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
            <div>
              <charts></charts>
            </div>
            </el-col>
            <el-col :span="12">
              <div>
              <charts></charts>
            </div>
            </el-col>
          </el-row>
        </el-card>
        <el-card shadow="hover">
        </el-card>
      </el-col>

      <el-col :span="6" :md="24" :lg="6">
        <el-card shadow="hover">
          <div slot="header"
               class="item-title"
               size="small">代办任务
          </div>
          <task></task>
        </el-card>
        <el-card shadow="hover">
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
export default {
  components: {
    'centers': centers,
    'charts': charts,
    'task': task,
    'accountDoughnut': accountDoughnut,
    'partDoughnut': partDoughnut,
    'linechart': linechart
  }
}
</script>
<style scoped>
.el-card__header{
  padding:8px;
}
</style>
