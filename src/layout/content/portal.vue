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
export default {
  components: {
    'centers': centers,
    'charts': charts,
    'task': task
  }
}
</script>
<style scoped>
.el-card__header{
  padding:8px;
}
</style>
