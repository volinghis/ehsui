<template>
  <div>
    <el-card shadow="hover">
      <el-row>
        <el-col :md="24">
          <div class="table-page-search-wrapper">
            <el-form label-position="right"
                     label-width="80px">
              <el-row :gutter="20">
                <el-col :md="6"
                        :xs="24">
                  <el-form-item label="资料类别:">
                    <el-select v-model="queryParam.useStatus"
                               size="small"
                               style="width:320px;"
                               placeholder="请选择">
                      <el-option value="0"
                                 label="说明书"></el-option>
                      <el-option value="1"
                                 label="质保卡"></el-option>
                      <el-option value="2"
                                 label="操作手册"></el-option>
                      <el-option value="3"
                                 label="维修经验"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :md="6"
                        :xs="24">
                  <el-form-item label="文件名称:">
                    <el-input v-model="queryParam.fileName"
                              size="small" />
                  </el-form-item>
                </el-col>
                <el-col :md="6"
                        style="padding-top:5px;">
                  <el-button type="primary"
                             size="small"
                             @click="$refs.table.refresh(true)"
                             icon="el-icon-search">查询</el-button>
                  <el-button size="small"
                             @click="() => (queryParam = {})">重置</el-button>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="operate">
            <el-button type="primary"
                       size="small"
                       @click="dialogFormVisible=true"
                       icon="el-icon-plus">添加</el-button>
          </div>
          <div class="table-list">
            <el-table :data="tableData"
                      style="width: 100%"
                      border
                      size="medium">
              <el-table-column type="index"
                               width="50"></el-table-column>
              <el-table-column prop="type"
                               label="类型"
                               width="80">
                <template slot-scope="scope">
                  <el-image class="table-td-deviceImg"
                            :src="scope.row.deviceImg"
                            :preview-src-list="[scope.row.deviceImg]"></el-image>
                </template>
              </el-table-column>
              <el-table-column prop="fileName"
                               label="文件名称"></el-table-column>

              <el-table-column prop="refDevice"
                               label="关联设备"></el-table-column>
              <el-table-column prop="category"
                               label="资料类别">
              </el-table-column>
              <el-table-column prop="person"
                               label="上传人"></el-table-column>
              <el-table-column prop="uploadTime"
                               sortable
                               label="上传时间"></el-table-column>
              <el-table-column fixed="right"
                               align="center"
                               label="操作">
                <template slot-scope="scope">
                  <el-button @click="handleViewClick(scope.row)"
                             type="primary"
                             icon="el-icon-camera"
                             size="mini">预览</el-button>
                  <el-button type="success"
                             icon="el-icon-download"
                             @click="handleDownLoadClick(scope.row)"
                             size="mini">下载</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagination"
                 style="float:right;margin-top:12px;">
              <el-pagination background
                             layout="total, prev, pager, next"
                             :current-page="1"
                             :page-size="10"
                             :total="100"
                             @current-change="handlePageChange"></el-pagination>
            </div>
            <!--新增弹框-->
            <div class="dialogForm">
              <el-dialog title="新增设备资料"  width="30%"
                         :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="资料类别:" :label-width="formLabelWidth">
                    <el-select v-model="queryParam.useStatus"
                               size="small"
                               style="width:320px;"
                               placeholder="请选择">
                      <el-option value="0"
                                 label="说明书"></el-option>
                      <el-option value="1"
                                 label="质保卡"></el-option>
                      <el-option value="2"
                                 label="操作手册"></el-option>
                      <el-option value="3"
                                 label="维修经验"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="选择设备:"  :label-width="formLabelWidth">
                    <el-select v-model="form.region" style="width:320px;"
                               placeholder="请选择活动区域">
                      <el-option label="设备1"
                                 value="shanghai"></el-option>
                      <el-option label="设备2"
                                 value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="上传资料:" :label-width="formLabelWidth">
                    <el-upload class="upload-demo"
                               action="https://jsonplaceholder.typicode.com/posts/"
                               :on-change="handleChange"
                               :file-list="fileList">
                      <el-button size="small"
                                 type="primary">点击上传</el-button>
                      <div slot="tip"
                           class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </el-form-item>
                </el-form>
                <div slot="footer"
                     class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary"
                             @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      queryParam: {},
      form: {},
      dialogFormVisible: false,
      formLabelWidth: '100px',
      tableData: [
        {
          deviceImg: '../../assets/image/word.png',
          fileName: '2019100001',
          refDevice: '锅炉',
          category: '说明书',
          person: '王小虎',
          uploadTime: '2019-05-02'
        },
        {
          deviceImg: 'https://i.loli.net/2019/11/07/2STd8zUw6x5hWaM.jpg',
          fileName: '2019100001',
          refDevice: '锅炉',
          category: '说明书',
          person: '王小虎',
          uploadTime: '2019-05-02'
        },
        {
          deviceImg: 'https://i.loli.net/2019/11/07/2STd8zUw6x5hWaM.jpg',
          fileName: '2019100001',
          refDevice: '锅炉',
          category: '说明书',
          person: '王小虎',
          uploadTime: '2019-05-02'
        }
      ]
    }
  },
  mounted: function () { },
  methods: {
    customColorMethod (percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    handleViewClick (scope) {
      // 预览
    },
    handleDownLoadClick (scope) {
      alert('准备下载当前资料')
    },
    handlePageChange () {
    }
  }
}
</script>
<style scoped>
.operate {
  margin-bottom: 20px;
}
.el-card {
  border: 1px solid #ffffff;
}
</style>
