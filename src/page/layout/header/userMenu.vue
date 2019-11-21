<template >
  <div id="userpanel">
    <el-dropdown>
      <span class="el-dropdown-link">
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><a href="#" @click="goCenter" style="text-decoration:none;"><i class="el-icon-user"></i>个人中心</a></el-dropdown-item>
        <el-dropdown-item><a href="#" @click="goCenter" style="text-decoration:none;"><i class="el-icon-setting"></i>个人设置</a></el-dropdown-item>
        <el-dropdown-item><i class="el-icon-d-arrow-right"></i>安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <img class="avatarClass" fit="fill" :style="{height:(parseInt(GlobalCss.headerHeight)-20)+'px',borderRadius:'50%',
          width:(parseInt(GlobalCss.headerHeight)-20)+'px', marginTop:'12px',marginRight:'10px'}" src="../../../assets/Avatar.svg"/>
    <div class="el-dropdown">
      <headerNotice></headerNotice>
    </div>
    <el-tooltip class="item" effect="dark" content="使用文档" placement="bottom">
      <i class="el-icon-view" size="small"></i>
    </el-tooltip>
  </div>
</template>

<script>
import headerNotice from './headerNotice'
export default {
  name: 'userMenu',
  data () {
    return {
    }
  },
  components: {
    'headerNotice': headerNotice
  },
  methods: {
    goCenter () {
      this.$router.push({ name: 'center' })
    }
  }
}
</script>
<style lang="less" scoped>
  #userpanel{
    position: relative;;
    float: right;
    right: 0px;;
  }
  .infomessage{
      margin-right: 20px;
      cursor: pointer;
  }
  .item {
    margin-top: 20px;
    margin-right: 20px;
    float: right;
    cursor: pointer;
    color:#fff;
  }
  .avatarClass {
    float: right;
    margin-top: 10px;
    margin-right: 10px;
  }
  .el-dropdown {
    margin-top: 20px;
    float: right;
    margin-right: 10px;
  }
  .el-dropdown-link {
    cursor: pointer;
    font-size: small;
    font-weight:500;
    color: #fff;
    line-height: 15px;
  }
  .el-icon-arrow-down {
    font-size: 14px;
  }
</style>
