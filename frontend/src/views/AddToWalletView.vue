<template>
  <div>
    <div class="text-center mb-4">
      <h1 class="font-bold text-2xl mb-2 text-gray-800">Add to wallet</h1>
    </div>
    <ul class="flex flex-col gap-4">
      <li>
        <BottomSheetNavigationItem
          :title="'Add voucher'"
          :description="'Save and secure your discount codes with Darna'">
          <template v-slot:icon>
            <StubIcon v-slot:icon class="stroke-gray-800" /> 
          </template>
        </BottomSheetNavigationItem>
      </li>
      <li>
        <BottomSheetNavigationItem
          :title="'Add past payments'"
          :description="'For education and properties'">
          <template v-slot:icon>
            <StubIcon v-slot:icon class="stroke-gray-800" /> 
          </template>
        </BottomSheetNavigationItem>
      </li>
    </ul> 
  </div>

</template>

<script setup lang="ts">
import StubIcon from '../StubIcon.vue';
import BottomSheetNavigationItem from '../components/BottomSheetNavigationItem.vue';
</script>