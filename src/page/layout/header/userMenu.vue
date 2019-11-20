<template >
  <div id="userpanel">
    <el-dropdown>
      <span class="el-dropdown-link">
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><a href="#" @click="goCenter" style="text-decoration:none;">个人中心</a></el-dropdown-item>
        <el-dropdown-item><a href="#" @click="goCenter" style="text-decoration:none;">个人设置</a></el-dropdown-item>
        <el-dropdown-item>安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> -->
    <img class="avatarClass" fit="fill" :style="{height:(parseInt(GlobalCss.headerHeight)-20)+'px',borderRadius:'50%',width:(parseInt(GlobalCss.headerHeight)-20)+'px', marginTop:'12px',marginRight:'10px'}" src="../../../assets/Avatar.svg"/>
    <el-dropdown>
      <el-badge :value="12" class="infomessage">
        <span class="el-dropdown-link ">
          <i class="el-icon-bell" ></i>
        </span>
      </el-badge>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <header-notice></header-notice>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-tooltip class="item" effect="dark" content="使用文档" placement="bottom">
          <i class="el-icon-view" size="small"></i>
    </el-tooltip>
  </div>
</template>

<script>
import headerNotice from './headerNotice.vue'
export default {
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
<style scoped>
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
  font-size: medium;
  font-weight:500;
  color: #fff;
  line-height: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
