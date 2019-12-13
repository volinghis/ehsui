<template>
  <div style="padding:10px;">
    <el-row :gutter="10" style="padding:5px;">
      <el-col :span="8">
        <el-card shadow="hover" :style="{height:(this.$store.state.contentHeight -30)+'px'}">
          <userTree></userTree>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover" :style="{height:(this.$store.state.contentHeight -30)+'px'}">
          <userTable></userTable>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import datas from './datas.js'
export default datas
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
