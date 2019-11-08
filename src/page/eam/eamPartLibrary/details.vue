<template>
    <div >
        <el-row :gutter="24"> 
            <el-col :md="24" :lg="6">
                <el-card shadow="hover">
                    <div slot="header" style="text-align:left;">
                        <span style="font-weight: bold;">备件详情</span>
                        <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
                    </div>
                    <div>
                        <el-row style="text-align:left;line-height:25px;">
                            <el-col>
                                <div class="demo-fit">
                                    <div class="block" fit="fit" :key="fit">
                                        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
                                        <span class="title">{{  }}</span>
                                    </div>
                                </div>
                            </el-col>
                            <el-col>
                                <span class="title">资料完整度:</span>
                                <el-progress :percentage="percentage" :color="customColors" ></el-progress>
                            </el-col>
                            <el-col :span="24" v-for="(item, index) in partData" :key="index">
                                <span class="title">{{ item.title }}：</span><span class="content">{{ item.content }}</span>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
            </el-col>
            <el-col :md="24" :lg="18">
                <el-card shadow="hover" style="height: 420px;">
                    <div slot="header" style="text-align:left;">
                        <span style="font-weight: bold;">相关设备</span>
                        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                    </div>
                    <div>
                        <el-row style="text-align:left;">
                            <template>
                                <el-table :data="tableData" style="width: 100%;"  height="320" size="medium">
                                    <el-table-column fixed prop="code" label="设备编号" width="100"> </el-table-column>
                                    <el-table-column fixed prop="name" label="设备名称" width="100"> </el-table-column>
                                    <el-table-column prop="type" label="设备型号" width="100"> </el-table-column>
                                    <el-table-column prop="model" label="设备类型" width="100"> </el-table-column>
                                    <el-table-column prop="factory" label="生产厂商" width="100"> </el-table-column>
                                    <el-table-column prop="supplier" label="供应商" width="100"> </el-table-column>
                                    <el-table-column prop="status" label="设备状态" width="100"> </el-table-column>
                                    <el-table-column prop="runDate" label="启用日期" width="100"> </el-table-column>
                                    <el-table-column prop="installLocation" label="安装位置" width="100"> </el-table-column>
                                    <el-table-column prop="purchaseTime" label="采购时间" width="100"> </el-table-column>
                                    <el-table-column prop="warranty" label="保修期" width="100"> </el-table-column>
                                    <el-table-column prop="servicelife" label="使用寿命" width="100"> </el-table-column>
                                    <el-table-column prop="repairFrequency" label="检修频率" width="100"> </el-table-column>
                                </el-table>
                            </template>
                        </el-row>
                    </div>
                </el-card><br>
                    <el-row style="text-align:left;" :gutter="12">
                        <el-col :span="15">
                            <el-card shadow="hover">
                                <div slot="header" style="text-align:left;">
                                    <span style="font-weight: bold;">备件领用记录</span>
                                </div>
                                <el-row >
                                    <div style="line-height:20px;font-size: small; height: 230px">
                                        <el-col >2019-10-1，张三在检修发动机中使用此备件</el-col>
                                        <el-col >2019-10-1，李四在检修锅炉中使用此备件</el-col>
                                        <el-col >2019-10-1，张三在检修热机中使用此备件</el-col>
                                        <el-col >2019-10-1，张三在检修发动机中使用此备件</el-col>
                                        <el-col >2019-10-1，李四在检修发动机中使用此备件</el-col>
                                        <el-col >2019-10-1，李四在检修热机中使用此备件</el-col>
                                        <el-col >2019-10-1，李四在检修锅炉中使用此备件</el-col>
                                        <el-col >2019-10-1，张三在检修锅炉中使用此备件</el-col>
                                        <el-col >2019-10-1，李四在检修发动机中使用此备件</el-col>
                                    </div>
                                </el-row>
                            </el-card>
                        </el-col>
                        <el-col :span="9">
                            <el-card shadow="hover">
                                <div slot="header" style="text-align:left;">
                                    <span style="font-weight: bold;">资料纠错/补全记录</span>
                                </div>
                                <el-row>
                                    <el-col>

                                        <el-table :data="tableData1" style="width: 100%" size="mini" height="230">
                                            <el-table-column prop="time" label="修改时间" width="100"> </el-table-column>
                                            <el-table-column prop="person" label="修改人员" width="100"> </el-table-column>
                                            <el-table-column prop="contribution" label="贡献度" width="150"> 
                                                <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
                                            </el-table-column>
                                        </el-table>
                                    </el-col>
                                </el-row>
                            </el-card>
                        </el-col>
                    </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: 3,
                disabled:'false',
                fit:'设备图片',
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                percentage: 60,
                customColor: '#409eff',
                customColors: [
                    {color: '#f56c6c', percentage: 20},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#5cb87a', percentage: 60},
                    {color: '#1989fa', percentage: 80},
                    {color: '#6f7ad3', percentage: 100}
                ],
                partData:[
                    {title:'备件编号',content:'FM-0001'},
                    {title:'备件名称',content:'阀门'},
                    {title:'备件类型',content:'阀门'},
                    {title:'备件类别',content:'阀门'},
                    {title:'备件型号',content:'20'},
                    {title:'规格',content:'阀门'},
                    {title:'品牌',content:'西安余辉'},
                    {title:'所在仓库',content:'1号仓库'},
                    {title:'价格',content:'1000RMB'},
                    {title:'单位',content:'个'},
                    {title:'数量',content:'56'},
                    {title:'生产厂商',content:'西安余辉'},
                    {title:'供应商',content:'西安余辉'},
                    {title:'物资类型',content:'A级物资'},
                    {title:'物资编码',content:'YH_FM_0001'},
                    {title:'使用寿命',content:'10年'},
                    {title:'保修期',content:'3年'},
                    {title:'购买时间',content:'2019-9-15'},
                    {title:'报废时间',content:'2029-9-15'},
                    {title:'备注',content:'暂无'},
                ],
                tableData: [{
                    code: '0001',
                    name: '发动机',
                    type:'FDJ_0001',
                    model:'发动机',
                    factory:'西安余辉',
                    supplier:'西安',
                    status:'正常',
                    runDate:'2019-10-31',
                    installLocation:'发动机',
                    purchaseTime:'2019-10-01',
                    warranty:'3年',
                    servicelife:'10年',
                    repairFrequency:'1/月/次'

                }, {
                    code: '0002',
                    name: '锅炉',
                    type:'FDJ_0001',
                    model:'锅炉',
                    factory:'西安余辉',
                    supplier:'西安',
                    status:'正常',
                    runDate:'2019-10-31',
                    installLocation:'发动机',
                    purchaseTime:'2019-10-01',
                    warranty:'3年',
                    servicelife:'10年',
                    repairFrequency:'1/月/次'

                }, {
                    code: '0003',
                    name: '起重机',
                    type:'FDJ_0001',
                    model:'起重机',
                    factory:'西安余辉',
                    supplier:'西安',
                    status:'正常',
                    runDate:'2019-10-31',
                    installLocation:'发动机',
                    purchaseTime:'2019-10-01',
                    warranty:'3年',
                    servicelife:'10年',
                    repairFrequency:'1/月/次'

                },  {
                    code: '0004',
                    name: '起重机',
                    type:'FDJ_0001',
                    model:'起重机',
                    factory:'西安余辉',
                    supplier:'西安',
                    status:'正常',
                    runDate:'2019-10-31',
                    installLocation:'发动机',
                    purchaseTime:'2019-10-01',
                    warranty:'3年',
                    servicelife:'10年',
                    repairFrequency:'1/月/次'

                }, {
                    code: '0005',
                    name: '起重机',
                    type:'FDJ_0001',
                    model:'起重机',
                    factory:'西安余辉',
                    supplier:'西安',
                    status:'正常',
                    runDate:'2019-10-31',
                    installLocation:'发动机',
                    purchaseTime:'2019-10-01',
                    warranty:'3年',
                    servicelife:'10年',
                    repairFrequency:'1/月/次'

                },  {
                    code: '0006',
                    name: '起重机',
                    type:'FDJ_0001',
                    model:'起重机',
                    factory:'西安余辉',
                    supplier:'西安',
                    status:'正常',
                    runDate:'2019-10-31',
                    installLocation:'发动机',
                    purchaseTime:'2019-10-01',
                    warranty:'3年',
                    servicelife:'10年',
                    repairFrequency:'1/月/次'

                }, {
                    code: '0007',
                    name: '阀门',
                    type:'FDJ_0001',
                    model:'阀门',
                    factory:'西安余辉',
                    supplier:'西安',
                    status:'正常',
                    runDate:'2019-10-31',
                    installLocation:'发动机',
                    purchaseTime:'2019-10-01',
                    warranty:'3年',
                    servicelife:'10年',
                    repairFrequency:'1/月/次'

                }],
                tableData1:[
                    {
                    time:'2019-9-9',
                    person:'张三',
                    contribution:'+10分'
                    },
                    {
                    time:'2019-9-19',
                    person:'李四',
                    contribution:'+10分'
                    },
                    {
                    time:'2019-9-20',
                    person:'王五',
                    contribution:'+10分'
                    },
                    {
                    time:'2019-9-22',
                    person:'lisi',
                    contribution:'+10分'
                    },
                    {
                    time:'2019-9-29',
                    person:'陈烨',
                    contribution:'+10分'
                    }
                ]
            }
        }
    }
  </script>
<style>
    .title{
        width: 200px;
        text-align: left;
        line-height: 20px;
        font-size: small;
        font-weight: bold;
    }
    .content{
        width: 200px;
        text-align: right;
        font-size: small;
    }
</style>





