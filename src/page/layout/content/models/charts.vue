<template>
   <div>12312</div>
</template>
<script>
require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/title')
// 引入legend组件
require('echarts/lib/component/legend')
export default {
  mounted: function () {
    this.options = {
      title: {
        text: '搜索热度统计',
        subtext: '统计当月搜索情况',
        x: 'center'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['输煤机', '气阀检修', '常用消缺', '检修过程', '磨煤机']
      },
      series: [
        {
          name: '搜索热度',
          type: 'pie',
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '20'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },

          data: [
            { value: 335, name: '输煤机' },
            { value: 310, name: '气阀检修' },
            { value: 234, name: '常用消缺' },
            { value: 135, name: '检修过程' },
            { value: 342, name: '磨煤机' },
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
