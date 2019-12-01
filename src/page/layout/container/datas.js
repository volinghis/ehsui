
export default {
  methods: {
    resetPaddingStyle(){
      let boWidth=0;
      if(document.body.offsetWidth>parseInt(this.GlobalCss.serviceMaxWidth)){
        boWidth=(document.body.offsetWidth-parseInt(this.GlobalCss.serviceMaxWidth))/2;
      }else{
        boWidth=20;
      }
      let header=document.querySelectorAll(".el-header");
      if(header){
        for(let i=0;i<header.length;i++){
          header[i].style.paddingLeft=boWidth+"px";
          header[i].style.paddingRight=boWidth+"px";
        }
      }
      document.querySelector(".el-main").style.paddingLeft=boWidth+"px";
      document.querySelector(".el-main").style.paddingRight=boWidth+"px";
    }
  },
  mounted () {
    this.resetPaddingStyle();
    this.$store.dispatch(this.GlobalVars.computeWindowSizeMethodName)
    window.onresize = () => {
      this.$store.dispatch(this.GlobalVars.computeWindowSizeMethodName)
      this.resetPaddingStyle();
    }
  }
}
