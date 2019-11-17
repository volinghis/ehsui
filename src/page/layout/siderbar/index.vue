<template>
 <el-menu ref="menuEL" :default-active="this.$router.currentRoute.name" :background-color="GlobalCss.menuBgColor"
      :text-color="GlobalCss.menuText"
      :active-text-color="GlobalCss.menuActiveText"  @select="menuSelect">
    <template v-for="item in $store.state.menuDatas">
      <el-menu-item
        v-if="item.leaf"
        :key="item.code"
        :index="item.code"
      >{{ item.label }}</el-menu-item>
      <el-submenu v-else  :key="item.code" :index="item.code">
        <template slot="title">{{item.label}}</template>
        <el-menu-item
          v-for="itemsub in item.children"
          :key="itemsub.code"
          :index="itemsub.code"
        >{{itemsub.label}}</el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>
<script>
import datas from './datas'
export default datas
</script>

<style scoped lang="scss">
@import './styles.scss';
</style>
