<script></script>
<template>
      <header class="flex items-center justify-between px-4 gap-8 h-20 bg-orange-500">
        <a href="/">
          <h1 class="text-white text-2xl font-bold">VegePlace</h1>
        </a>
        <button
          class="h-3 w-6 flex flex-col justify-between lg:hidden"
          @click="menuIsOpen = !menuIsOpen"
        >
          <span
            class="block h-[2px] w-full bg-black transition duration-300"
            :class="{ 'translate-y-[5px] rotate-45': menuIsOpen }"
          ></span>
          <span
            class="block h-[2px] w-full bg-black transition duration-300"
            :class="{ '-translate-y-[5px] -rotate-45': menuIsOpen }"
          ></span>
        </button>
        <nav
          class="fixed z-10 inset-0 mt-20 flex flex-col justify-between py-12 px-6 lg:static lg:mt-0 lg:flex-row lg:flex-1"
          :class="{ 'invisible opacity-0': !menuIsOpen, 'visible opacity-100': menuIsOpen }"
        >
          <ul class="flex flex-col gap-4 lg:flex-row">
            <li>
              <router-link
                to="/panier"
                class="block p-4 rounded-lg text-white"
                active-class="bg-indigo-500"
              >
                Panier
              </router-link>
            </li>
            <li>
              <router-link
                to="/profil"
                class="block p-4 rounded-lg text-white"
                active-class="bg-indigo-500"
              >
                Profil
              </router-link>
            </li>
            <li>
              <router-link
                to="/favori"
                class="block p-4 rounded-lg text-white"
                active-class="bg-indigo-500"
              >
                Favori
              </router-link>
            </li>
          </ul>
          <div class="flex items-center gap-4 px-4">
            <!-- Ajoute ton icône de barre de recherche ici -->
            <button
              class="flex-1 p-3 rounded-lg border-2 border-indigo-200 font-bold text-indigo-500 lg:flex-none lg:px-6"
            >
              Login
            </button>
            <button
              class="flex-1 p-3 rounded-lg bg-indigo-500 text-white font-bold lg:flex-none lg:px-6"
            >
              Sign up
            </button>
          </div>
        </nav>
      </header>
    </template>
</template>