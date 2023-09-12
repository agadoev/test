<template>
  <div class="flex items-center justify-center">
    <img :src="transaction.imageUrl" class="rounded-full w-12 h-12 me-2">
    <div class="w-full text-start">
      <div class="flex justify-between pe-2">
        <h1 class="font-semibold">{{ transaction.brand }}</h1>
        <span class="font-bold">
          <span v-if="transaction.type === 'outcome'">-</span>
          <span v-if="transaction.type === 'income'">+</span>
          <span>{{ transaction.amount }}</span>
          <span>pts</span>
        </span>
      </div>
      <div class="flex justify-between text-sm text-slate-400">
        <span>{{ transaction.createdAt.toLocaleDateString() }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Transaction } from '../types'

defineProps<{
  transaction: Transaction
}>()
</script>