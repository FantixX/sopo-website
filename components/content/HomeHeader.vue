<script lang="ts" setup>
defineProps<{
  title: string
  subtitle: string
  image: string
}>()
</script>

<template>
  <section class="w-full relative">
    <div class=" w-full py-12 flex justify-center gap-8 items-center bg-slate-600">
      <div class="flex flex-col">
        <div class="text-3xl">
          {{ title }}
        </div>
        <div class="text-xl">
          {{ subtitle }}
        </div>
      </div>
      <NuxtImg :src="image" />
    </div>
    <slot name="divider" />
  </section>
</template>
