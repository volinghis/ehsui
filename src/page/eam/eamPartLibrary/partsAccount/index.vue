<template>
  <div :style="{height:$store.state.contentHeight+'px',padding:'10px',background:'#fff'}" class="cardHeight">
    <el-form :inline="true" :model="queryParam" :size="GlobalCss.buttonSize" label-position="right" label-width="100px;" class="fromHeight">
      <el-form-item label="备件编号：">
          <el-input v-model="queryParam.code" placeholder="请输入备件编号"/>
      </el-form-item>
      <el-form-item label="备件名称：">
          <el-input v-model="queryParam.name" placeholder="请输入备件名称"/>
      </el-form-item>
      <el-form-item style="margin-left:40px;">
        <span>
          <el-button type="primary" @click="$refs.table.refresh(true)">查询</el-button>
          <el-button style="margin-left: 8px" @click="() => queryParam = {}">重置</el-button>
        </span>
      </el-form-item>
    </el-form>
    <div class="operatorHeight">
      <el-button type="primary" icon="el-icon-plus" class="buttonHeight" :size="GlobalCss.buttonSize" @click="handleAdd()">新增</el-button>
      <el-button type="primary" icon="el-icon-delete" class="buttonHeight" :size="GlobalCss.buttonSize" @click="handleDelete()">删除</el-button>
      <el-button type="primary" icon="el-icon-download" class="buttonHeight" :size="GlobalCss.buttonSize" @click="exportExcel()">导出</el-button>
    </div>
    <template>
      <el-table :data="tableData" ref="multipleTable" resizable highlight-current-row class="tableHeight" :max-height="htable" :size="GlobalCss.buttonSize">
        <el-table-column fixed="left" type="selection" width="50" align="center"> </el-table-column>
        <el-table-column fixed="left" type="index" width="50" align="center"> </el-table-column>
        <el-table-column fixed="left"  prop="code" label="备件编号" width="110" align="center"> </el-table-column>
        <el-table-column  prop="deviceImg" label="图片" width="70" align="center">
          <template slot-scope="scope">
            <el-image style="width: 30px; height: 30px"
                      :src="scope.row.deviceImg"
                      :preview-src-list="[scope.row.deviceImg]">
            </el-image>
          </template>
        </el-table-column>
        <el-table-column  prop="name" label="备件名称" width="120" align="center"> </el-table-column>
        <el-table-column  prop="completion" label="资料完整度" width="160" sortable align="center">
            <template slot-scope="scope">
                <el-progress :percentage="scope.row.completion" :color="customColors" align="center"></el-progress>
            </template>
        </el-table-column>
        <el-table-column prop="norm" label="规格型号" width="160" align="center"> </el-table-column>
        <el-table-column prop="brand" label="归属设备" width="120" :show-overflow-tooltip="true" align="center"> </el-table-column>
        <el-table-column prop="warehouse" label="物资类别" width="100" align="center"> </el-table-column>
        <el-table-column prop="amount" label="数量" width="80" sortable align="center"> </el-table-column>
        <el-table-column prop="warningValue" label="预警值" width="80" align="center"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150" align="center">
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
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
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
