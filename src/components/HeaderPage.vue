<template>
  <div>
    <div class="bg-[#E05303]  flex justify-between">
      <nav class="
          container
          px-6
          py-8
          md:flex md:justify-end md:items-center
        ">
        <div class="flex items-center">
          <RouterLink to="/" class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-[#B3F274]
            ">
            <img src="../components/icons/logo.png" class="w-1/2" alt="">
          </RouterLink>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex ml-auto md:hidden">
            <button type="button" class="
                text-white
                hover:text-[#B3F274]
                focus:outline-none focus:text-gray-400
                w-8 h-8
              ">
              <div style="display: flex; justify-content: center;">
                <svg viewBox="0 0 24 24" class="w-12 h-12 fill-current"
                  style="transform: scale(2); transform-origin: center;">
                  <path fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                  </path>
                </svg>
              </div>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul :class="showMenu ? 'flex' : 'hidden'" class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
            md:ml-auto
          ">
          <li class="text-xl font-bold text-white hover:text-[#B3F274] lg:text-sm">
            <RouterLink to="/profil">Profil</RouterLink>
          </li>
          <li class="text-xl font-bold text-white hover:text-[#B3F274] lg:text-sm">
            <RouterLink to="/panier">Panier</RouterLink>
          </li>
          <li class="text-xl font-bold text-white hover:text-[#B3F274] lg:text-sm">
            <RouterLink to="/favori">Favori</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
