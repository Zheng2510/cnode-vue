<template>
    <div>
        <!--   在数据未返回的时候显示加载动画-->
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif">
        </div>
        <!--下面代表主题列表-->
        <div>
            <ul>
                <li>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostList",
        data(){
            return {
                isLoading:false
            }
        },

    }
</script>

<style scoped>

</style>