export default {
  data () {
    return {
      remeberAccount: true,
      loginForm: {
        username: localStorage.getItem(this.GlobalVars.userLocal),
        password: '',
        captchCode: ''
      }
    }
  },
  methods: {
    login  () {
      if (this.remeberAccount) {
        localStorage.setItem(this.GlobalVars.userLocal, this.loginForm.username)
      } else {
        localStorage.removeItem(this.GlobalVars.userLocal)
      }
      sessionStorage.setItem(this.GlobalVars.userToken, this.loginForm.username)
      location.href = '/'
    }
  },
  mounted () {
    var offset1 = 450
    var offset2 = 0
    var mainwidth = document.body.offsetWidth
    setInterval(function flutter () {
      if (offset1 >= mainwidth) {
        offset1 = -580
      }
      if (offset2 >= mainwidth) {
        offset2 = -580
      }
      offset1 += 1.1
      offset2 += 1
      document.querySelector('#cloud1').style.left = offset1 + 'px '
      document.querySelector('#cloud2').style.left = offset2 + 'px '
    }, 70)

    this.$store.dispatch(this.GlobalVars.computeWindowSizeMethodName)
    document.querySelector('.loginbox').style.position = 'absolute'
    document.querySelector('.loginbox').style.left = ((document.body.offsetWidth - 692) / 2) + 'px'
    window.onresize = () => {
      return (() => {
        document.querySelector('.loginbox').style.left = ((document.body.offsetWidth - 692) / 2) + 'px'
      })()
    }
  }

}
