<template>
  <!-- <el-popover
    v-model="visible"
    trigger="click"
    placement="bottomRight"
    overlayClassName="header-notice-wrapper"
    :getPopupContainer="() => $refs.noticeRef.parentElement"
    :autoAdjustOverflow="true"
    :arrowPointAtCenter="true"
    :overlayStyle="{ width: '300px', top: '50px' }"
  > -->
    <div>
        <el-tabs  :spinning="loading">
          <el-tab-pane tab="通知" key="1">
            123
          </el-tab-pane>
          <el-tab-pane tab="消息" key="2">
            123
          </el-tab-pane>
          <el-tab-pane tab="待办" key="3">
            123
          </el-tab-pane>
        </el-tabs>
      <span @click="fetchNotice" class="header-notice" ref="noticeRef">
        <el-badge count="12">
          <!-- <a-icon style="font-size: 16px; padding: 4px" type="bell" /> -->
        </el-badge>
      </span>
    </div>
  <!-- </el-popover> -->
</template>

<script>
export default {
  name: 'HeaderNotice',
  data () {
    return {
      loading: false,
      visible: false
    }
  },
  methods: {
    fetchNotice () {
      if (!this.visible) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 2000)
      } else {
        this.loading = false
      }
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="css">
  .header-notice-wrapper {
    top: 50px !important;
  }
</style>
<style lang="less" scoped>
  .header-notice{
    display: inline-block;
    transition: all 0.3s;

    span {
      vertical-align: initial;
    }
  }
</style>
