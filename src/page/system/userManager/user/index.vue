<template>
  <div>
    <el-row>
      <el-col :span="6">
        <!-- <userTree v-on:getOrg="getOrg" v-on:userTableData="userData"></userTree> -->
        <el-input placeholder="输入关键字进行查找"
                  :size="GlobalCss.buttonSize"
                  style="width: 100%"
                  v-model="filterText">
        </el-input>
        <el-tree :data="treeData"
                node-key="id"
                ref="tree"
                :props="treeProps"
                :default-expanded-keys="defaultExpandKeys"
                @node-click="handleNodeClick"
                :filter-node-method="filterNode"
                highlight-current
                :expand-on-click-node="false">
        </el-tree>
      </el-col>
      <el-col :span="1"><el-divider direction="vertical"></el-divider></el-col>
      <el-col :span="17">
        <!-- <el-card shadow="hover"
                 :style="{height:(this.$store.state.contentHeight -30)+'px'}"> -->
          <userTable :organizationKey="organizationKey"
                     :organizationName="organizationName"
                     :organizationChildren="organizationChildren"
                     :userDatas="userTableData"></userTable>
        <!-- </el-card> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
import datas from './datas.js'
export default datas
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
