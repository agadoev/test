<template>
  <div class="w-80 h-40">

    <!-- component -->
    <div class="w-full h-full border border-slate-200 border-radius rounded-l-2xl rounded-r-2xl flex flex-col">
      <div class="grow rounded-tl-2xl rounded-tr-2xl px-3 pb-2 pt-3 bg-teal-100 flex items-center">
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
  </div>
</template>

<script setup lang="ts">

type Voucher = {
  brand: string
  category: string
  imageUrl: string
  title: string
  description: string
  distance: number
}

const voucher: Voucher = {
  brand: 'Vapiano',
  category: 'Dining',
  imageUrl: 'https://loremflickr.com/320/240',
  title: 'Buy 1 Get 1 Free',
  description: 'Some long long long long long long long long long long long long description',
  distance: 100
}
</script>