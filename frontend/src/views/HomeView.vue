<template>
  <div class="w-full h-full">
    <div class="absolute top-1/2 left-1/2" style="transform: translate(-50%, -70%)">
      <div class="flex justify-center mb-4">
        <RubyIcon class="w-32 h-32" />
      </div>
      <div class="flex flex-col items-center">
        <h1 class="font-bold text-3xl">Darna Wallet</h1>
        <span class="font-light text-center">Receive 10% points on any purchase</span>
      </div>
    </div>
    <div class="absolute bottom-24 left-1/2" style="transform: translateX(-50%)">
      <div class="flex justify-center items-center mb-2">
        <span class="font-light">
          Instant reward:
        </span>
        <RubyIcon class="w-5 h-5" />
        <strong>+50 points</strong>
      </div>

      <div class="flex justify-center mb-2">
        <router-link to="/wallet">
          <button class="bg-black text-white w-72 py-2 px-6 rounded-xl">Activate wallet</button>
        </router-link>
      </div>
      <div class="flex justify-center mb-2">
        <button class="bg-zinc-200 text-black w-72 py-2 px-6 rounded-xl">Label</button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import RubyIcon from '../icons/RubyIcon.vue';
</script>