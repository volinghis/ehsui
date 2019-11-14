
export default {
  mounted () {
    this.$store.dispatch(this.GlobalVars.computeWindowSizeMethodName)
    window.onresize = () => {
      return (() => {
        this.$store.dispatch(this.GlobalVars.computeWindowSizeMethodName)
      })()
    }
  }
}
