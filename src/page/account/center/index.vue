<template>
  <div class="page-header-wrapper-grid-content-main">
    <el-row :gutter="24">
      <el-col :md="24"
              :lg="7">
        <el-card>
          <div class="account-center-avatarHolder">
            <div class="avatar">
              <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            </div>
            <div class="username">东恒测试</div>
            <div class="bio">海纳百川，有容乃大</div>
          </div>
          <div class="account-center-detail">
            <p>
              <i class="el-icon-user"></i>高级工程师
            </p>
            <p>
              <i class="el-icon-office-building"></i>设备部－电气专业
            </p>
            <p>
              <i class="el-icon-location-outline"></i><span>陕西省</span><span>西安市</span>
            </p>
          </div>
          <el-divider></el-divider>
          <div class="account-center-tags">
            <div class="tagsTitle">标签</div>
            <div>
              <el-tag :key="tag"
                      v-for="tag in tags"
                      closable
                      :disable-transitions="false"
                      @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              <el-input class="input-new-tag"
                        v-if="inputVisible"
                        v-model="inputValue"
                        ref="saveTagInput"
                        size="small"
                        @keyup.enter.native="handleInputConfirm"
                        @blur="handleInputConfirm">
              </el-input>
              <el-button v-else
                         class="button-new-tag"
                         size="small"
                         @click="showInput">+ New Tag</el-button>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="account-center-contribute">
            <div class="contributeTitle">贡献</div>
            <div class="members">
              <el-row>
                <el-col :span="12"
                        v-for="(item, index) in contributes"
                        :key="index">
                  <span class="member">{{ item.title }}</span>:<span class="member">{{ item.content }}</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="24"
              :lg="17">
        <el-card style="width:100%"
                 :bordered="false"
                 :tabList="tabListNoTitle"
                 :activeTabKey="noTitleKey"
                 @tabChange="key => handleTabChange(key, 'noTitleKey')">
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: ['体重不轻', '歌舞青春颜值担当', '海纳百川'],
      inputVisible: false,
      inputValue: '',

      tabListNoTitle: [{
        key: 'article',
        tab: '文章'
      }, {
        key: 'app',
        tab: '应用'
      }
      ],
      noTitleKey: 'article',
      contributes: [
        { title: '本季度分数', content: '2100' },
        { title: '排名', content: '第8名' },
        { title: '本季度贡献', content: '' },
        { title: '添加设备', content: '13' },
        { title: '修改资料', content: '20' },
        { title: '发表文章', content: '5篇' },
        { title: '阅读量累计', content: '2011' },
        { title: '发现故障', content: '3次' },
        { title: '在线时间', content: '6小时' }
      ]
    }
  },
  methods: {

    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },

    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.focus()// 获取焦点
      })
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.tags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },

    handleTabChange (key, type) {
      this[type] = key
    }
  }
}
</script>

<style scoped>
.page-header-wrapper-grid-content-main {
  width: 100%;
  height: 100%;
}
.username {
  color: rgba(0, 0, 0, 0.85);
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 4px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.tagsTitle,
.contributeTitle {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 12px;
  text-align: left;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.account-center-detail {
  text-align: left;
}

.avatar {
  margin: 0 auto;
  width: 104px;
  height: 104px;
  margin-bottom: 20px;
  border-radius: 50%;
  overflow: hidden;
}

img {
  height: 100%;
  width: 100%;
}
.account-center-avatarHolder {
  text-align: center;
  margin-bottom: 24px;
}

.members {
  text-align: left;
  line-height: 20px;
  display: inline-block;
}
</style>
