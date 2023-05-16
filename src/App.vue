<script setup lang="ts">
import FooterPage from './components/FooterPage.vue';
import googleMaps from './components/googleMaps.vue';
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>
  <HeaderPage/>
  <googleMaps/>
  <main>Le contenu principal</main>
  <FooterPage/>
</template>
