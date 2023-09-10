<template>
  <div class="w-full h-full">

    <div class="flex flex-col divide-y-8">

      <div class="px-4 pt-12 pb-6">
        <div class="ps-4 mb-6">
          <h1 class="text-4xl mb-2">50 points</h1>
          <span class="text-slate-400">10,2 AED</span>

        </div>
        <div class="flex">
          <button class="text-white bg-black rounded-full px-6 py-3 me-2">Reedem</button>
          <button class="text-black bg-gray-200 rounded-full px-6 py-3">Add</button>
        </div>
      </div>

      <div class="py-4">
        <div class="flex justify-between mb-3 px-4">
          <span class="text-xl font-semibold">Saved vouchers</span>
          <span class="font-light text-slate-400">See all</span>
        </div>

        <ul class="flex w-full space-x-4 overflow-x-scroll ps-4 no-scrollbar">
          <li v-for="voucher of vouchers" :key="voucher.title">
            <VoucherCard :voucher="voucher" />
          </li>
        </ul>
      </div>

      <div class="py-4">
        <div class="flex justify-between mb-3 px-4">
          <span class="text-xl font-semibold">Latest transactions</span>
        </div>

        <ul class="flex flex-col max-h-full space-y-4 overflow-scroll ps-4 no-scrollbar">
          <li v-for="transaction of transactions" :key="transaction.brand">
            <TransactionCard :transaction="transaction"/>
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import type { Voucher, Transaction } from '../types'
import VoucherCard from '../components/VoucherCard.vue';
import TransactionCard from '../components/TransactionCard.vue';

const createTransaction = (): Transaction => ({
  brand: 'Darna',
  createdAt: new Date(),
  type: 'income',
  amount: 43,
  state: 'completed'
})

const createVoucher = (): Voucher => ({
  brand: 'Vapiano',
  category: 'Dining',
  imageUrl: 'https://loremflickr.com/320/240',
  title: 'Buy 1 Get 1 Free',
  description: 'Some long long long long long long long long long long long long description',
  distance: 100
})

const vouchers = new Array(10).fill(0).map(createVoucher)

const transactions = new Array(10).fill(0).map(createTransaction)
</script>