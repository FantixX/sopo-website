<script lang="ts" setup>
defineProps<{
  name: string
  age: number
  image: string
}>()
</script>

<template>
  <div class="flex gap-8">
    <NuxtImg
      class="object-cover w-48"
      :src="image"
    />
    <div class="flex flex-col justify-center">
      <div class="text-2xl font-semibold">
        {{ name }}
      </div>
      <div>{{ age }}</div>
      <slot />
    </div>
  </div>
</template>
