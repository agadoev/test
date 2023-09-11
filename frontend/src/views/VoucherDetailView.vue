<template>
  <div v-if="voucherDetailModal.selected">
    <div class="flex justify-center mb-4">
      <span>
        {{ voucherDetailModal.selected.brand }}
      </span>
    </div>

    <div class="flex justify-center text-center mb-4">
      <h1 class="font-bold text-3xl">
        {{ voucherDetailModal.selected.title }}
      </h1>
    </div>

    <div class="flex justify-center text-center mb-4">
      <span class="font-light">
        {{ voucherDetailModal.selected.description }}
      </span>
    </div>

    <div class="flex justify-center mb-8">
      <div class="relative">
        <QrCodeIcon class="w-48 h-48 fill-zinc-700"/>

        <img
          :src="voucherDetailModal.selected.imageUrl"
          class="w-20 h-20 rounded-full border-4 border-white absolute top-1/2 left-1/2"
          style="transform: translate(-50%, -50%);">
      </div>
    </div>

    <div class="flex justify-center gap-4">
      <div class="w-10 h-10 bg-zinc-200 rounded-full flex justify-center items-center p-2">
        <LikeIcon class="stroke-zinc-700 fill-none stroke-2" />
      </div>
      <div class="w-10 h-10 bg-zinc-200 rounded-full flex justify-center items-center p-2">
        <ShareIcon class="stroke-zinc-700 fill-none stroke-2" />
      </div>

      <div class="bg-zinc-200 rounded-full flex justify-center items-center px-4 py-2">
        <span>View my details</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QrCodeIcon from '../icons/QrCodeIcon.vue'
import LikeIcon from '../icons/LikeIcon.vue'
import ShareIcon from '../icons/ShareIcon.vue'
import { useVoucherDetailModal } from '../useVoucherDetailModal';

const { voucherDetailModal } = useVoucherDetailModal()
</script>