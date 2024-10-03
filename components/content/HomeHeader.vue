<script lang="ts" setup>

</script>

<template>
  <section class="w-full relative">
    <div class=" w-full py-12 flex justify-center gap-8 items-center bg-slate-600">
      <div class="flex flex-col">
        <div class="text-3xl">
          <slot name="title" />
        </div>
        <div class="text-xl">
          <slot name="subtitle" />
        </div>
      </div>
      <slot name="image" />
    </div>
    <slot name="divider" />
  </section>
</template>
