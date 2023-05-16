<script setup lang="ts">
import textedefilant from './components/textedefilant.vue';
import FooterPage from './components/FooterPage.vue';
import googleMaps from './components/googleMaps.vue';
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>
  <HeaderPage/>
  <textedefilant/>
  <googleMaps/>
  <main>Le contenu principal</main>
  <FooterPage/>
</template>
