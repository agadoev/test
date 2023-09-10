<template>
  <div class="flex flex-col items-center w-16">
    <div
      class="w-10 h-10"
      :class="{
        'stroke-black': props.isActive,
        'stroke-slate-400': !props.isActive
      }">
      <slot name="icon"></slot>
    </div>
    <div
      :class="{
        'text-black': props.isActive,
        'text-slate-400': !props.isActive
      }">
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  isActive: boolean
  title: string
}>()
</script>