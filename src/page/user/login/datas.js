export default {
  data () {
    return {
      remeberAccount: true,
      result: { message: '' },
      loginForm: {
        username: (localStorage.getItem(this.GlobalVars.userLocal)) ? localStorage.getItem(this.GlobalVars.userLocal) : '',
        password: '',
        captchCode: ''
      }
    }
  },
  methods: {
    initLayout(){
      document.querySelector('.loginBody').style.left = ((document.querySelector('.logingPanel').offsetWidth - 840) / 2) + 'px'
      document.querySelector('.loginBody').style.top = ((document.querySelector('.logingPanel').offsetHeight - 450) / 2) + 'px'
      document.querySelector('.footerBody').style.right = ((document.querySelector('.logingPanel').offsetWidth - 840) / 2) + 'px'
    },
    login  () {
      if (this.loginForm.username !== this.loginForm.password) {
        this.result.message = '用户名密码错误！'
        return
      }
      if (this.remeberAccount) {
        localStorage.setItem(this.GlobalVars.userLocal, this.loginForm.username)
      } else {
        localStorage.removeItem(this.GlobalVars.userLocal)
      }
      sessionStorage.setItem(this.GlobalVars.userToken, this.loginForm.username)
      this.$router.push({ name: 'home' })
    }
  },
  mounted () {
    this.initLayout()
    window.onresize = () => {
      return (() => {
        this.initLayout()
      })()
    }
  }

}
