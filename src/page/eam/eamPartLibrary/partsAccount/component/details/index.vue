<template>
  <div style="padding:0px 20px;">
    <el-form ref="form"
             :model="form"
             :rules="rules"
             label-position="top"
             label-width="80px">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="item-block">
            <div class="item-title">设备图片</div>
            <el-image style="width: 150px; height: 150px"
                      src="https://i.loli.net/2019/11/07/2STd8zUw6x5hWaM.jpg"
                      fit="fill"></el-image>
          </div>
          <!--检修质量标准-->
          <div class="item-block">
            <div class="item-title">检修质量标准</div>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       multiple
                       :limit="3"
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="mini"
                         plain
                         type="primary"
                         icon="el-icon-upload">上传文件</el-button>
            </el-upload>
          </div>
          <!--设备说明书-->
          <div class="item-block">
            <div class="item-title">设备说明书</div>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       multiple
                       :limit="3"
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="mini"
                         plain
                         type="primary"
                         icon="el-icon-upload">上传文件</el-button>
            </el-upload>
          </div>
          <!--设备操作手册-->
          <div class="item-block">
            <div class="item-title">设备操作手册</div>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       multiple
                       :limit="3"
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="mini"
                         plain
                         type="primary"
                         icon="el-icon-upload">上传文件</el-button>
            </el-upload>
          </div>
        </el-col>
        <el-col :span="18">
           <div class="item-block right">
            <div class="item-title">备件基本信息</div>
            <el-divider></el-divider>
            <div class="contents">
              <el-row>
                <el-col :span="12"
                        v-for="(item, index) in eamInfos"
                        :key="index">
                  <span class="info-title">{{ item.title }}</span>:&nbsp;<span class="info-content">{{ item.content }}</span>
                </el-col>
             </el-row>
            </div>
          </div>
          <!--设备参数-->
          <div class="item-block right">
            <div class="item-title">备件主要参数</div>
            <el-divider></el-divider>
            <params-table></params-table>
          </div>
          <!--备件修改信息-->
          <div class="item-block right">
            <div class="item-title">备件修改信息记录</div>
            <el-divider></el-divider>
            <modify-record></modify-record>
          </div>
          <div class="item-block">
            <div class="item-title">资料完整度</div>
            <el-row style="width:50%">
              <el-card shadow="never">
                <el-col :span="12">
                  <el-progress type="circle"
                               :percentage="75"
                               :stroke-width="7">
                  </el-progress>
                </el-col>
                <el-col :span="12">
                  <span>当前设备资料的完整度为75%，请尽快完善资料</span>
                </el-col>
              </el-card>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-form-item style="text-align: center;">
        <el-button size="small"
                   type="primary"
                   @click="handleBack">返回</el-button>
        <el-button size="small"
                   @click="handlePrint">打印</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import datas from './datas'
export default datas
</script>
<style lang="scss" scoped>
@import './styles.scss';
</style>
