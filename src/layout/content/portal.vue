<template>
  <div>
    <el-row :gutter="5">
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>

    <el-row :gutter="5">
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div slot="header" style="text-align:left;">
            <span>十大所搜关键词</span>
          </div>
          <template>
            <chart :options="options" :auto-resize="true"></chart>
          </template>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import "echarts/lib/chart/pie";
export default {
  methods:{
      genData(count)  {
        for (var i = 0; i < count; i++) {
            name = Math.random() > 0.65
                ? this.makeWord(4, 1) + '·' + this.makeWord(3, 0)
                : this.makeWord(2, 1);
            this.legendData.push(name);
            this.seriesData.push({
                name: name,
                value: Math.round(Math.random() * 100000)
            });
            this.selected[name] = i < 6;
        }
    },
     makeWord(max, min) {
       console.log("123");
       console.log(this.nameList.length);
            var nameLen = Math.ceil(Math.random() * max + min);
            var name = [];
            for (var i = 0; i < nameLen; i++) {
                name.push(this.nameList[Math.round(Math.random() * this.nameList.length - 1)]);
            }
            return name.join('');
      }
  },
  mounted : function() {
    this.genData(10)
    this.options={
          title : {
              text: '同名数量统计',
              subtext: '纯属虚构',
              x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              type: 'scroll',
              orient: 'vertical',
              right: 10,
              top: 20,
              bottom: 20,
              data: this.legendData,

              selected: this.selected
          },
          series : [
              {
                  name: '姓名',
                  type: 'pie',
                  radius : '55%',
                  center: ['40%', '50%'],
                  avoidLabelOverlap:false,
                  data: this.seriesData,
                  itemStyle: {
                     normal: {
                    show: false,
                    position: 'center'
                },
                      emphasis: {
                        show: false,
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      }
  },
  data() {
    return {
      legendData:[],
      seriesData:[],
      selected:{},
      nameList: [
            '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
      ],
 
      options : {}
    };
  }
};
</script>
<style>
.el-row {
  margin-bottom: 5px;
  width: 100%;
}

.el-row：last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  height: 500px;
}
</style>