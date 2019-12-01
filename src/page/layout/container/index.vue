<template>
    <el-container >
        <el-header ><ehsheader></ehsheader></el-header>
    <el-container>
        <el-header class="tabpanel"><el-breadcrumb separator=">">
          <el-breadcrumb-item >当前位置</el-breadcrumb-item>
          <el-breadcrumb-item>{{this.$router.currentRoute.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        </el-header>
        <el-main :style="{height:this.$store.state.clientHeight}"><router-view></router-view></el-main>
    </el-container>
  </el-container>

</template>
<script>

import container from './datas'
import ehsheader from '../header/index'
container.components = {
  'ehsheader': ehsheader
}
export default container

</script>
<style lang="scss" scoped>
@import './styles.scss';
</style>
