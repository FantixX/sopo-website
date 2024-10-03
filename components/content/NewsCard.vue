<template>
  <div class="shadow-md">
    <NuxtLink to="/news/welcome">
      <div>{{ path }}</div>
      <NuxtImg
        class="object-cover w-full h-24"
        :src="image ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxkLHugZrZq1rWP-hipocKklzC-Yy3goSwA&s'"
      />
      <div class="p-2">
        <div class="text-lg font-semibold no-underline">
          {{ title }}
        </div>
        <div class="text-sm" />
        <div class="text-sm">
          {{ author }}
        </div>
        <div class="text-sm line-clamp-2">
          {{ shorttext }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
  author?: string
  date?: string
  image?: string
  shorttext?: string
  path?: string
}>()
</script>
