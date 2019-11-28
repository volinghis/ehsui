<template>
<Calendar
      style="width:210px;"
      ref="Calendar"
    ></Calendar>
</template>
<script>
import Calendar from "vue-calendar-component";//引入vue日历
  export default {
    components: {
      Calendar
    },
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
<style lang="scss" >
.wh_isToday{
  color: red;
}
.wh_jiantou2{
  margin-left: -20px;
}
.wh_content_li{
  margin-left: -10px;
}
.wh_item_date{
  width: 20px !important;
  height: 20px !important;
  font-size: 6px !important;
}
.wh_content_item{
      height: 30px !important;

}
.wh_top_tag{
    width: 20px !important;
  height: 20px !important;
    font-size: 6px !important;
}
.wh_content_all li {
  font-size: 6px !important;
}
</style>