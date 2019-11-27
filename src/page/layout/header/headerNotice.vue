<template>
  <el-popover placement="bottom-start" width="400" trigger="click" class="infomessage">
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch="stretch">
      <el-tab-pane label="通知" name="first">通知</el-tab-pane>
      <el-tab-pane label="消息" name="second">消息</el-tab-pane>
      <el-tab-pane label="待办" name="third">待办</el-tab-pane>
    </el-tabs>
    <el-badge :value="12" slot="reference">
      <span class="el-dropdown-link ">
        <i class="el-icon-bell" ></i>
      </span>
    </el-badge>
  </el-popover>
</template>
<script>
export default {
  data () {
    return {
      stretch: true,
      activeName: 'first'
    }
  },
  methods: {
    handleClick () {
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-icon-bell{
    color: #fff;
    font-size: initial;
  }
</style>
