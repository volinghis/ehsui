<template>
  <div class="page-header-wrapper-grid-content-main">
    <el-row :gutter="24">
      <el-col :span="6">
        <el-card shadow="hover">
          <center></center>
        </el-card>
      </el-col>
      <el-col :md="18">
        <el-card style="width:100%"
                 shadow="hover"
                 :bordered="false">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import center from '../../../layout/content/models/centers'
export default {
  data () {
    return {
    }
  },
  components: {
    center
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
