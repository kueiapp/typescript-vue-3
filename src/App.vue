<template>
<main>
    <img alt="Vue logo" src="//hotnews.kueiapp.com/img/icons/192.png" />
    <hello-world msg="Welcome to Vue3 App sample" />
    <footer>powered by <a href="//kueipp.com">kueiapp</a></footer>
</main>
</template>

<script>
import HelloWorld from "./components/hello-world.vue";

export default {
    name: "app",
    components: {
        HelloWorld,
    },
};
</script>

<style lang="scss">
#app {
    font-family: "Noto Sans Japanese", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    footer {
        margin-top: 15px;
    }
}
</style>
