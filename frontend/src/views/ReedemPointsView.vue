<template>
  <div>
    <div class="flex justify-end px-4">
      <button @click="emit('close')">x</button>
    </div>
    <div class="text-center mb-4">
      <h1 class="font-bold text-2xl mb-2 text-gray-800">Reedem points</h1>
      <span class="font-light">Choose how do you want to spend your points</span>
    </div>
    <ul class="flex flex-col gap-4">
      <li>
        <div class="flex bg-neutral-100 w-80 m-auto p-4 rounded-3xl items-center">
          <div class="w-10 h-10 me-2 shrink-0">
            <StubIcon class="stroke-gray-800" /> 
          </div>
          <span class="font-bold text-gray-800">Transfer to bank card</span>
        </div>
      </li>
      <li>
        <div class="flex bg-neutral-100 w-80 m-auto p-4 rounded-3xl items-center">
          <div class="w-10 h-10 me-2 shrink-0">
            <StubIcon class="stroke-gray-800" /> 
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-800">To friends</span>
            <span class="text-gray-400 text-sm">Share your cashback with friends and family</span>
          </div>
        </div>
      </li>
      <li>
        <div class="flex bg-neutral-100 w-80 m-auto p-4 rounded-3xl items-center">
          <div class="w-10 h-10 me-2 shrink-0">
            <StubIcon class="stroke-gray-800" /> 
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-800">Donate</span>
            <span class="text-gray-400 text-sm">Choose an organization you'd like to help</span>
          </div>
        </div>
      </li>
      <li>
        <div class="flex bg-neutral-100 w-80 m-auto p-4 rounded-3xl items-center">
          <div class="w-10 h-10 me-2 shrink-0">
            <StubIcon class="stroke-gray-800" /> 
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-800">Buy Bitcoins</span>
            <span class="text-gray-400 text-sm">Exchange your cashback for most crypto currency</span>
          </div>
        </div>
      </li>
      <li>
        <div class="flex bg-neutral-100 w-80 m-auto p-4 rounded-3xl items-center">
          <div class="w-10 h-10 me-2 shrink-0">
            <StubIcon class="stroke-gray-800" /> 
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-gray-800">Get Etihan Airways miles</span>
            <span class="text-gray-400 text-sm">Convert</span>
          </div>
        </div>
      </li>
    </ul> 
  </div>
</template>

<script setup lang="ts">
import StubIcon from '../StubIcon.vue';

const emit = defineEmits(['close'])
</script>