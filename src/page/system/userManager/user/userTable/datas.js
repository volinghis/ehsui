import userForm from '../userForm/index.vue'
export default {
  components: {
    userForm
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },
  data () {
    return {
      dialogVisible: false,
      enable: true,
      tableData: [{
        account: 'zhaol',
        name: '赵子龙',
        position: '上海',
        gender: '男',
        email: '2786890@qq.com',
        mobilePhone: 13389227777
      }, {
        account: 'wwt',
        name: '窝窝头',
        position: '上海',
        gender: '男',
        email: '2786890@qq.com',
        mobilePhone: 13389227777
      }, {
        account: 'qjj',
        name: '一块钱',
        position: '上海',
        gender: '男',
        email: '2786890@qq.com',
        mobilePhone: 13389227777
      }, {
        account: 'qjj',
        name: '四个',
        position: '上海',
        gender: '男',
        email: '2786890@qq.com',
        mobilePhone: 13389227777
      }, {
        account: 'heihei',
        name: '嘿嘿',
        position: '上海',
        gender: '男',
        email: '2786890@qq.com',
        mobilePhone: 13389227777
      }]
    }
  }
}
