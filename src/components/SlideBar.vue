<template>
    <div class="autherinfo">
        <div clas="authersummay">
            <div class="topbar">作者</div>
            <router-link :to="{
                        name:'user_info',
                        params:{
                        name:userinfo.loginname
                        }
                        }">
                <img :src="userinfo.avatar_url"><!--//图片要动态绑定否则显示不了-->

            </router-link>
        </div>
        <div class="recent_topics">
            <div class="topbar">作者最近主题</div>
            <ul>
                <li v-for="list in topcilimiby5" :key="list.id">
                    <router-link :to="{
name:'post_count',
params:{
    id:list.id,
    name:list.author.loginname
}
}">
                        {{list.title}}
                    </router-link>

                </li>
            </ul>
        </div>
        <div class="recent_replies">
            <div class="topbar">作者最近回复</div>
            <ul>
                <li v-for="list in replylimiby5" :key="list.id">
                    <router-link :to="{
name:'post_count',
params:{
    id:list.id,
    name:list.author.loginname
}
}">
                        {{list.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "SlideBar",
        data() {
            return {
                userinfo: {}//侧边栏里所有的对象
            }
        },
        methods: {
            getData() {
                this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                    .then(res => {//eslint-disable-line no-unused-vars
                        this.isLoading = false//加载成功就关闭动画
                        this.userinfo = res.data.data; //把值复制给post
                    })/*处理成功之后的方法*/
                    .catch(function (err) {
//处理返回失败后的问题
                        console.log(err)
                    })
            }
        },
        computed: {
            topcilimiby5() {
                if (this.userinfo.recent_topics) {
                    return this.userinfo.recent_topics.slice(0, 5)//提取前五个
                } else {
                    return this.userinfo.recent_topics;
                }
            },
           replylimiby5() {
                if (this.userinfo.recent_replies) {
                    return this.userinfo.recent_replies.slice(0, 5)//提取前五个
                } else {
                    return this.userinfo.recent_replies;
                }
            }
        },
        beforeMount() {
            this.isLoading = true//加载成功之前显示加载动画
            this.getData()

        }
    }
</script>

<style scoped>
    .authersummay, .recent_replies, .recent_topics {
        background-color: #fff;
    }

    .autherinfo {
        width: 328px;
        float: right;
        margin-top: 0;
    }

    li {
        padding: 3px 0;
    }

    .recent_replies ul, .recent_topics ul {
        margin-top: 0px;
        margin-bottom: 0px;
        list-style: none;
        padding-left: 14px;
    }

    ul a {
        font-size: 12px;
        text-decoration: none;
        color: #778087;
    }

    .topbar {
        padding: 10px;
        background-color: #f6f6f6;
        height: 16px;
        font-size: 12px;
        margin-top: 10px;
    }

    img {
        height: 48px;
        width: 48px;
        border-radius: 3px;
        margin: 10px;
    }

    .loginname {
        width: 100px;
        float: right;
        margin-top: 22px;
        margin-right: 159px;
        font-size: 14px;
    }

    .loginname a {
        text-decoration: none;
        color: #778087;
    }

    .authersummay .topbar {
        margin-top: 0px;
    }
</style>