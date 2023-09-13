<template>
  <div class="w-full h-full">

    <div class="flex flex-col divide-y-8">

      <div class="px-4 pt-12 pb-6">
        <div class="flex items-center mb-6">
          <div class="me-2">
            <RubyIcon class="w-10 h-10" />
          </div>
          <div>
            <h1 class="text-4xl mb-2">50 points</h1>
            <span class="text-slate-400">10,2 AED</span>
          </div>
        </div>

        <div class="flex">
          <button
            @click="isReedemBottomsheet = true"
            class="text-white bg-black rounded-full px-6 py-3 me-2">
            Reedem
          </button>
          <button
            @click="isAddToWalletBottomsheet = true"
            class="text-black bg-gray-200 rounded-full px-6 py-3">
            Add
          </button>
        </div>
      </div>

      <div class="py-4">
        <div class="flex justify-between mb-3 px-4">
          <span class="text-xl font-semibold">Saved vouchers</span>
          <router-link to="/wallet/vouchers">
            <span class="font-light text-slate-400">See all</span>
          </router-link>
        </div>

        <ul class="flex w-full space-x-4 overflow-x-scroll ps-4 no-scrollbar">
          <li v-for="voucher of vouchers" :key="voucher.title">
            <VoucherCard
              :voucher="voucher"
              @click="openVoucherDetail(voucher)" class="w-80"/>
          </li>
        </ul>
      </div>

      <div class="py-4">
        <div class="flex justify-between mb-3 px-4">
          <span class="text-xl font-semibold">Latest transactions</span>
        </div>

        <ul class="flex flex-col max-h-full space-y-4 overflow-scroll ps-4 no-scrollbar pb-24">
          <li v-for="transaction of transactions" :key="transaction.brand">
            <TransactionCard
              :transaction="transaction"
              @click="openTransactionDetail(transaction)"/>
          </li>
        </ul>
      </div>
    </div>

    <SwipeModal
      v-model="isReedemBottomsheet"
      contents-height="80vh"
      border-top-radius="30px">
      <ReedemPointsView />
    </SwipeModal>

    <SwipeModal
      v-model="isAddToWalletBottomsheet"
      contents-height="35vh"
      border-top-radius="30px">
      <AddToWalletView />
    </SwipeModal>

    <SwipeModal
      v-model="transactionDetailModal.isOpened"
      contents-height="40vh"
      border-top-radius="30px">
      <TransactionDetailView />
    </SwipeModal>
  </div>
</template>

<script setup lang="ts">
import VoucherCard from '../components/VoucherCard.vue';
import TransactionCard from '../components/TransactionCard.vue';
import ReedemPointsView from '../views/ReedemPointsView.vue';
import TransactionDetailView from '../views/TransactionDetailView.vue';
import AddToWalletView from '../views/AddToWalletView.vue'
// @ts-ignore
import SwipeModal from '@takuma-ru/vue-swipe-modal'
import { ref } from 'vue';
import { useDb } from '../db';
import { useVoucherDetailModal } from '../useVoucherDetailModal';
import RubyIcon from '../icons/RubyIcon.vue';
import { useTransactionDetailModal } from '../useTransactionDetailModal';

const isReedemBottomsheet = ref(false)
const isAddToWalletBottomsheet = ref(false)
const { openVoucherDetail } = useVoucherDetailModal()
const { openTransactionDetail, transactionDetailModal } = useTransactionDetailModal()

const { vouchers, transactions } = useDb()
</script>