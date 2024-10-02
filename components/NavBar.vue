<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
    <div class="flex gap-4">
        <NuxtLink active-class="font-bold" :to="link._path" v-for="link in navigation">
            {{ link.title }}
        </NuxtLink>
    </div>
</template>