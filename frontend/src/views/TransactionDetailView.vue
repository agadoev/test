<template>
  <template v-if="transactionDetailModal.selected">
    <div class="pt-10">
      <div class="flex justify-center mb-4">
        <img
          class="rounded-full w-20 h-20"
          :src="transactionDetailModal.selected.imageUrl">
      </div>

      <div class="flex items-center justify-center mb-4">
        <RubyIcon class="w-6 h-6" />
        <span v-if="transactionDetailModal.selected.type === 'income'" class="font-bold">+</span>
        <span v-if="transactionDetailModal.selected.type === 'outcome'" class="font-bold">-</span>
        <span class="font-bold">
          {{ transactionDetailModal.selected.amount }} points
        </span>
      </div>

      <div class="flex justify-between px-8 mb-2">
        <span class="text-zinc-400">{{ transactionDetailModal.selected.brand }}</span>
      </div>

      <div>
        <div class="flex justify-center mb-4 px-8">
          <button
            @click="closeTransactionDetail"
            class="bg-zinc-100 text-black w-full py-3 px-6 rounded-xl">
            <span classs="text-zinc-800">
              OK
            </span>
          </button>
        </div>
      </div>

      <div class="flex justify-center">
        <span class="text-zinc-800 text-sm">Report an issue</span>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import RubyIcon from '../icons/RubyIcon.vue';
import { useTransactionDetailModal } from '../useTransactionDetailModal';

const { transactionDetailModal, closeTransactionDetail } = useTransactionDetailModal()
</script>