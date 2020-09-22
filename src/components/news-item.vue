<template>
<div class="news-row" @click="openLink(link)">
    <div><img :src="imgSrc" /></div>
    <div>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</div>
</template>

<script>
export default {
    name: "hello-world",
    props: {
        title: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
        imgSrc: {
            type: String,
            default: "https://hotnews.kueiapp.com/favicon.ico",
        },
        link: {
            type: String,
            default: "",
        },
    },
    setup() {
        const openLink = (link) => {
            window.open(link)
        }

        // must return in setup
        return {
            openLink
        }
    },
};
</script>

<style lang="scss" scoped>
.news-row {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    margin: 0 auto 8px auto;

    >div {
        max-width: 82%;
    }

    >div:nth-child(2) {
        overflow: hidden;
    }

    h3 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 95%;
    }

    p {
        display: block;
        display: -webkit-box;
        max-width: 90%;
        max-height: 66px;
        margin: 0 auto;
        line-height: 33px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    img {
        width: 130px;
        height: 130px;
        object-fit: cover;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
}
</style>
