<template>
<div class="flex flex-col h-screen">
    <div class="md:mx-0 mx-5 bg-white px-2 md:px-0">
        <Header />
    </div>
    <div class="flex flex-grow">
        <!-- content here !!! -->
        <!-- <div class="w-full md:w-1/2 md:mx-auto mx-5">

            <div v-for="article in articles" :key="article.slug" class="w-full shadow rounded overflow-hidden sm:flex mb-5">
                <div class="rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                    <img class="object-cover h-32 md:w-48 w-full object-center rounded-lg p-1 " :src="require(`~/assets/images/${article.img}`)">
                </div>
                <div class="w-full flex flex-col h-32 justify-between">
                    <div class="px-1 py-3">
                        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug }}">
                            <h2 class="mb-2 font-black text-sm">{{ article.title }}</h2>
                        </NuxtLink>
                        <p class="break-all text-sm">{{ article.description  | truncateString(125)}} </p>
                    </div>
                    <div class="flex flex-col px-6 pb-3">
                        <span class="text-right text-xs italic">6 min read</span>
                        <span class="text-right text-xs italic">By <b>{{article.author.name}}</b></span>
                    </div>
                </div>
            </div>
        </div> -->

    </div>

    <div class="border-gray-200 border-t py-2">
        <footer class="flex justify-center ">
            <p class="text-center text-sm">
                From <b>VNRevolution</b> with luv 💖
            </p>
        </footer>
    </div>
</div>
</template>

<script>
import moment from "moment"

export default {

    async asyncData({
        $content,
        params
    }) {
        const articles = await $content('articles', params.slug)
            .only(['title', 'description', 'img', 'slug', 'author'])
            .sortBy('createdAt', 'desc')
            .fetch()
        const tags = await $content('tags', params.slug)
            .only(['name', 'description', 'img', 'slug'])
            .sortBy('createdAt', 'asc')
            .fetch()
            // console.log(articles);
        return {
            articles,
            tags
        }
    },
    data() {
        return {
            moment,
            rightNow: null
        }
    },
    mounted() {
        this.rightNow = moment().format("dddd DD/MM/YYYY")

    },
    methods: {
        formatDate(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }
            return new Date(date).toLocaleDateString('en', options)
        }
    }

}
</script>

<style>

</style>
