export default {
  methods: {
    tabClick (e) {
      this.$router.push({ name: e.name })
    },
    tabRemove (name) {
      for (var i = this.$store.state.selectedTabs.length - 1; i > 0; i--) {
        if (this.$store.state.selectedTabs[i].name === name) {
          this.$store.state.selectedTabs.splice(i, 1)
          this.$router.push({ name: this.$store.state.selectedTabs[i - 1].name })
        }
      }
    }
  },
  computed: {
    activeTab () {
      const route = this.$route
      return route.name
    }
  }
}
