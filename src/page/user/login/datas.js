export default {
  data () {
    return {
      remeberAccount: true,
      loading: false,
      result: { message: '' },
      loginForm: {
        account: localStorage.getItem(this.GlobalVars.userLocal)
          ? localStorage.getItem(this.GlobalVars.userLocal)
          : '',
        password: '',
        username: '',
        captchCode: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 18, message: '长度在 4 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    initLayout () {
      document.querySelector('.loginBody').style.left =
        (document.querySelector('.logingPanel').offsetWidth - 840) / 2 + 'px'
      document.querySelector('.loginBody').style.top =
        (document.querySelector('.logingPanel').offsetHeight - 450) / 2 + 'px'
      document.querySelector('.footerBody').style.right =
        (document.querySelector('.logingPanel').offsetWidth - 840) / 2 + 'px'
    },
    login () {
      this.result.message = ''
      this.$refs['loginForm'].validate(valid => {
        if (valid) {
          this.loading = true
          this.$axios.post(this.GlobalVars.globalServiceServlet + '/auth/login/doLogin', this.loginForm)
            .then(res => {
              // 成功了, 更新数据(成功)
              this.loading = false
              console.log(res.data)
              if (res.data.resultType === 'ok') {
                // 数据存储
                if (this.remeberAccount) {
                  localStorage.setItem(
                    this.GlobalVars.userLocal,
                    this.loginForm.account
                  )
                } else {
                  localStorage.removeItem(this.GlobalVars.userLocal)
                }
                var sessionUser = { username: this.loginForm.username, account: this.loginForm.account }
                sessionStorage.setItem(
                  this.GlobalVars.userToken,
                  JSON.stringify(sessionUser)
                )
                this.$router.push({ name: 'home' })
              }
              this.result.message = res.data.message
            })
        }
      })
    }
  },
  mounted () {
    console.log(this.$axios)
    this.initLayout()
    window.onresize = () => {
      return (() => {
        this.initLayout()
      })()
    }
  }
}
