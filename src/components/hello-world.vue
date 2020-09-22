<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <news-item v-for="news in state.newsList" :key="news.index" :title="news.title" :description="news.og_description" :imgSrc="news.og_image" :link="news.link" />
</div>
</template>

<script>
import {
    searchNews
} from "@/compositions/search-news";
import NewsItem from "@/components/news-item.vue"

export default {
    name: "hello-world",
    components: {
        NewsItem
    },
    props: {
        msg: {
            type: String,
            default: "",
        },
    },
    setup() {
        // logic 1
        const {
            state,
            getNews
        } = searchNews();
        // logic 2
        getNews();

        // must return in setup
        return {
            state,
            getNews,
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
