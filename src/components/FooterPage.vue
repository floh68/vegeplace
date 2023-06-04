<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
</script>
<template>
    <footer class="bg-blue-950 px-5 pt-4">
      <div class="text-white columns-2">
        <div class="H4">
            Contactez Nous
            <ul class="list-disc list-inside">
              <li class="text-sm pt-2">
                <a href="vegeplace@free.fr">vegeplace@free.fr</a>
              </li>
            </ul>
        </div>
        <div class="H4">
          En savoir Plus
          <ul class="list-disc list-inside">
              <li class="text-sm pt-2">
                Calendrier des évenements à venir
              </li>
            </ul>
        </div>
      </div>
      <ul class="flex space-x-4">
  <li>
    <a href="#" class="text-white"><IconFacebook class="w-30 h-30" /></a>
  </li>
  <li>
    <a href="#"><IconInstagram class="sm:w-30 sm:h-30 w-12 h-12" /></a>
  </li>
</ul>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="col-span-2 lg:col-span-1">
        <h4 class="text-lg text-white mt-4 mb-2">Newsletters</h4>
        <p class="text-gray-100 mb-4">Inscrivez-vous pour recevoir les nouveautés dans votre boîte mail !</p>
        <form class="flex flex-col md:flex-row">
          <input class="w-full md:w-3/4 bg-white border border-gray-300 rounded py-2 px-4 placeholder-gray-400 mb-4 md:mb-0 text-gray-800" type="text" placeholder="Adresse mail">
          <div class="w-full md:w-1/4 md:ml-4">
            <button class="bg-white text-black font-semibold py-2 px-4 rounded w-full hover:bg-black hover:text-white">Envoyer</button>
          </div>
        </form>
</div>
      <div class="col-span-1 lg:col-span-2">
        <p class="text-center text-sm text-gray-100">
          <a href="#" class="hover:text-black">Termes et conditions d'utilisation</a> - 
          <a href="#" class="hover:text-black">Cookies</a> - 
          <RouterLink to="/mentions" class="hover:text-black">Mention légales</RouterLink>
        </p>
      </div>
    </div>
  </div>
    </footer>
</template>