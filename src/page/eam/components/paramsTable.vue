<template>
  <div class="tableClass">
    <el-row>
      <el-col :span="24">
        <el-table size="mini"
                  :data="eam_params.data"
                  style="width: 100%"
                  highlight-current-row>
          <el-table-column type="index"
                           align="center"></el-table-column>
          <el-table-column v-for="(item,index) in eam_params.columns"
                           :label="item.label"
                           :prop="item.prop"
                           :width="item.width"
                           :key="index"
                           align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.isSet">
                <el-input size="mini"
                          placeholder="请输入内容"
                          v-model="eam_params.sel[item.prop]"></el-input>
              </span>
              <span v-else>{{scope.row[item.prop]}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作"
                           width="170">
            <template slot-scope="scope">
              <el-button type="text"
                         @click.stop="saveRow(scope.row,scope.$index)" v-if="scope.row.isSet">保存
               <!-- {{scope.row.isSet?'保存':"修改"}} -->
              </el-button>
              <el-button type="text"
                         @click="editRow(scope.row,scope.$index)">
                编辑
              </el-button>
              <el-button type="text"
                         @click="deleteRow(scope.$index,eam_params.data)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24">
        <div class="el-table-add-row"
             style="width: 100%;color:#409EFF;cursor:pointer;"
             @click="add()"><span>+ 添加设备参数</span></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      eam_params: {
        sel: null, // 选中行
        columns: [{
          prop: 'paramName',
          label: '参数名称',
          width: 150
        },
        {
          prop: 'paramValue',
          label: '参数值',
          width: 150
        },
        {
          prop: 'date',
          label: '修改日期',
          width: 160
        },
        {
          prop: 'remark',
          label: '备注'
        }
        ],
        data: []
      }
    }
  },
  methods: {
    add () {
      for (let i of this.eam_params.data) {
        if (i.isSet) return this.$message.warning('请先保存当前编辑项')
      }
      let j = {
        'paramName': '',
        'paramValue': '',
        'date': '',
        'remark': '',
        'isSet': true
      }
      this.eam_params.data.push(j)
      this.eam_params.sel = JSON.parse(JSON.stringify(j))
    },
    saveRow (row, index) { // 保存
      let data = JSON.parse(JSON.stringify(this.eam_params.sel))
      for (let k in data) {
        row[k] = data[k] // 将sel里面的value赋值给这一行。ps(for....in..)的妙用，细心的同学发现这里我并没有循环对象row
      }
      row.isSet = false
    },
    editRow (row) { // 编辑
      for (let i of this.eam_params.data) {
        if (i.isSet) return this.$message.warning('请先保存当前编辑11项')
      }
      this.eam_params.sel = row
      row.isSet = true
    },
    deleteRow (index, rows) { // 删除
      rows.splice(index, 1)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.el-table-add-row {
  margin-top: 10px;
  width: 100%;
  height: 34px;
  border: 1px dashed #c1c1cd;
  border-radius: 1px;
  justify-content: center;
  display: flex;
  line-height: 34px;
}
.tableClass {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
</style>
