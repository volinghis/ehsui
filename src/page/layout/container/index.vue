 <template>
  <el-container class="main-container">
<el-header >
  <ehsheader></ehsheader>
</el-header>
  <el-container >
  <el-aside :style="{height:($store.state.contentHeight+parseInt(GlobalCss.footerHeight)+parseInt(GlobalCss.tabHeight))+'px'}"><siderbar ></siderbar></el-aside>
  <el-container >
    <el-container ><el-header class="tab-header"><el-tabs  :value="this.$router.currentRoute.name" type="card" @tab-remove="tabRemove"  @tab-click="tabClick">
  <el-tab-pane
    :key="item.name"
    v-for="(item,itemIndex) in $store.state.selectedTabs"
    :label="item.meta.title"
    :name="item.name"
    :closable="itemIndex==0?false:true"

  >
  </el-tab-pane>
</el-tabs></el-header><el-main :style="{height:$store.state.contentHeight+'px'}"><router-view></router-view></el-main></el-container>
        <el-footer><span>@Copy2019东恒鑫源软件开发有限公司</span></el-footer>
  </el-container>
  </el-container>
</el-container>
</template>
<script>

import container from './datas'
import siderbar from '../siderbar/index'
import ehsheader from '../header/index'
container.components = {
  'siderbar': siderbar,
  'ehsheader': ehsheader
}
export default container

</script>
<style lang="scss" scoped>
@import './styles.scss';
</style>
