<template>
    <chart :options="options" :auto-resize="true"></chart>
</template>
<script>
import 'echarts/lib/chart/pie'
export default {
  mounted: function () {
    this.options = {
      series: [
        {
          name: '访问来源',
          type: 'pie',
          data: [
            { value: 335, name: '输煤机' },
            { value: 310, name: '气阀检修' },
            { value: 234, name: '常用消缺' },
            { value: 135, name: '检修过程' },
            { value: 342, name: '输煤机' },
            { value: 555, name: '电梯' },
            { value: 131, name: '运输带' },
            { value: 89, name: '风机' },
            { value: 456, name: '锅炉' },
            { value: 432, name: '除尘' }
          ]
        }
      ]
    }
  },
  data () {
    return {
      options: {}
    }
  }
}
</script>
<style scoped>
.echarts{
  width:100%;
}
</style>
