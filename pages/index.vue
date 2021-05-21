<template>
<div class="m-8">
    <TheHeader />
    <div class="md:w-1/2 sm:w-full mx-auto">
        <!-- <div class="flex flex-wrap items-start w-full bg-white rounded border shadow mb-4">
            <img class="object-cover rounded" src="https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        </div> -->
        <div class="flex items-center justify-between pb-4">
            <span class="font-bold text-xl">😀 Tất cả bài viết</span>
            <span class="text-xs">{{rightNow}}</span>
        </div>
        <div v-for="article in articles" :key="article.slug" class="w-full shadow rounded overflow-hidden sm:flex mb-5">
            <div class="rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden">
                <img class="object-cover h-48 md:w-64 w-full object-center rounded-lg p-1 " :src="article.img" alt="">
            </div>
            <div class="w-full flex flex-col justify-between">
                <div class="px-6 py-3 h-46">
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug }}">
                        <h2 class="mb-2 font-black">{{ article.title }}</h2>
                    </NuxtLink>
                    <p class="break-all ">{{ article.description }}</p>
                </div>
                <div class="flex flex-col px-6 pb-4">
                    <span class="text-right text-xs italic">6 min read</span>
                    <span class="text-right text-xs italic">By <b>n4m</b></span>
                </div>
            </div>
        </div>

        <!-- <div v-for="article of articles" :key="article.slug" class="w-full p-4 xs:mb-6 md:mb-12 article-card shadow">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="flex xxlmax:flex-col">
                <img v-if="article.img" class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover" :src="article.img" />
                <div class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full">
                    <h2 class="font-bold">{{ article.title }}</h2>
                    <p>by {{ article.author.name }}</p>
                    <p class="font-bold text-gray-600 text-sm">
                        {{ article.description }} {{ formatDate(article.createdAt) }}
                    </p>
                </div>
            </NuxtLink>
        </div> -->
    </div>

    <h3 class="mb-4 font-bold text-2xl uppercase text-center">Topics</h3>
    <ul class="flex flex-wrap mb-4 text-center">
        <li v-for="tag of tags" :key="tag.slug" class="xs:w-full md:w-1/3 lg:flex-1 px-2 text-center">
            <NuxtLink :to="`/blog/tag/${tag.slug}`" class="">
                <p class="font-bold text-gray-600 uppercase tracking-wider font-medium text-ss">
                    {{ tag.name }}
                </p>
            </NuxtLink>
        </li>
    </ul>
    <footer class="flex justify-center border-gray-500 border-t-2">
        <p class="mt-4">
            Created by
            <a href="https://www.facebook.com/5x7xx/" class="font-bold hover:underline">N4mSama</a>
            with NuxtJS. See the
            <a href="https://nuxtjs.org/blog/creating-blog-with-nuxt-content" class="font-bold hover:underline">tutorial</a>
            for how to build it.
        </p>
    </footer>
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
.article-card {
    border-radius: 6px;
}

.article-card a {
    background-color: #fff;
    border-radius: 8px;
}

.article-card img div {
    border-radius: 8px 0 0 8px;
}
</style>
