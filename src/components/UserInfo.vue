<template>
    <div class="UserInfo">
        <!--    在数据未返回的时候,显示正在加载的gif-->
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif">
        </div>
        <div class="userInfomation" v-else>
            <section>
                <img :src="userinfo.avatar_url">
                <span>{{userinfo.loginname}}</span>
                <p>{{userinfo.score}}积分</p>
                <p>注册时间:{{userinfo.create_at | formatDate}}</p>
            </section>
            <div class="replies">
                <p>回复的主题</p>
                <ul>
                    <li v-for="item in userinfo.recent_replies" :key="item.id">
                        <router-link :to="{
name:'post_count',
params:{
    id:item.id
}
}">
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="topics">
                <p>创建的主题</p>
                <ul>
                    <li v-for="item in userinfo.recent_topics" :key="item.id">
                    <router-link :to="{
name:'post_count',
params:{
    id:item.id
}
}">

                        {{item.title}}
                    </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                isLoading: false,
                userinfo: {}//表示点击头像进来的所有信息
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
        beforeMount() {
            this.isLoading = true//加载成功之前显示加载动画
            this.getData()
        }
    }
</script>

<style scoped>
    .userInfomation {
        background: white;
        width: 75%;
        margin: 10px auto;
    }

    .userInfomation section {
        padding: 12px;
    }

    .userInfomation img {
        width: 30px;
    }

    .userInfomation li {
        list-style: none;
    }

    .userInfomation .replies,
    .userInfomation .topics {
        font-size: 0.72rem;
        border-top: 10px #DDDDDD solid;
    }

    .userInfomation > div > p {
        padding: 12px 0 12px 12px;
        background-color: rgba(212, 205, 205, 0.17);
        font-size: 0.75rem;
        margin: 0;
    }

    .userInfomation > div > ul > li {
        padding: 4px 0 4px 12px;
        white-space: nowrap;
        font-size: 0.72rem;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 30px;
        vertical-align: middle;
    }

    .userInfomation > div > ul > li > a {
        color: #094E99;
        text-decoration: none;
    }
</style>