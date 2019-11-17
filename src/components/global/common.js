import Store from '../../store'
import GlobalVars from './globalVars.js'

window.onresize = () => {
  return (() => {
    Store.dispatch(GlobalVars.computeWindowSizeMethodName)
  })()
}
