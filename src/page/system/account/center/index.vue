<template>
  <div class="page-header-wrapper-grid-content-main">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-card shadow="hover">
          <UserInfo></UserInfo>
        </el-card>
      </el-col>
      <el-col :md="19">
        <el-row :gutter="40"
                class="panel-group">
          <el-col :xs="12"
                  :sm="12"
                  :lg="6"
                  class="card-panel-col">
            <div class="card-panel task">
              <div class="card-panel-icon-wrapper icon-task">
                <i class="fa fa-clock-o fa-5x"></i>
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  我的任务
                </div>
                <div class="card-panel-num">1133</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="12"
                  :sm="12"
                  :lg="6"
                  class="card-panel-col">
            <div class="card-panel approval">
              <div class="card-panel-icon-wrapper icon-approval">
                <i class="fa fa-shield fa-5x"></i>
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  我的审批
                </div>
                <div class="card-panel-num">1133</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="12"
                  :sm="12"
                  :lg="6"
                  class="card-panel-col">
            <div class="card-panel contribution">
              <div class="card-panel-icon-wrapper icon-contribution">
                <i class="fa fa-star-o fa-5x"></i>
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  我的贡献度
                </div>
                <div class="card-panel-num">45</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="12"
                  :sm="12"
                  :lg="6"
                  class="card-panel-col">
            <div class="card-panel notice">
              <div class="card-panel-icon-wrapper icon-notice">
                <i class="fa fa-send-o fa-5x"></i>
              </div>
              <div class="card-panel-description">
                <div class="card-panel-text">
                  我的消息
                </div>
                <div class="card-panel-num">45</div>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row style="margin-top:20px;"
                :gutter="10">
          <el-col :span="15">
            <el-card shadow="hover">
              <div slot="header"
                   class="clearfix">
                <label>我的任务</label>
                <i class="fa fa-angle-double-right fa-2x"></i>
              </div>
              <MyTask></MyTask>
            </el-card>
          </el-col>
          <el-col :span="9">
            <el-card shadow="hover">
              <div slot="header"
                   class="clearfix">
                <label>消息提醒</label>
                <i class="fa fa-angle-double-right fa-2x"></i>
              </div>
              <ul>
                <li>1111111</li>
                <li>333333</li>
                <li>222222</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import UserInfo from './modules/userInfo'
import MyTask from './modules/myTask'
export default {
  data () {
    return {
      notices: [{ notices: '1111111' }, { notices: '2222222' }]
    }
  },
  components: {
    UserInfo,
    MyTask
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
/deep/.el-card__header {
  padding: 8px 18px;
  background-color: #34dbc1;
  i {
    float: right;
    cursor: pointer;
  }
}

.panel-group {
  // margin-top: 10px;

  .card-panel-col {
    margin-bottom: 10px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-task {
        background: #40c9c6;
      }

      .icon-approval {
        background: #36a3f7;
      }

      .icon-notice {
        background: #f4516c;
      }

      .icon-contribution {
        background: #f2bb5e;
      }
    }

    .icon-task {
      color: #40c9c6;
    }

    .icon-approval {
      color: #36a3f7;
    }

    .icon-notice {
      color: #f4516c;
    }

    .icon-contribution {
      color: #f2bb5e;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 14px 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 20px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    i{
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
