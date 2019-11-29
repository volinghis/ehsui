<template>
  <div :style="{height:$store.state.contentHeight+'px',padding:'10px',background:'#fff'}" class="cardHeight">
    <el-form :inline="true" :model="queryParam" label-position="right" size="small" label-width="100px" class="fromHeight">
      <el-form-item label="入库编号：">
          <el-input v-model="queryParam.code" placeholder="请输入备件编号"/>
      </el-form-item>
      <el-form-item label="备件编号：">
          <el-input v-model="queryParam.name" placeholder="请输入备件名称"/>
      </el-form-item>
      <el-form-item style="margin-left:40px;">
        <span>
          <el-button type="primary" style="margin-left: 8px" @click="() =>queryParam = {}">查询</el-button>
          <el-button @click="$refs.table.refresh(true)">重置</el-button>
        </span>
      </el-form-item>
    </el-form>
    <div class="operatorHeight">
      <el-button type="primary" icon="el-icon-plus" class="buttonHeight" size="small" @click="handleAdd()">添加入库</el-button>
      <el-button type="primary" icon="el-icon-delete" class="buttonHeight" size="small" @click="handleDelete()">删除</el-button>
      <el-button type="primary" icon="el-icon-download" class="buttonHeight" size="small" @click="exportExcel()">导出</el-button>
    </div>
    <template>
      <el-table :data="tableData" ref="multipleTable" class="tableHeight" :max-height="htable">
        <el-table-column fixed type="index" width="50"></el-table-column>
        <el-table-column fixed type="selection" width="50"></el-table-column>
        <el-table-column fixed prop="code" label="入库编号" width="150"></el-table-column>
        <el-table-column fixed prop="date" label="入库日期" width="150"></el-table-column>
        <el-table-column fixed prop="completion" label="资料完整度" width="200" sortable>
            <template slot-scope="scope">
                <el-progress :percentage="scope.row.completion" :color="customColors" ></el-progress>
            </template>
        </el-table-column>
        <el-table-column prop="type" label="入库类型" width="150"></el-table-column>
        <el-table-column prop="model" label="供应商" width="150"></el-table-column>
        <el-table-column prop="norm" label="经办人" width="120"></el-table-column>
        <el-table-column prop="warehouse" label="所在仓库" width="150"></el-table-column>
        <el-table-column prop="unit" label="入库人" width="120"></el-table-column>
        <!-- <el-table-column prop="status" label="申请状态" width="120"></el-table-column> -->
        <el-table-column prop="remark" label="备注" width="190"></el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="info" :size="GlobalCss.controlSize">查看</el-button>
          <el-button @click="handleEdit(scope.row)" type="primary" :size="GlobalCss.controlSize">编辑</el-button>
        </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pageHeight"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-sizes="[10, 20, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next"
        :total="100">
      </el-pagination>
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
