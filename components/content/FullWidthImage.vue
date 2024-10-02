<script lang="ts" setup>
const props = defineProps(['src'])

</script>

<template>
    <div class="not-prose">
        <NuxtImg :src="src" class="w-full h-96 object-cover">
        </NuxtImg>
    </div>
</template>