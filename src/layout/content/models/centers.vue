<template>
<div>
<el-row  >
      <el-col :span="12">
      <el-avatar  :size="150"  fit="fit" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573316031111&di=385743a637cec681a0d6ba53de6d15fb&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmw690%2F006NO2XVzy7rcbse191a3%26690"></el-avatar>
      </el-col>
      <el-col :span="12">
        <el-row><el-col :span="10" style="text-align:right;vertical-align: center;"><span><b>贡献分：</b></span></el-col><el-col :span="14" style="text-align:left"><span class="score">985263</span></el-col></el-row>
        <el-row><el-col :span="10" style="text-align:right"><span><b>职称：</b></span></el-col><el-col :span="14" style="text-align:left"><span>高级工程师</span></el-col></el-row>
        <el-row><el-col :span="10" style="text-align:right"><span><b>入司时间：</b></span></el-col><el-col :span="14" style="text-align:left"><span>2019-10-23</span></el-col></el-row>
        <el-row><el-col :span="10" style="text-align:right"><span><b>部门：</b></span></el-col><el-col :span="14" style="text-align:left"><span>大唐韩城第二发电厂/设备部/电气专业</span></el-col></el-row>
      </el-col>
    </el-row>
    <el-row  >
      <el-col :span="12">
      <el-avatar  :size="150"  fit="fit" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573316031111&di=385743a637cec681a0d6ba53de6d15fb&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmw690%2F006NO2XVzy7rcbse191a3%26690"></el-avatar>
      </el-col>
      <el-col :span="12">
        <el-row><el-col :span="10" style="text-align:right;vertical-align: center;"><span><b>贡献分：</b></span></el-col><el-col :span="14" style="text-align:left"><span class="score">985263</span></el-col></el-row>
        <el-row><el-col :span="10" style="text-align:right"><span><b>职称：</b></span></el-col><el-col :span="14" style="text-align:left"><span>高级工程师</span></el-col></el-row>
        <el-row><el-col :span="10" style="text-align:right"><span><b>入司时间：</b></span></el-col><el-col :span="14" style="text-align:left"><span>2019-10-23</span></el-col></el-row>
        <el-row><el-col :span="10" style="text-align:right"><span><b>部门：</b></span></el-col><el-col :span="14" style="text-align:left"><span>大唐韩城第二发电厂/设备部/电气专业</span></el-col></el-row>
      </el-col>
    </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userCenterInfo: {
        level: 47
      }
    }
  }
}
</script>

<style scoped>
.score{
  font-family: 'Helvetica';
  font-size: 20px;
  color: goldenrod
}
.el-row{
  margin-bottom: 5px;
}
img{
  border: none;
}
.el-col{
  text-align: center;
}

</style>
