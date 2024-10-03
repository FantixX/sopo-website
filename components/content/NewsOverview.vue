<template>
  <section class="relative py-8 px-4">
    <div class="py-6 px-2">
      <div class="text-3xl font-semibold">
        {{ headline }}
      </div>
      <div>
        {{ subheader }}
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <NewsCard
        v-for="news in contents"
        :key="news._id"
        :title="news.title"
        :author="news.author"
        :date="news.date"
        :image="news.image"
        :shorttext="news.description"
        :link="news._path"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
const contents = (await useAsyncData('news', () => queryContent('/news').where({ title: { $ne: 'News Index' } }).find())).data

defineProps<{
  headline: string
  subheader: string
}>()
</script>
