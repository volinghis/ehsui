<template>
  <div>
    <div :style="{height:GlobalCss.headerHeight,width:GlobalCss.sideBarWidth,float:'left'}"><img :style="{height:GlobalCss.headerHeight,width:GlobalCss.sideBarWidth}" src="../../../assets/logo.svg"/></div>
    <div :style="{height:GlobalCss.headerHeight,float:'right',verticalAlign:'middle'}">   <img fit="fill" :style="{height:(parseInt(GlobalCss.headerHeight)-10)+'px',borderRadius:'50%',width:(parseInt(GlobalCss.headerHeight)-10)+'px', marginTop:'5px',marginRight:'5px'}" src="../../../assets/Avatar.svg"/></div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
</style>
