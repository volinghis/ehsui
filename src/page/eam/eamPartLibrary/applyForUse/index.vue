<template>
  <div :style="{height:$store.state.contentHeight+'px',padding:'10px',background:'#fff'}" class="cardHeight">
    <el-form :inline="true" :model="queryParam" :size="GlobalCss.buttonSize" label-position="right" label-width="100px;" class="fromHeight">
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
          <el-button type="primary" @click="$refs.table.refresh(true)" :size="GlobalCss.buttonSize">查询</el-button>
          <el-button style="margin-left: 8px" @click="() =>queryParam = {}" :size="GlobalCss.buttonSize">重置</el-button>
        </span>
      </el-form-item>
    </el-form>
    <div class="operatorHeight">
      <el-button type="primary" icon="el-icon-edit" class="buttonHeight" :size="GlobalCss.buttonSize" @click="handleAdd()">领用申请</el-button>
      <el-button type="primary" icon="el-icon-delete" class="buttonHeight" :size="GlobalCss.buttonSize" @click="handleDelete()">删除</el-button>
      <el-button type="primary" icon="el-icon-download" class="buttonHeight" :size="GlobalCss.buttonSize" @click="handleAdd()">导出</el-button>
    </div>
    <template>
      <el-table :data="tableData" resizable highlight-current-row :size="GlobalCss.buttonSize" ref="multipleTable" class="tableHeight" :max-height="htable">
        <el-table-column fixed type="selection" width="50"></el-table-column>
        <el-table-column fixed type="index" width="50"></el-table-column>
        <!-- <el-table-column fixed prop="type" label="图片" width="70">
            <el-image style="width: 30px; height: 30px" :src="url" :fit="fit" :preview-src-list="srcList"></el-image>
        </el-table-column>-->
        <el-table-column fixed prop="code" label="出库编号" width="160"></el-table-column>
        <el-table-column fixed prop="date" label="出库日期"></el-table-column>
        <el-table-column prop="type" label="出库类型"></el-table-column>
        <el-table-column prop="department" label="领用部门"></el-table-column>
        <el-table-column prop="person" label="领用人"></el-table-column>
        <el-table-column prop="warehouse" label="出库仓库"></el-table-column>
        <el-table-column prop="responsible" label="出库人" width="100"></el-table-column>
        <el-table-column prop="status" label="申请状态"></el-table-column>
        <el-table-column prop="remark" label="备注" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
        <template slot-scope="scope">
          <!-- <el-button @click="handleClick(scope.row)" type="info" :size="GlobalCss.controlSize">查看</el-button> -->
          <el-button @click="dialogTableVisible = true" type="info"  :size="GlobalCss.controlSize">查看</el-button>
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
    <el-dialog title="领用申请详情" :visible.sync="dialogTableVisible" >
      <el-divider></el-divider>
      <el-steps :active="1" align-center style="margin-bottom:20px;">
        <el-step title="提交申请" description="张三2019-11-12"></el-step>
        <el-step title="负责人审批" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="主管审批" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="库管确认" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="申请成功" description="这是一段很长很长很长的描述性文字"></el-step>
      </el-steps>
      <div style="margin-bottom:20px;">
        <div slot="header" style="text-align:left;">
          <span style="font-weight: bold;font-size: 14px;"><i class="el-icon-s-order"></i>领用基本信息</span>
        </div>
      <el-divider></el-divider>
        <el-row>
          <el-col :span="12" v-for="(item, index) in partData" :key="index" style="line-height: 30px;">
            <span class="title">{{ item.title }}：</span><span class="content">{{ item.content }}</span>
          </el-col>
        </el-row>
      </div>
      <div>
        <div slot="header" style="text-align:left;">
          <span style="font-weight: bold;font-size: 14px;"><i class="el-icon-s-order"></i>领用备件清单</span>
        </div>
        <el-divider></el-divider>
        <el-table :data="gridData" :size="GlobalCss.buttonSize" stripe border>
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column property="date" label="设备编号"></el-table-column>
          <el-table-column property="name" label="设备名称"></el-table-column>
          <el-table-column property="name" label="设备型号"></el-table-column>
          <el-table-column property="name" label="设备类型"></el-table-column>
          <el-table-column property="name" label="设备品牌"></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
      </div>
      <div slot="footer" style="text-align:center;margin:10px 0px;">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import datas from './datas'
export default datas
</script>
<style lang="scss" scoped>
@import './styles.scss';
</style>
