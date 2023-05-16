<script setup lang="ts">
import FooterPage from './components/FooterPage.vue';
import googleMaps from './components/googleMaps.vue';
import HeaderPage from './components/HeaderPage.vue';
import TexteDefilant from './components/TexteDefilant.vue';
</script>

<template>
  <TexteDefilant/>
  <HeaderPage/>
  <googleMaps/>
  <main>Le contenu principal</main>
  <FooterPage/>
</template>
