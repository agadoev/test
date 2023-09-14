<template>
  <div class="mt-10">
    <div class="text-center mb-4">
      <h1 class="font-bold text-2xl mb-4 text-gray-800">Reedem points</h1>
      <span class="font-light mg-4">Choose how do you want to spend your points</span>
    </div>
    <ul class="flex flex-col gap-4">
      <li>
        <BottomSheetNavigationItem
          :title="'Transfer to bank card'"
          :description="''">
          <template v-slot:icon>
            <StubIcon v-slot:icon class="stroke-gray-800" /> 
          </template>
        </BottomSheetNavigationItem>
      </li>
      <li>
        <BottomSheetNavigationItem
          :title="'To friends'"
          :description="'Share your cashback with friends and family'">
          <template v-slot:icon>
            <StubIcon v-slot:icon class="stroke-gray-800" /> 
          </template>
        </BottomSheetNavigationItem>
      </li>
      <li>
        <BottomSheetNavigationItem
          :title="'Donate'"
          :description="'Choose an organization you\'d like to help'">
          <template v-slot:icon>
            <StubIcon v-slot:icon class="stroke-gray-800" /> 
          </template>
        </BottomSheetNavigationItem>
      </li>
      <li>
        <BottomSheetNavigationItem
          :title="'Buy Bitcoins'"
          :description="'Exchange your cashback for most crypto currency'">
          <template v-slot:icon>
            <StubIcon v-slot:icon class="stroke-gray-800" /> 
          </template>
        </BottomSheetNavigationItem>
      </li>
      <li>
        <BottomSheetNavigationItem
          :title="'Get Etihan Airways miles'"
          :description="'Convert'">
          <template v-slot:icon>
            <StubIcon v-slot:icon class="stroke-gray-800" /> 
          </template>
        </BottomSheetNavigationItem>
      </li>
    </ul> 
  </div>
</template>

<script setup lang="ts">
import StubIcon from '../../icons/StubIcon.vue';
import BottomSheetNavigationItem from '../../components/BottomSheetNavigationItem.vue';
</script>