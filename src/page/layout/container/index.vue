 <template>
  <el-container  class="main-container">
  <el-header >Header</el-header>
  <el-container >
    <el-aside :style="{height:($store.state.contentHeight+parseInt(GlobalCss.footerHeight))+'px'}"><siderbar ></siderbar></el-aside>
    <el-container>
      <el-main :style="{height:$store.state.contentHeight+'px'}"><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </el-container>
</el-container>
</template>
<script>

import container from './datas'
import siderbar from '../siderbar/index'
container.components = {
  'siderbar': siderbar
}
export default container

</script>
<style lang="scss" scoped>
@import './styles.scss';
</style>
