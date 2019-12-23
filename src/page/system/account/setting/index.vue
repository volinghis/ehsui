<template>
  <div class="container">
    <div class="account-settings-info-left">
      <el-tabs tab-position="left"
               v-model="activeName"
               :style="{height:(this.$store.state.contentHeight -30)+'px'}">
        <el-tab-pane label="个人首页"
                     name="first"></el-tab-pane>
        <el-tab-pane label="修改密码"
                     name="second">
          <ResetPassword />
        </el-tab-pane>
        <el-tab-pane label="消息管理"
                     name="third"></el-tab-pane>
        <el-tab-pane label="个人资料"
                     name="fourth">
          <BaseSetting />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import BaseSetting from './modules/baseSetting'
import ResetPassword from './modules/resetPassword'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    BaseSetting,
    ResetPassword
  },
  mounted () {
  },
  methods: {
    handleSelect () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "./styles.scss";
</style>
