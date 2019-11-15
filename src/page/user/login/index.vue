<template>
    <div>
        <el-input v-model="loginValue"  placeholder="请输入内容"></el-input>
        <el-button @click="login">登录</el-button>
    </div>
</template>
<script>
import datas from './datas'
export default datas
</script>
