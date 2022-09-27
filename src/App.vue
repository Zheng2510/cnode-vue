<template>
    <div id="app">
        <Header></Header>
        <div class="main">
            <router-view name="SlideBar"></router-view><!--向右浮动所以放在main上面-->
            <router-view name="main"></router-view>

        </div>
    </div>
</template>

<script>

    import Header from './components/Header'
    // import PostList from "./components/PostList";
    // import Article from "./components/Article";

    export default {
        name: 'App',
        components: {
            Header
        }
    }
</script>

<style>
    .main {
        width: 80%;
        margin: 0 auto;
    }
</style>
