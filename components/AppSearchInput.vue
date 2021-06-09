<template>
  <div>
    <input
      v-model="searchQuery"
      autocomplete="off"
      placeholder="Tìm kiếm gì đó ?"
      class="block w-full pl-4 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-300 text-gray-700  rounded-md focus:bg-white bg-white focus:outline-none"
    />
      
    <ul
     v-if="articles.length" 
      class="z-10 absolute w-auto top-24  bg-white dark:bg-gray-900 border-gray-300 overflow-hidden"
    >
      <li v-for="article of articles" :key="article.slug" class="hover:bg-gray-200">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-gray-500 hover:text-black"
        >
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>
