<template>
      <el-container >
          <el-header ><logo></logo><menus></menus><user></user></el-header>
          <el-main><router-view></router-view></el-main>
      </el-container>
</template>

<script>
import menus from './menu/meuns.vue'
import logo from './logo/logo.vue'
import user from './user/user.vue'
export default {
  components: {
    'menus': menus,
    'logo': logo,
    'user': user
  }
}
</script>

<style scoped>
.el-header{
  padding-left: 20%;
  padding-right: 20%;
  border-bottom: solid 1px #e6e6e6;;

}
.el-main{
  margin-top: 2px;
  padding-left: 20%;
  padding-right: 20%;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}

</style>
