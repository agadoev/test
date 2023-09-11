<template>
  <div class="flex bg-neutral-100 w-80 m-auto p-4 rounded-3xl items-center">
    <div class="w-10 h-10 me-2 shrink-0">
      <slot name="icon"></slot>
      <StubIcon class="stroke-gray-800" />
    </div>
    <div class="flex flex-col">
      <span class="font-bold text-gray-800">{{ title }}</span>
      <span class="text-gray-400 text-sm">{{ description }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string
  description: string
}>()
</script>