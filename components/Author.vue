<template>
<div class="w-full px-2 xs:mb-6 md:mb-12">
    <div class="p-2 my-6 bg-white border rounded-lg lg:w-1/2">
        <div class="items-center rounded-lg ">
            <div class="inline-flex items-center p-2 rounded-lg">
                <img v-if="author.img" class="object-cover rounded-full h-10 w-10 " :src="author.img" />
                <div class="items-center w-full ml-4 text-gray-500">
                    <span class="text-lg block  tracking-tighter"> Tác giả
                    </span>
                    <NuxtLink :to="`/blog/author/${author.name}`">
                        <span class="block font-semibold tracking-tighter lg:text-xl">{{ author.name }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        author: {
            type: Object,
            required: true
        }
    }
}
</script>
