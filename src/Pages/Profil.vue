<script setup lang="ts">
import RecipeCardR from '../components/RecipeCardR.vue';
import RecipeCardL from '../components/RecipeCardL.vue';
</script>

<template>
    <div class="pt-8 text-center">
        <img class="mx-auto rounded-full w-40 h-40" src="../components/icons/profilpic.png" alt="Profile Image" />

        <div class="flex items-center justify-center mt-4">
            <img class="w-12 h-12 rounded-full" src="../components/icons/leafL.png" alt="Illustration" />
            <h3 class="text-lg font-bold ml-4">Nom et prénom</h3>
            <img class="w-12 h-12 rounded-full ml-4" src="../components/icons/leafR.png" alt="Another Image" />
        </div>

        
    </div>
    <h2 class="text-2xl font-bold mx-6 my-4">Favoris</h2>

      <div class=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <RecipeCardR />
        <RecipeCardL />
        <RecipeCardR />
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
    mb-6
  ">
          Voir plus
        </button>

        </div>



    <div class="bg-[#86BF6B]">
      <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold text-center">Tips et conseils pour être plus écologique</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <!-- Première ligne -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <img class="w-full h-auto" src="../components/imagescar/photo_1.webp" alt="Photo 1" />
            </div>
            <ul class="col-span-2 md:col-span-1 flex flex-col md:flex-row-reverse">
              <li>Acheter des choses réutilisables, des produits avec des composants plus sains</li>
              <li>Vérifiez les labels</li>
            </ul>
          </div>

          <!-- Deuxième ligne -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <img class="w-full h-auto" src="../components/imagescar/photo_1.webp" alt="Photo 2" />
            </div>
            <ul class="col-span-2 md:col-span-1 flex flex-col md:flex-row-reverse">
              <li>Eteignez vos lumières quand il n'y en a pas besoin</li>
              <li>Utilisez le mode éco sur vos machines à laver et lave-linge</li>
            </ul>
          </div>

          <!-- Troisième ligne -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <img class="w-full h-auto" src="../components/imagescar/photo_1.webp" alt="Photo 3" />
            </div>
            <ul class="col-span-2 md:col-span-1 flex flex-col md:flex-row-reverse">
              <li>Utilisez des bocaux pour mettre vos aliments achetés en vrac</li>
              <li>Remplacez les sachets en plastique et les cartons par des sacs en tissu</li>
            </ul>
          </div>
        </div>
      </div>
    </div>






</template>


