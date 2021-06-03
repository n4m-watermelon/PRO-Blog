<template>
<div class="flex flex-col h-screen">
    <div class="md:mx-0 mx-5 bg-white px-2 md:px-0">
        <Header1 />
    </div>
     <section class="text-gray-700 ">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto">
              <div class="flex flex-col w-full mb-12 text-left lg:text-center">

                <h1 class="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font">Vietnamese Pokemon Revolution</h1>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-1/2">This is a non-profit blog, the only purpose it is created is for people to share knowledge about the PRO. </p>
              </div>
            </div>
     </section>
    <div class="flex justify-center">
        <!-- content here !!! -->
          <div class="container items-center px-5 py-12 lg:px-20">
            <div  v-for="article in articles" :key="article.slug" class="p-6 mb-4 mx-auto bg-white border rounded-lg shadow-xl w-1/2">
              <div class="flex flex-col items-start py-2 rounded-lg lg:flex-row">
                <div class="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
                  <img :src="require(`~/assets/images/${article.img}`)" alt="placeholder" class="rounded-lg">
                </div>
                <div class="flex flex-col w-full text-gray-500 lg:ml-4">

                      <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug }}">
                            <h2 class="mt-4 mb-8 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font">{{ article.title }}</h2>
                        </NuxtLink>
                      
                  <p class="mb-3 text-base leading-relaxed text-gray-500">{{ article.description  | truncateString(125)}}</p>
                </div>
              </div>
            </div>
          </div>

  

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
