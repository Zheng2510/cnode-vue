<template>
    <div id="app">
        <Header></Header>
        <PostList></PostList>
    </div>
</template>

<script>

    import Header from './components/Header'
    import PostList from "./components/postList";
    export default {
        name: 'App',
        components: {
            Header,
            PostList,
        }
    }
</script>

<style>

</style>
