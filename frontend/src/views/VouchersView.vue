<template>
  <div>
    <div class="mt-4 mb-4">
      <router-link to="/wallet">
        back
      </router-link> 
    </div>
    <div class="mb-4">
      <h1 class="font-bold text-3xl">Vouchers</h1>
    </div>
    <ul class="flex flex-col gap-4 w-96">
      <li
        v-for="(voucher, index) of vouchers"
        :key="index"
        @click="openVoucherDetail(voucher)">
        <VoucherCard :voucher="voucher"/>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import VoucherCard from '../components/VoucherCard.vue';
import { useDb } from '../db.ts'
import { useVoucherDetailModal } from '../useVoucherDetailModal';

const { vouchers } = useDb()
const { openVoucherDetail } = useVoucherDetailModal()
</script>