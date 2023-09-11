
<template>
  <!-- component -->
  <div class="h-full border border-slate-200 border-radius rounded-l-2xl rounded-r-2xl flex flex-col">
    <div class="grow rounded-tl-2xl rounded-tr-2xl px-3 pb-2 pt-3 flex items-center" :style="{ 'background-color': bg }">
      <div class="flex w-full">
        <img :src="voucher.imageUrl" class="rounded-full w-12 h-12 me-2">
        <div class="w-full text-start">
          <h1 class="font-semibold">{{ voucher.brand }}</h1>
          <div class="flex justify-between text-sm text-slate-400">
            <span>{{ voucher.category }}</span>
            <span>{{ voucher.distance }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="grow rounded-br-2xl rounded-bl-2xl px-3 pt-2 pb-3 flex items-center">
      <div class="flex flex-col items-start">
        <h1 class="font-semibold">{{ voucher.title }}</h1>
        <p class="w-48 overflow-hidden whitespace-nowrap font-normal text-ellipsis">{{ voucher.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Voucher } from '../types';
import { faker } from '@faker-js/faker'

const bg = faker.color.rgb()

defineProps<{
  voucher: Voucher
}>()
</script>