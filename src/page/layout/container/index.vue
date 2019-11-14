 <template>
  <el-container  class="main-container">
  <el-header >Header</el-header>
  <el-container >
    <el-container>
      <el-aside :style="{height:$store.state.contentHeight+'px'}"><siderbar ></siderbar></el-aside>
      <el-main :style="{height:$store.state.contentHeight+'px'}"><router-view></router-view></el-main>
    </el-container>
    <el-footer>Footer</el-footer>
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
