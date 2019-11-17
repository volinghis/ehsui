
export default {
  mounted () {
    for (let i = 0; i < this.$store.state.menuDatas.length; i++) {
      if (!this.$store.state.menuDatas[i].leaf) {
        this.$refs.menuEL.open(this.$store.state.menuDatas[i].code)
      }
    }
  },
  methods: {
    menuSelect (index) {
      this.$router.push({ name: index })
    }
  }

}
