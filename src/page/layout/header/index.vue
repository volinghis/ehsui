<template>
  <div>
    <div class="topleft">
      <nav >
    <template v-for="item in $store.state.menuDatas">
      <li  :key="item.key" v-if="item.leaf||!item.business"  @click="menuSelect(item.key,item.leaf,$event)"><span ><i :class="'fa '+(item.icon?item.icon:'')+' fa-3x' "></i><br>{{ item.label }}<br></span>
        <ul v-if="item.children">
          <template v-for="itemSub in item.children">
            <li v-if="itemSub.leaf&&!itemSub.business"  :key="itemSub.key" @click="menuSelect(itemSub.key,itemSub.leaf,$event)"><span ><i :class="'fa '+(itemSub.icon?itemSub.icon:'')+' fa-1x'"></i>&nbsp; {{itemSub.label}}</span></li>
          </template>
        </ul>
      </li>
    </template>
  </nav>
  </div>
    <div class="topright"><i class='fa fa-user fa-1x'></i><span>{{sessionUser.username}}({{sessionUser.account}})</span><br><span @click="logout()"><i class='fa el-icon-warning fa-3x'></i></span></div>
  </div>
</template>
<script>
import datas from './datas.js'
export default datas
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
