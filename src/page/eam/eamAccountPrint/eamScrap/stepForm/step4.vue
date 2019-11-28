<template>
  <div style="text-align:center;">
    <el-form style="margin: 40px auto 0;">
      <div style="max-width: 100%;" >
        <i class="el-icon-circle-check" style="color:#67C23A;font-size:58px;"></i><br><br><br>
        <span style="font-size:24px;">操作成功,申请已经进入审核中</span><br>
        <span style="font-size:14px;color:#909399">请等待申请审核结果</span>
      </div><br>
    </el-form>
    <el-divider></el-divider>
    <div>
      <el-button type="primary" @click="finish">继续添加</el-button>
      <el-button type="primary" @click="over">完成</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'partStepFour',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    },
    over () {
      this.$emit('finish')
      this.$router.push({ name: '24' })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
