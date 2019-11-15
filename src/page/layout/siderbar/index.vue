<template>
<div id="siderbar">
<template  v-for="item in $store.state.menuDatas">
  <el-button :key="item.key"  round>{{item.label}}</el-button>
  </template>
</div>
</template>
<script>
import datas from './datas'
export default datas
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
