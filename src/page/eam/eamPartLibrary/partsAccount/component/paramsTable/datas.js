export default {
  methods: {
    handleClickEdit: function (row) {
      console.log(row)
    },
    handleClickDel: function (row) {
      console.log('准备删除')
    }
  },

  data () {
    return {
      tableData: [{
        name: '颜色',
        value: '灰色',
        remark: '灰中有黑色斑点'
      }, {
        name: '形状',
        value: '圆柱形',
        remark: '易变形'
      }, {
        name: '压力值',
        value: '1000Pa',
        remark: '<=1000Pa'
      }]
    }
  }
}
