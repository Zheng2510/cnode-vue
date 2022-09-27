import Vue from 'vue'
import Router from 'vue-router'
import Article from "../components/Article";
import PostList from "@/components/PostList";
import UserInfo from "@/components/UserInfo";
import SlideBar from "@/components/SlideBar";
Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'root',
            path: '/',
            components: {
                main: PostList
            }
        },
        {
            name: 'post_count',
            path: '/topic/:id&author=:name',
            components: {
                main: Article,
                SlideBar:SlideBar//渲染两个组件
            }
        },
        {
            name: 'user_info',
            path: '/userinfo/:name',
            components: {
                main: UserInfo
            }
        }
    ]
})