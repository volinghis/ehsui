
export default {
  props: {
    'disabled': Boolean,
    'clearable': { type: Boolean, default: true },
    'show-all-levels': { type: Boolean, default: false },
    'propOrgValue': String,
    'props': Object
  },
  model: {
    prop: 'propOrgValue'
  },
  methods: {
    clearCheckedNodes () {
      this.$refs['orgCasCader'].clearCheckedNodes()
    },
    getCheckedNodes (leafOnly) {
      return this.$refs['orgCasCader'].getCheckedNodes(leafOnly)
    },
    change (v) {
      this.$emit('change', v)
    },
    expandChange (v) {
      this.$emit('expand-change', v)
    },
    blur (e) {
      this.$emit('blur', e)
    },
    focus (e) {
      this.$emit('focus', e)
    },
    visibleChange (v) {
      this.$emit('visible-change', v)
    },
    removeTag (v) {
      this.$emit('remove-tag', v)
    }
  },
  mounted () {
  },
  data () {
    return {
      orgValue: this.propOrgValue,
      defaultProps: Object.assign({ multiple: false, checkStrictly: true, emitPath: false }, this.props),
      options: [{
        value: 'rootOrg',
        label: '大唐韩城第二发电厂有限公司',
        children: [{
          value: 'equipmentDivision',
          label: '设备部',
          children: [{
            value: 'a38f38f0-0703-4596-aa47-515a12e889f5',
            label: '赵子龙'
          }]
        }]
      }]
    }
  }
}
