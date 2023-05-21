<script setup lang="ts">
//import textedefilant from './components/textedefilant.vue';
import FooterPage from './components/FooterPage.vue';
import googleMaps from './components/googleMaps.vue';
import HeaderPage from './components/HeaderPage.vue';
//import TexteDefilant from './components/TexteDefilant.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <TexteDefilant/>
  <HeaderPage/>
  <RouterView/>
  <textedefilant/>
  <googleMaps/>
  <main>Le contenu principal</main>
  <FooterPage/>
</template>
