<template>
  <router-view></router-view>

  <div class="fixed bottom-0 bg-white left-0 border border-slate-200">
    <ul class="flex w-screen justify-center space-x-8 pb-3 pt-2">
      <li>
        <router-link to="/home">
          <MenuItem :is-active="route.path.startsWith('/home')" :title="'home'">
            <template v-slot:icon>
              <HomeIcon />
            </template>
          </MenuItem>
        </router-link>
      </li>
      <li>
        <router-link to="/wallet">
          <MenuItem :is-active="route.path.startsWith('/wallet')" :title="'wallet'">
            <template v-slot:icon>
              <WalletIcon />
            </template>
          </MenuItem>
        </router-link>
      </li>
      <li>
        <router-link to="/benefits">
          <MenuItem :is-active="route.path.startsWith('/benefits')" :title="'benefits'">
            <template v-slot:icon>
              <BenefitsIcon />
            </template>
          </MenuItem>
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <MenuItem :is-active="route.path.startsWith('/profile')" :title="'profile'">
            <template v-slot:icon>
              <ProfileIcon />
            </template>
          </MenuItem>
        </router-link>
      </li>
    </ul>
  </div>

  <SwipeModal v-model="voucherDetailModal.isOpened" contents-height="60vh" border-top-radius="30px">
    <VoucherDetailView />
  </SwipeModal>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import HomeIcon from './icons/HomeIcon.vue';
import WalletIcon from './icons/WalletIcon.vue'
import BenefitsIcon from './icons/BenefitsIcon.vue';
import ProfileIcon from './icons/ProfileIcon.vue'
import MenuItem from './components/MenuItem.vue'
import VoucherDetailView from './views/VoucherDetailView.vue';
// @ts-ignore
import SwipeModal from '@takuma-ru/vue-swipe-modal'
import { useVoucherDetailModal } from './useVoucherDetailModal';

const route = useRoute()

const { voucherDetailModal } = useVoucherDetailModal()
</script>
