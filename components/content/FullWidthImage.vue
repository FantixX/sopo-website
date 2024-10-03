<script lang="ts" setup>
defineProps(['src'])
</script>

<template>
  <div class="not-prose">
    <NuxtImg
      :src="src"
      class="w-full h-96 object-cover"
    />
  </div>
</template>
