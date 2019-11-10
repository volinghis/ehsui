<template>
<div>
<el-row  >
      <el-col :span="12">
      <el-avatar  :size="150"  fit="fit" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573316031111&di=385743a637cec681a0d6ba53de6d15fb&imgtype=0&src=http%3A%2F%2Fs4.sinaimg.cn%2Fmw690%2F006NO2XVzy7rcbse191a3%26690"></el-avatar>
      </el-col>
      <el-col :span="12">
        <span>等级</span>
      </el-col>

    </el-row>
    <el-row  >
      <el-col :span="12">
 <el-avatar    fit="fit" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
      </el-col>
      <el-col :span="12">

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

img{
  border: none;
}
.el-col{
  text-align: center;
}

</style>
