<template>
  <header class="flex items-center justify-between px-4 h-20 bg-orange-500">
    <a href="/">
      <h1 class="text-white text-2xl font-bold">VegePlace</h1>
    </a>
    <nav class="hidden lg:flex items-center gap-4">
      <ul class="flex gap-4">
        <li>
          <router-link to="/panier" class="block p-4 rounded-lg text-white" active-class="bg-indigo-500">
            Panier
          </router-link>
        </li>
        <li>
          <router-link to="/profil" class="block p-4 rounded-lg text-white" active-class="bg-indigo-500">
            Profil
          </router-link>
        </li>
        <li>
          <router-link to="/favori" class="block p-4 rounded-lg text-white" active-class="bg-indigo-500">
            Favori
          </router-link>
        </li>
      </ul>
    </nav>
    <button class="h-3 w-6 flex flex-col justify-between lg:hidden text-white z-10" @click="menuIsOpen = !menuIsOpen">
      <span class="block h-[2px] w-full bg-white transition duration-300"
        :class="{ 'translate-y-[5px] rotate-45': menuIsOpen }"></span>
      <span class="block h-[2px] w-full bg-white transition duration-300"
        :class="{ '-translate-y-[5px] -rotate-45': menuIsOpen }"></span>
    </button>
    <nav
      class="fixed z-10 inset-0 mt-20 flex flex-col justify-between py-12 px-6 bg-orange-500 lg:static lg:mt-0 lg:flex-row lg:flex-1"
      :class="{ 'invisible opacity-0': !menuIsOpen, 'visible opacity-100': menuIsOpen }">
      <ul class="flex flex-col gap-4">
        <li>
          <router-link to="/panier" class="block p-4 rounded-lg text-white" active-class="bg-indigo-500">
            Panier
          </router-link>
        </li>
        <li>
          <router-link to="/profil" class="block p-4 rounded-lg text-white" active-class="bg-indigo-500">
            Profil
          </router-link>
        </li>
        <li>
          <router-link to="/favori" class="block p-4 rounded-lg text-white" active-class="bg-indigo-500">
            Favori
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false,
    };
  },
};
</script>