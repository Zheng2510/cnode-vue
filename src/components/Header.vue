<template>
    <div class="header">
        <router-link :to="{name:'root'}">
            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" >
        </router-link>

        <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "header-vue"
    }
</script>

<style scoped>/*scoped的意思是style只对当前组件有效*/
    .header{
        background-color: #5a5555;
        height: 50px;
    }
    img{
        max-width: 120px;
        margin-top: 10px;
        margin-left: 50px;
    }
    ul{
        list-style:none ;/*让·消失*/
        float: right;
        margin: 5px;
    }
    li{
        display: inline-block;
        margin-right: 5px;
        padding: 10px 10px;
    }
    a{
        text-decoration: none;/*清除文本下的一条线*/
        color:#ccc;
        font-size: 14px;
        text-shadow: none;
    }
</style>