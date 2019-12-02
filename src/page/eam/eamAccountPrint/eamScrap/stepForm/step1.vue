<template>
  <div>
    <el-divider></el-divider>
      <el-form :model="scrapStepForm" ref="scrapStepForm" class="table" label-width="100px" size="small" >
        <el-form-item label="申请人：" prop="code">
          <el-input v-model="scrapStepForm.code" placeholder="申请人"  ></el-input>
        </el-form-item>
        <el-form-item label="申请部门：" prop="name">
           <template>
            <el-select v-model="scrapStepForm.dept" placeholder="请选择" style="width:100%;z">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-form-item label="报废名称" prop="scrapName">
          <el-input v-model="scrapStepForm.scrapName" placeholder="请填写报废名称" ></el-input>
        </el-form-item>
        <el-form-item label="申请日期：" prop="date">
            <el-date-picker v-model="scrapStepForm.date" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input type="textarea" :rows="2" v-model="scrapStepForm.remark"  maxlength="100"  show-word-limit></el-input>
        </el-form-item>
      </el-form>
    <el-divider></el-divider>
    <div style="text-align:center;">
      <el-button type="primary" @click="nextStep(scrapStepForm)" style="margin:10px;">下一步</el-button>
      <el-button  @click="cancel" style="margin:10px;">撤销</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'partStepOne',
  data () {
    return {
      value: '1',
      options: [
        {
          value: '1',
          label: '电气专业'
        },
        {
          value: '2',
          label: '锅炉专业'
        },
        {
          value: '3',
          label: '汽机专业'
        }
      ],
      scrapStepForm: {
        type: '',
        date: '',
        dept: ''
      }
    }
  },
  methods: {
    nextStep: function (scrapStepForm) {
      this.$refs.scrapStepForm.validate((valid) => {
        if (valid) {
          this.$emit('nextStep')
        } else {
          return false
        }
      })
    },
    cancel: function () {
      this.$emit('finish')
      this.$router.push({ name: '24' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .table{
    width: 30%;
    position: relative;
    left: 33%;
  }
  .el-textarea{
    padding: 0px;
  }
</style>
