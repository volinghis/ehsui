<template>
 <el-menu ref="menuEL"  :background-color="GlobalCss.menuBgColor"
      :text-color="GlobalCss.menuText"
      :active-text-color="GlobalCss.menuActiveText"  @select="menuSelect">
    <template v-for="item in $store.state.menuDatas">
      <el-menu-item
        v-if="item.leaf&&!item.business"
        :key="item.key"
        :index="item.key"
      >{{ item.label }}</el-menu-item>
      <el-submenu v-else  :key="item.key" :index="item.key">
        <template slot="title">{{item.label}}</template>
        <template  v-for="itemsub in item.children">
        <el-menu-item
          v-if="itemsub.leaf&&!itemsub.business"
          :key="itemsub.key"
          :index="itemsub.key"
        >{{itemsub.label}}</el-menu-item>
        </template>
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
