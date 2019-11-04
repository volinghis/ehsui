
<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    router
  >
  <el-menu-item v-for="(item,i) in showMenus"  style="width:100px;" :key="i" :index="item.index">
        {{ item.label }}
    </el-menu-item>

  </el-menu>
</template>


<style scoped>
.el-menu{
  float:left;
}
</style>
<script >
export default {
   data() {
      return {
        menutotalwidth:0,
        showMenus:[],
        hideMenus:[],
        menus: [
          {index:'/',label:'首页'},
        {index:'/page/test/pageone',label:'测试1'},
        {index:'/page/test/pageone',label:'测试2'},
        {index:'/page/test/pageone',label:'测试3'},
        {index:'/page/test/pageone',label:'测试4'},
        {index:'/page/test/pageone',label:'测试5'},
         {index:'/page/test/pageone',label:'测试5'},
          {index:'/page/test/pageone',label:'测试5'},
           {index:'/page/test/pageone',label:'测试5'},
            {index:'/page/test/pageone',label:'测试5'},
             {index:'/page/test/pageone',label:'测试5'},
              {index:'/page/test/pageone',label:'测试5'},
               {index:'/page/test/pageone',label:'测试5'}
        ],
      };
    },
    mounted : function() {
      var elwidth=document.querySelector(".el-header").offsetWidth;
      this.menutotalwidth=elwidth-elwidth*0.1*2-document.querySelector("#logopanel").offsetWidth-document.querySelector("#userpanel").offsetWidth;
      this.menutotalwidth=this.menutotalwidth<200?200:this.menutotalwidth;

      for(var i=0;i<this.menus.length;i++){
        if(i<this.menutotalwidth/100-2){
          this.showMenus.push(this.menus[i]);
        }
      }


   }
}
</script>