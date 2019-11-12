<template >
  <div id="userpanel">
    <el-dropdown>
      <span class="el-dropdown-link">
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><a href="../../account/center/index" style="text-decoration:none;" target="_self">个人中心</a></el-dropdown-item>
        <el-dropdown-item>安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    <el-dropdown>
      <el-badge :value="12" class="infomessage">
        <span class="el-dropdown-link ">
          <i class="el-icon-bell" ></i>
        </span>
      </el-badge>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>通知提醒</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-tooltip class="item" effect="dark" content="使用文档" placement="bottom">
          <i class="el-icon-view" size="small"></i>
    </el-tooltip>

  </div>
</template>

<script>
export default {
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
}
.el-avatar {
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
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
