<template>
  <div>
    <el-divider></el-divider>
    <div style="width:500px; margin: 40px auto 0;">
    <el-form :model="scrapStepForm"
             ref="scrapStepForm"
             :rules="rules"
             label-width="100px"
             size="small">
      <el-form-item label="申请人："
                    prop="code">
        <el-input v-model="scrapStepForm.code"
                  placeholder="申请人"></el-input>
      </el-form-item>
      <el-form-item label="申请部门："
                    prop="dept">
        <template>
          <el-select v-model="scrapStepForm.dept"
                     placeholder="请选择"
                     style="width:100%;">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </template>
      </el-form-item>
      <el-form-item label="报废名称"
                    prop="scrapName">
        <el-input v-model="scrapStepForm.scrapName"
                  placeholder="请填写报废名称"></el-input>
      </el-form-item>
      <el-form-item label="申请日期："
                    prop="date">
        <el-date-picker v-model="date"
                        type="date"
                        placeholder="选择日期"
                        style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="备注：">
        <el-input type="textarea"
                  :rows="2"
                  v-model="scrapStepForm.remark"
                  maxlength="100"
                  show-word-limit></el-input>
      </el-form-item>
    </el-form>
  </div>
    <el-divider></el-divider>
    <div style="text-align:center;">
      <el-button @click="cancel"
                 style="margin:10px;">撤销</el-button>
      <el-button type="primary"
                 @click="nextStep(scrapStepForm)"
                 style="margin:10px;">下一步</el-button>
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
      rules: {
        code: [
          { required: true, message: '请输入负责人', trigger: 'change' }
        ],
        dept: [
          { required: true, message: '请选择部门', trigger: 'change' }
        ],
        scrapName: [
          { required: true, message: '请输入报废名称', trigger: 'change' }
        ]
      },
      scrapStepForm: {
        type: '',
        date: '',
        dept: ''
      },
      date: new Date()
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
.el-textarea {
  padding: 0px;
}
</style>
