<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="account-settings-info-left">
          <div class="account-center-avatarHolder">
            <el-avatar size="large"
                       src="../../../../assets/Avatar.svg"></el-avatar>
            <div class="user-infos">
              <div class="username">东恒测试</div>
              <div class="bio">海纳百川，有容乃大</div>
            </div>
          </div>
          <el-menu mode="vertical"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <el-menu-item key="/account/settings/base">
              <router-link :to="{ name: 'account-settings-base' }">
                个人首页
              </router-link>
            </el-menu-item>
            <el-menu-item key="/account/settings/security">
              <router-link :to="{ name: 'account-settings-security' }">
                我的任务
              </router-link>
            </el-menu-item>
            <el-menu-item key="/account/settings/custom">
              <router-link :to="{ name: 'account-settings-custom' }">
                我的资料库
              </router-link>
            </el-menu-item>
            <el-menu-item key="/account/settings/binding">
              <router-link :to="{ name: 'account-settings-binding' }">
                我的贡献度
              </router-link>
            </el-menu-item>
            <el-menu-item key="/account/settings/notification">
              <router-link :to="{ name: 'userBaseSetting' }">
                个人资料
              </router-link>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="19">
        <el-card style="width:100%"
                 shadow="hover"
                 :bordered="false">
          <router-view></router-view>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.account-center-avatarHolder {
  padding: 20px;
  border:1px solid #e9e9e9;
}
.user-infos {
  display: inline-block;
  text-align: center;
  line-height: 25px;
  margin-left: 30px;
  .username {
    font-size: 18px;
  }
}
</style>
