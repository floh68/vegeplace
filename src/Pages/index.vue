<script setup lang="ts">
import googleMaps from '@/components/googleMaps.vue';
import RecipeCardR from '../components/RecipeCardR.vue';
import RecipeCardL from '../components/RecipeCardL.vue';
import IconLove from '../components/icons/IconLove.vue';
import file from '@/components/icons/file.vue';
import IngredientsCardR from '@/components/IngredientsCardR.vue'
import IngredientsCardL from '@/components/IngredientsCardL.vue'
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
const photos = [
  "photo_2.webp",
  "photo_1.webp",
  "photo_3.webp",
]






</script>
<template>
  <!-- <div class="relative">
    <img class="w-full h-[35vh] object-cover" src="../components/icones/main_couv_header.webp" alt="Image">
    <p class="absolute bottom-0 left-0 right-0 text-center pb-4 text-6xl bg-white bg-opacity-50 mx-auto">Exposition</p>
  </div> -->



    <div class="overflow-hidden">
      <Swiper class="h-[35vh] lg:h-[50vh]">
        <SwiperSlide v-for="photo in photos" :key="photo">
          <img :src="`src/components/imagescar/${photo}`" class="w-screen">
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="flex justify-center items-center">
      <p>glissez pour découvrir</p>
      <img src="../components/icons/swipe.gif" alt="Autre image" class="w-1/6 lg:w-1/24">
      
    </div>







  

















  



  <div class="flex-1 py-4 flex items-center relative">
    <div class="bg-yellow-300 h-6  absolute left-0 right-0">
      <p class="text-center">TEXT DEFILANT</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <!-- faire une boucle avec des redirect et idvue de recette pour rediriger vers la bonne recette -->
    <RecipeCardR />
    <RecipeCardL />
    <RecipeCardR />
    <RecipeCardL />
    <RecipeCardR />
    <RecipeCardL />
    <RecipeCardR />
    <RecipeCardL />




  </div>

  <div style="display: flex; justify-content: center;">
    <button class="
    bg-[#E05303]
    text-white
    rounded-tl-lg rounded-br-lg
    border-t-4 border-b-4 border-[#FFA704]
    px-4 py-1
    hover:bg-[#FFA704]
    hover:border-[#E05303]
    transition-colors duration-300
  ">
      Plus de recettes
    </button>
  </div>

  <div class="flex-1 pt-4 flex items-center relative">
    <div class="bg-[#B3F274] h-6  absolute left-0 right-0">
      <p class="text-center">Ingrédients</p>
    </div>
  </div>
  <div class="bg-[#A6DC95]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

      <!-- faire une boucle pour afficher tous les ingrédients  -->
      <IngredientsCardL />
      <IngredientsCardR />
      <IngredientsCardL />
      <IngredientsCardR />
      <IngredientsCardL />
      <IngredientsCardR />
    </div>
  </div>
















  <!-- <v-for="(maison,index) of maisonList">
  	v-if="index%2 === 0"
  		<const maisondroite = v-bind maison>
  	v-else
  		<const maisonGauche = v-bind maison> -->



  <googleMaps />
</template>





