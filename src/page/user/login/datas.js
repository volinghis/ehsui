export default {
  data () {
    return {
      loginValue: ''
    }
  },
  methods: {
    login () {
      sessionStorage.setItem(this.GlobalVars.userToken, this.loginValue)
      location.href = '/'
    }
  }
}
