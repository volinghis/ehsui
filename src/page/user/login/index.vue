<template>
    <div class="logingPanel" >
        <div id="cloud1" class="cloud"></div>
        <div id="cloud2" class="cloud"></div>
        <div class="loginbody">

        <div class="systemlogo"></div>

                <div class="loginbox">
                    <el-form ref="loginForm" :model="loginForm" label-width="80px">
                        <el-form-item label="账号：" prop="username">
                         <el-input v-model="loginForm.username" ></el-input>
                        </el-form-item>
                    </el-form>
                </div>

        </div>

         <div class="loginbm">
            <span>
                适用浏览器：360、FireFox、Chrome、Safari、Opera、傲游、搜狗、世界之窗. 不支持IE8及以下浏览器
                <br>
                Copyright © 2019 东恒鑫源软件开发有限公司版权所有
            </span>
         </div>
    </div>
</template>
<script>
import datas from './datas'
export default datas
</script>
<style lang="scss" scoped>
@import './styles.scss';
</style>
