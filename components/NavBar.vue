<script lang="ts" setup>
const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Mitglieder FBV', path: '/mitglieder' },
  { name: 'News', path: '/news' },

]
</script>

<template>
  <div class="flex gap-4 p-4 bg-green-600 w-full">
    <NuxtLink
      v-for="link in navigation"
      :key="link.name"
      :to="link.path"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>
