<template>
  <div :style="{height:$store.state.contentHeight+'px',padding:'10px',background:'#fff'}" class="cardHeight">
    <el-form :inline="true" :model="queryParam" size="small" label-position="right" label-width="100px;" class="fromHeight">
      <el-form-item label="备件编号：">
          <el-input v-model="queryParam.code" placeholder="请输入备件编号"/>
      </el-form-item>
      <el-form-item label="备件名称：">
          <el-input v-model="queryParam.name" placeholder="请输入备件名称"/>
      </el-form-item>
      <el-form-item label="备件类型：">
          <el-input v-model="queryParam.name" placeholder="请输入备件类型"/>
      </el-form-item>
      <el-form-item style="margin-left:40px;">
        <span>
          <el-button type="primary" @click="$refs.table.refresh(true)">查询</el-button>
          <el-button style="margin-left: 8px" @click="() => queryParam = {}">重置</el-button>
        </span>
      </el-form-item>
    </el-form>
    <div class="operatorHeight">
      <el-button type="primary" icon="el-icon-plus" class="buttonHeight" size="small" @click="handleAdd()">新增</el-button>
      <el-button type="primary" icon="el-icon-delete" class="buttonHeight" size="small" @click="handleDelete()">删除</el-button>
      <el-button type="primary" icon="el-icon-download" class="buttonHeight" size="small" @click="exportExcel()">导出</el-button>
    </div>
    <template>
      <el-table :data="tableData" ref="multipleTable" class="tableHeight" :max-height="htable" size="small">
        <el-table-column fixed type="index" width="50"> </el-table-column>
        <el-table-column fixed type="selection" width="50"> </el-table-column>
        <el-table-column fixed prop="type" label="图片" width="70">
            <el-image style="width: 30px; height: 30px" :src="url" :fit="fit" :preview-src-list="srcList"></el-image>
        </el-table-column>
        <el-table-column fixed prop="code" label="备件编号" width="150"> </el-table-column>
        <el-table-column fixed prop="name" label="备件名称" width="150"> </el-table-column>
        <!-- <el-table-column fixed prop="completion" label="资料完整度" width="180" sortable>
            <template slot-scope="scope">
                <el-progress :percentage="scope.row.completion" :color="customColors" ></el-progress>
            </template>
        </el-table-column> -->
        <el-table-column prop="type" label="备件类型" width="120"> </el-table-column>
        <el-table-column prop="model" label="备件型号" width="120"> </el-table-column>
        <el-table-column prop="norm" label="备件规格" width="150"> </el-table-column>
        <el-table-column prop="brand" label="品牌" width="180"> </el-table-column>
        <el-table-column prop="warehouse" label="所在仓库" width="120"> </el-table-column>
        <el-table-column prop="unit" label="单位" width="90"> </el-table-column>
        <el-table-column prop="price" label="价格" width="90" sortable> </el-table-column>
        <el-table-column prop="amount" label="数量" width="90" sortable> </el-table-column>
        <el-table-column prop="warningValue" label="库存预警值" width="90"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
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
