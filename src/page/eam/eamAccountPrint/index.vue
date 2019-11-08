<template>
    <div>
        <el-card>
            <el-row>
                <el-col :md="24">
                    <el-form  :inline="true" :model="deviceForm" class="demo-form-inline" label-width="80px">
                        <el-form-item label="设备名称">
                            <el-input v-model="deviceForm.deviceName" placeholder="设备名称"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
          </el-row>
        </el-card>
        <el-card style="margin-top: 24px;">
            <el-row>
                <el-col :md="24">
                    设备列表
                </el-col>
          </el-row>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            deviceForm: {
             deviceName: ''
            }
        }

    },
    methods:{
        onSubmit() {
            alert('submit!');
        }

    }
}
</script>