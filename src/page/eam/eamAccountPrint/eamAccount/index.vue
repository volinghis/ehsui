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
                        :sm="24"
                        :xs="24">
                  <el-form-item label="设备编号:">
                    <el-input v-model="queryParam.deviceNum"
                              size="small"
                              ref="baseWidth" />
                  </el-form-item>
                </el-col>
                <el-col :md="6"
                        :sm="24"
                        :xs="24">
                  <el-form-item label="设备名称:">
                    <el-input v-model="queryParam.deviceNum"
                              size="small" />
                  </el-form-item>
                </el-col>
                <el-col :md="6"
                        :sm="24"
                        :xs="24">
                  <el-form-item label="负责人:">
                    <el-input v-model="queryParam.deviceName"
                              size="small" />
                  </el-form-item>
                </el-col>
                <el-col :md="6"
                        :sm="24"
                        :xs="24">
                  <el-form-item label="启用日期:">
                    <el-date-picker v-model="queryParam.date"
                                    size="small"
                                    style="width:100%;"
                                    placeholder="请输入启用日期" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :md="6"
                        :sm="24"
                        :xs="24">
                  <el-form-item label="使用状态:">
                    <el-select v-model="queryParam.useStatus"
                               clearable
                               style="width:100%"
                               size="small"
                               placeholder="请选择">
                      <el-option value="0"
                                 label="全部"></el-option>
                      <el-option value="1"
                                 label="关闭"></el-option>
                      <el-option value="2"
                                 label="运行中"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :md="6"
                        :sm="24"
                        :xs="24">
                  <el-form-item label="生产厂家:">
                    <el-input v-model="queryParam.factoryName"
                              size="small" />
                  </el-form-item>
                </el-col>
                <el-col :md="6"
                        :sm="24"
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
          <div class="table-list">
            <template>
              <el-table :data="tableData"
                        style="width: 100%"
                        size="medium">
                <el-table-column type="index"
                                 width="50"
                                 fixed="left"></el-table-column>
                <el-table-column type="selection"
                                 width="50"> </el-table-column>
                <el-table-column prop="deviceImg"
                                 label="设备图片"
                                 width="80">
                  <template slot-scope="scope">
                    <el-image class="table-td-deviceImg"
                              :src="scope.row.deviceImg"
                              :preview-src-list="[scope.row.deviceImg]"></el-image>
                  </template>
                </el-table-column>
                <el-table-column prop="deviceNum"
                                 label="设备编号"
                                 width="150"></el-table-column>

                <el-table-column prop="deviceName"
                                 label="设备名称"
                                 width="120"></el-table-column>
                <el-table-column prop="complete"
                                 label="资料完整度"
                                 sortable
                                 width="150">
                  <template slot-scope="scope">
                    <el-progress :percentage="scope.row.complete"
                                 :color="customColorMethod"></el-progress>
                  </template>
                </el-table-column>
                <el-table-column prop="factoryName"
                                 label="生产厂家"
                                 width="120"
                                 :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="supplier"
                                 label="供应商"
                                 width="120"></el-table-column>
                <el-table-column prop="installLocation"
                                 label="安装位置"
                                 width="120"></el-table-column>
                <el-table-column prop="runDate"
                                 label="启用日期"
                                 width="120"></el-table-column>
                <el-table-column prop="purchaseTime"
                                 label="采购时间"
                                 width="100"></el-table-column>
                <el-table-column prop="warranty"
                                 label="保修期"
                                 width="100"></el-table-column>
                <el-table-column prop="repairFrequency"
                                 label="检修频率"
                                 width="100"></el-table-column>
                <el-table-column prop="buyingPrice"
                                 label="采购价格"
                                 width="100"></el-table-column>
                <el-table-column prop="person"
                                 label="负责人"
                                 width="100"></el-table-column>
                <el-table-column prop="deviceStatus"
                                 label="设备状态"
                                 width="100"></el-table-column>
                <el-table-column fixed="right"
                                 align="center"
                                 label="操作"
                                 width="180">
                  <template slot-scope="scope">
                    <el-button @click="handleViewClick(scope.row)"
                               type="primary"
                               size="mini">查看</el-button>
                    <el-button type="warning"
                               @click="handleEditClick(scope.row)"
                               size="mini">补全/纠错</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="pagination"
                   style="text-align:right;margin-top:12px;">
                <el-pagination background
                               @size-change="handleSizeChange"
                               @current-change="handleCurrentChange"
                               :current-page="currentPage"
                               :page-sizes="[100, 200, 300, 400]"
                               :page-size="100"
                               layout="total, sizes, prev, pager, next, jumper"
                               :total="400">
                </el-pagination>
              </div>
            </template>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div class="refTabs">
      <el-tabs v-model="activeName"
               type="border-card"
               @tab-click="handleClick">
        <el-tab-pane label="检修记录"
                     name="first">
          <repair-record></repair-record>
        </el-tab-pane>
        <el-tab-pane label="关联备件"
                     name="second">关联备件</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import RepairRecord from './componet/repairRecord'
export default {
  components: {
    RepairRecord
  },
  data () {
    return {
      queryParam: {},
      form: {},
      activeName: 'first',
      currentPage: 4,
      tableData: [
        {
          deviceImg: 'https://i.loli.net/2019/11/07/2STd8zUw6x5hWaM.jpg',
          deviceNum: '2019100001',
          deviceName: '锅炉',
          complete: 90,
          factoryName: '上海辉腾设备公司',
          supplier: '西安宇辉',
          installLocation: '锅炉专业',
          runDate: '2019-05-02',
          purchaseTime: '2016-05-02',
          warranty: '5年',
          repairFrequency: '1月',
          buyingPrice: '20万元',
          person: '张三丰',
          deviceStatus: '正常'
        },
        {
          deviceImg:
            'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
          deviceNum: '2019100001',
          deviceName: '锅炉',
          complete: 80,
          factoryName: '上海辉腾设备公司',
          installLocation: '锅炉专业',
          supplier: '西安宇辉',
          runDate: '2019-05-02',
          purchaseTime: '2016-05-02',
          warranty: '5年',
          repairFrequency: '1月',
          buyingPrice: '20万元',
          person: '张三丰',
          deviceStatus: '正常'
        },
        {
          deviceImg: 'https://i.loli.net/2019/11/07/2STd8zUw6x5hWaM.jpg',
          deviceNum: '2019100001',
          deviceName: '锅炉',
          complete: 50,
          factoryName: '上海辉腾设备公司',
          installLocation: '锅炉专业',
          supplier: '西安宇辉',
          runDate: '2019-05-02',
          purchaseTime: '2016-05-02',
          warranty: '5年',
          repairFrequency: '1月',
          buyingPrice: '20万元',
          person: '张三丰',
          deviceStatus: '正常'
        },
        {
          deviceImg: 'https://i.loli.net/2019/11/07/2STd8zUw6x5hWaM.jpg',
          deviceNum: '2019100001',
          deviceName: '锅炉',
          complete: 20,
          factoryName: '上海辉腾设备公司',
          installLocation: '锅炉专业',
          supplier: '西安宇辉',
          runDate: '2019-05-02',
          purchaseTime: '2016-05-02',
          warranty: '5年',
          repairFrequency: '1月',
          buyingPrice: '20万元',
          person: '张三丰',
          deviceStatus: '正常'
        }
      ]
    }
  },
  mounted: function () {
  },
  methods: {
    customColorMethod: function (percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    handleViewClick: function (scope) {
      // 详情查看
      this.$router.push({ name: '23' })
    },
    handleEditClick: function (scope) {
      this.$router.push({ name: '22' })
    },
    handleClick: function (tab, event) {
    },
    handleSizeChange: function () {
    },
    handleCurrentChange: function (val) {
      console.log(`当前页: ${val}`)
    },
    // 保存编辑
    saveEdit: function () {
      this.editVisible = false
      // this.$message.success(`修改第 ${this.idx + 1} 行成功`)
      // this.$set(this.tableData, this.idx, this.form)
    }
  }
}
</script>
<style  lang="scss" scoped>
.operate {
  margin-bottom: 20px;
}
/deep/.el-pagination__sizes {
  margin: 0 30px 0 0;
}
</style>
