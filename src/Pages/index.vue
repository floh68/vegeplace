<script setup lang="ts">
import googleMaps from '@/components/googleMaps.vue';
import RecipeCardR from '../components/RecipeCardR.vue';
import RecipeCardL from '../components/RecipeCardL.vue';
import IconLove from '../components/icons/IconLove.vue';
import file from '@/components/icons/file.vue';
import IngredientsCardR from '@/components/IngredientsCardR.vue'
import IngredientsCardL from '@/components/IngredientsCardL.vue'
</script>
<template>
  <div class=" flex py-4">
    <div class="flex-1 flex items-center relative">
      <div class="bg-green-500 h-4 rounded-r-lg absolute left-0 right-0"></div>
    </div>
    <div class="flex-1 relative py-4">
      <h2 class="text-center text-2xl font-serif font-regular">Recette</h2>
    </div>
    <div class="flex-1 flex items-center relative">
      <div class="bg-green-500 h-4 rounded-l-lg absolute left-0 right-0"></div>
    </div>
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