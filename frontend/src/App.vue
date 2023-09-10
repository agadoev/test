<template>
  <router-view></router-view>

  <div class="fixed bottom-0 left-0 border border-slate-200">
    <ul class="flex w-screen justify-center space-x-8 pb-3 pt-2">
      <li>
        <router-link to="/home">
          <MenuItem :is-active="route.path === '/home'" :title="'home'">
            <template v-slot:icon>
              <StubIcon />
            </template>
          </MenuItem>
        </router-link>
      </li>
      <li>
        <router-link to="/wallet">
          <MenuItem :is-active="route.path === '/wallet'" :title="'wallet'">
            <template v-slot:icon>
              <StubIcon />
            </template>
          </MenuItem>
        </router-link>
      </li>
      <li>
        <router-link to="/benefits">
          <MenuItem :is-active="route.path === '/benefits'" :title="'benefits'">
            <template v-slot:icon>
              <StubIcon />
            </template>
          </MenuItem>
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <MenuItem :is-active="route.path === '/profile'" :title="'profile'">
            <template v-slot:icon>
              <StubIcon />
            </template>
          </MenuItem>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import StubIcon from './StubIcon.vue'
import MenuItem from './components/MenuItem.vue'

const route = useRoute()
</script>
