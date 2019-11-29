<template>
  <el-table :data="tableData" border size="mini" class="tableClass">
    <el-table-column prop="name" label="参数名称"></el-table-column>
    <el-table-column prop="value" label="参数值"></el-table-column>
    <el-table-column prop="remark" label="备注"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClickEdit(scope.row)" size="mini" type="primary" >编辑</el-button>
        <el-button @click="handleClickDel(scope.row)" size="mini" type="danger" >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import datas from './datas'
export default datas
</script>
<style lang="scss" scoped>
@import './styles.scss';
</style>
