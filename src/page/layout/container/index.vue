<template>
<div>
    <el-container >
    <el-header ><ehsheader></ehsheader></el-header>
    <el-container>
      <el-aside><siderbar></siderbar></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container></div>

</template>
<script>

import container from './datas'
import siderbar from '../siderbar/index'
import ehsheader from '../header/index'
container.components = {
  'siderbar': siderbar,
  'ehsheader': ehsheader
}
export default container

</script>
<style lang="scss" scoped>
@import './styles.scss';
</style>
