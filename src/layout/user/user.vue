<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        admin
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
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
        <el-dropdown-item>代办已办</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-tooltip class="item" effect="dark" content="使用文档" placement="bottom">
          <i class="el-icon-view" size="small"></i>
    </el-tooltip>

   

  <el-autocomplete
  class="query"
  size="small"
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"
   suffix-icon="el-icon-search"
></el-autocomplete>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" }
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>
<style scoped>
.query{
    width: 180px;
    margin-top: 15px;
    float: right;
    margin-right:20px;
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
