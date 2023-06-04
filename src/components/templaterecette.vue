<script setup lang="ts">
import IconLove from './icons/IconLove.vue';
//const urlImage = pb.files.getUrl(props, props.photo, { thumb: '100x200' })
</script>
<template>
    <div class="flex justify-center items-center m-4 p-4 ">
        <img src="https://via.placeholder.com/500" class="rounded-lg" alt="">
    </div>

    <div class="text-center">
        <h2>Pancakes</h2>
        <p>Pour 5 personnes</p>
        <p>5.5€</p>

        <div class="grid grid-cols-3 m-4 lg:w-1/2 lg:mx-auto">
            <button class="col-span-2 bg-yellow-500 text-white py-2 px-4 rounded-l-lg">
                Ajouter au panier
            </button>
            <div class="flex justify-center items-center col-span-1 p-2">
                <IconLove />
            </div>
        </div>
    </div>

    <p class="px-6 pb-6 lg:w-1/2 lg:mx-auto">Recette disponible en entière après l’achat de celle
        ci.
        Vous pouvez retrouver ci dessous le contenu de la
        recette avec les ingrédients et étapes regroupées dans une fiche recette (accessible à l’achat ) ainsi qu’une vidéo
        de réalisation de la recette ( accessible à l’achat ).
        Les ingrédients sont compris dans l’achat de la recette mais ce ne sont pas des produits frais du jour .</p>

    <h2 class="text-center">Ingrédients</h2>
    <ul class="px-6 pb-6 lg:w-1/2 lg:mx-auto">
        <li>150g farine</li>
        <li>100g sucre</li>
        <li>2 oeufs...</li>
    </ul>

    <!-- boucle avec les ingrédients à la place  -->

    <h2 class="text-center">recette</h2>

    <a href="chemin-vers-votre-fichier.pdf" download class="flex items-center underline font-bold">

        <file />

        <p>Télécharger la recette (PDF)</p>
    </a>



    <div class="flex items-center justify-center">
        <div class="aspect-w-16 aspect-h-9 lg:w-1/2 rounded">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PqYNIzv5bCM" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
    </div>
</div></template>