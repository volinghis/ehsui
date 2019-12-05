<template>
  <div :style="{height:$store.state.contentHeight+'px',padding:'10px',background:'#fff'}" class="cardHeight">
    <el-form :inline="true" :model="queryParam" :size="GlobalCss.buttonSize" label-position="right" label-width="100px;" class="fromHeight">
      <el-form-item label="出库编号：">
          <el-input v-model="queryParam.code" placeholder="请输入出库编号"/>
      </el-form-item>
      <el-form-item label="领用人：">
          <el-input v-model="queryParam.name" placeholder="请输入领用人"/>
      </el-form-item>
      <el-form-item style="margin-left:40px;">
        <span>
          <el-button type="primary" @click="$refs.table.refresh(true)">查询</el-button>
          <el-button style="margin-left: 8px" @click="() =>queryParam = {}">重置</el-button>
        </span>
      </el-form-item>
    </el-form>
    <div class="operatorHeight">
      <el-button type="primary" icon="el-icon-plus" class="buttonHeight" :size="GlobalCss.buttonSize" @click="handleAdd()">添加出库</el-button>
      <el-button type="primary" icon="el-icon-delete" class="buttonHeight" :size="GlobalCss.buttonSize" @click="handleAdd()">删除</el-button>
      <el-button type="primary" icon="el-icon-download" class="buttonHeight" :size="GlobalCss.buttonSize" @click="handleAdd()">导出</el-button>
    </div>
    <template>
      <el-table :data="tableData" resizable highlight-current-row ref="multipleTable" class="tableHeight" :max-height="htable" :size="GlobalCss.buttonSize">
        <el-table-column fixed type="selection" width="50" align="center"></el-table-column>
        <el-table-column fixed type="index" width="50" align="center"></el-table-column>
        <el-table-column fixed prop="code" label="出库编号" width="140" align="center"></el-table-column>
        <el-table-column prop="date" label="出库日期" width="120" align="center"></el-table-column>
        <el-table-column prop="completion" label="资料完整度" width="160" sortable align="center">
            <template slot-scope="scope">
                <el-progress :percentage="scope.row.completion" :color="customColors" ></el-progress>
            </template>
        </el-table-column>
        <el-table-column prop="type" label="出库类型" width="120" align="center"></el-table-column>
        <el-table-column prop="department" label="领用部门" width="100" align="center"></el-table-column>
        <el-table-column prop="person" label="领用人" width="90" align="center"></el-table-column>
        <el-table-column prop="warehouse" label="出库仓库" width="100" align="center"></el-table-column>
        <el-table-column prop="warehouseManager" label="出库人" width="90" align="center"></el-table-column>
        <el-table-column prop="remark" label="备注" width="180" align="center"></el-table-column>
        <el-table-column fixed="right" label="操作" width="145" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="info" :size="GlobalCss.controlSize">查看</el-button>
          <el-button @click="handleEdit(scope.row)" type="primary" :size="GlobalCss.controlSize">编辑</el-button>
        </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pageHeight"
        background
        style="text-align:right;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-sizes="[10, 20, 50]"
        :page-size="10"
        layout="total,sizes,prev, pager, next"
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
