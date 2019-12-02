<template>
  <el-cascader
    placeholder="试试搜索：指南"
    :options="options">
    <template slot-scope="{ node, data }">
    <span>{{ data.label }}</span>
    <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
  </template>
    </el-cascader>
</template>
<script>
import datas from './datas.js'
export default datas
</script>
<style lang="sass" scoped>
@import './styles.scss'
</style>
