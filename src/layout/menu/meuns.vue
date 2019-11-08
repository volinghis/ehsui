
<template>
  <el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" router>
    <template v-for="item in showMenus">
      <el-menu-item
        v-if="(item.children==null||item.children.length==0)"
        style="width:100px;"
        :key="item.key"
        :index="item.index"
      >{{ item.label }}</el-menu-item>
      <el-submenu v-else style="width:100px;" :key="item.key" :index="item.index">
        <template slot="title">{{item.label}}</template>
        <el-menu-item
          v-for="itemsub in item.children"
          style="width:100px;"
          :key="itemsub.key"
          :index="itemsub.index"
        >{{itemsub.label}}</el-menu-item>
      </el-submenu>
    </template>
        <template v-for="itemse in hideMenus">
      <el-submenu  style="width:100px;" :key="itemse.key" :index="itemse.index">
        <template slot="title">{{itemse.label}}</template>
        <template v-for="item in itemse.children">
          <el-menu-item
            v-if="(item.children==null||item.children.length==0)"
            style="width:100px;"
            :key="item.key"
            :index="item.index"
          >{{ item.label }}</el-menu-item>
          <el-submenu v-else style="width:100px;"  :key="item.key" :index="item.index">
            <template slot="title">{{item.label}}</template>
            <el-menu-item
              v-for="itemsub in item.children"
              style="width:100px;"
              :key="itemsub.key"
              :index="itemsub.index"
            >{{itemsub.label}}</el-menu-item>
          </el-submenu>
        </template>

      </el-submenu>
    </template>
  </el-menu>
</template>


<style scoped>
.el-menu {
  float: left;
}
</style>
<script >
export default {
  data() {
    return {
      menutotalwidth: 0,
      showMenus: [],
      hideMenus: [],
      menus: [
        { index: "/", key: "1", label: "首页" },
        {
          index: "/page/test/pageone",
          key: "2",
          label: "设备管理",
          children: [
            { index: "/page/eam/eamAccountPrint/index", key: "eamAccountPrint", label: "设备列表" },
            { index: "/page/eam/eamAccountPrint/details", key: "223", label: "设备详情" }
          ]
        },
        {
          index: "/",
          key: "3",
          label: "备件管理",
          children: [
            { index: "/page/eam/eamPartLibrary/details", key: "eamPartLibrary", label: "备件台账" }
          ]
        },
        { index: "/page/test/pageone", key: "4", label: "测试4" },
        { index: "/page/test/pageone", key: "5", label: "测试5" },
        { index: "/page/test/pageone", key: "6", label: "测试6" },
        { index: "/page/test/pageone3", key: "7", label: "测试7" },
        { index: "/page/test/pageone4", key: "8", label: "测试8" },
        { index: "/page/test/pageone5", key: "9", label: "测试9" },
        { index: "/page/test/pageone6", key: "10", label: "测试10" },
        {
          index: "/page/test/pageone12",key: "11", label: "测试113",
          children: [
            { index: "/page/test/pageone3", key: "12", label: "测试132" },
            { index: "/page/test/pageone35", key: "13", label: "测试133" }
          ]
        }
      ]
    };
  },
  mounted: function() {
    var elwidth = document.querySelector(".el-header").offsetWidth;
    this.menutotalwidth =
      elwidth -
      elwidth * 0.1 * 2 -
      document.querySelector("#logopanel").offsetWidth -
      document.querySelector("#userpanel").offsetWidth;
    this.menutotalwidth = this.menutotalwidth < 200 ? 200 : this.menutotalwidth;
    console.log("tttt"+parseInt(this.menutotalwidth / 100) );
    for (var i = 0; i < this.menus.length; i++) {
      if (i < parseInt(this.menutotalwidth / 100) - 1) {
        this.showMenus.push(this.menus[i]);
      } else if (i == parseInt(this.menutotalwidth / 100) - 1) {
        this.hideMenus.push({
          index: "",
          label: "更多",
          children: [this.menus[i]]
        });
      } else {
        console.log("1234567");
        this.hideMenus[0].children.push(this.menus[i]);
      }
    }
    console.log(".."+this.hideMenus[0].children.length);
  }
};
</script>