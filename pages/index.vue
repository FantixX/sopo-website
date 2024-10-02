<script lang="ts" setup>
const { data: page } = await useAsyncData("home", () => queryContent("/").findOne())
</script>

<template>
    <pre>{{ page }}</pre>
</template>
