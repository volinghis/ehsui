<template>
 <el-menu :default-active="this.$router.path" class="el-menu-demo"  router>
    <template v-for="item in $store.state.menuDatas">
      <el-menu-item
        v-if="item.leaf"
        :key="item.key"
        :index="item.path"
      >{{ item.label }}</el-menu-item>
      <el-submenu v-else  :key="item.key" :index="item.path">
        <template slot="title">{{item.label}}</template>
        <el-menu-item
          v-for="itemsub in item.children"
          :key="itemsub.key"
          :index="itemsub.path"
        >{{itemsub.label}}</el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
import datas from './datas'
export default datas
</script>

<style scoped>
@import './styles.scss';
</style>
