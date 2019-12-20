export default {
  methods: {
    tabClick (e) {
      this.$router.push({ name: e.name })
    },
    tabRemove (name) {
      this.$store.dispatch(this.GlobalVars.removeTabsMethodName, name)
    }
  },
  computed: {
    activeTab () {
      const route = this.$route
      return route.name
    }
  }
}
