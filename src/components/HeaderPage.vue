<template>
  <header class="flex items-center justify-between px-4 h-20 bg-[#E05303]">
    <a href="/">
      <h1 class="text-white text-2xl font-bold" @click=closeMenu>VegePlace</h1>
    </a>
    <nav class="hidden lg:flex items-center gap-4">
      <ul class="flex gap-4">
        <li>
          <router-link to="/panier" class="block p-4 rounded-lg text-white" @click=closeMenu>
            Panier
          </router-link>
        </li>
        <li>
          <router-link to="/profil" class="block p-4 rounded-lg text-white" @click=closeMenu>
            Profil
          </router-link>
        </li>
        <li>
          <router-link to="/favori" class="block p-4 rounded-lg text-white" @click=closeMenu>
            Favori
          </router-link>
        </li>
      </ul>
    </nav>
          <button class="h-5 w-8 flex flex-col justify-between lg:hidden text-black z-10" @click="menuIsOpen = !menuIsOpen">
              <span class="block h-[2px] w-8 bg-white transition duration-300"
                  :class="{ 'translate-y-[10px] rotate-45': menuIsOpen }"></span>
              <span class="block h-[2px] w-full bg-white transition duration-300"
                  :class="{ '-translate-y-[8px] -rotate-45': menuIsOpen }"></span>
              <span class="block h-[2px] w-full bg-white transition duration-300" :class="{ 'hidden': menuIsOpen }"></span>
          </button>
    <nav
      class="fixed z-10 inset-0 mt-20 flex flex-col justify-between py-12 px-6 bg-orange-500 lg:static lg:mt-0 lg:flex-row lg:flex-1"
      :class="{ 'invisible opacity-0': !menuIsOpen, 'visible opacity-100': menuIsOpen }">
      <ul class="flex flex-col gap-4">
        <li>
          <router-link to="/panier" class="block p-4 rounded-lg text-white text-4xl" @click=closeMenu>
            Panier
          </router-link>
        </li>
        <li>
          <router-link to="/profil" class="block p-4 rounded-lg text-white text-4xl" @click=closeMenu>
            Profil
          </router-link>
        </li>
        <li>
          <router-link to="/favori" class="block p-4 rounded-lg text-white text-4xl" @click=closeMenu>
            Favori
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const closeMenu = () => { menuIsOpen.value = false; };
const menuIsOpen = ref(false);

</script>