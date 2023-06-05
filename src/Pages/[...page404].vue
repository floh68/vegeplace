<script setup lang="ts">
</script>
<script setup lang="ts">
</script>
<template>
    
    <div class="bg-[#E05303] text-white d-flex flex-column align-items-center">
            <div class="d-flex justify-content-end">
                <img class="mx-auto h-[10vh]" src="../components/icons/fleur.png" alt="404 error" />
            </div>
        <h2 class="font-bold text-2xl p-6 text-center">
            Erreur 404
        </h2>
        <h2 class="text-2xl p-6 text-center">
            Votre page est introuvable
        </h2>
        <h2 class="underline text-2xl p-6 text-center">
            <RouterLink to="/">Retourner à l'accueil</RouterLink>
        </h2>
        <div class="d-flex justify-content-start">
            <img class="mx-auto h-[10vh]" src="../components/icons/fleur.png" alt="404 error" />
        </div>
    </div>
</template>