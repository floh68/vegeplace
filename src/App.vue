<script setup lang="ts">
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <HeaderPage/>
  <RouterView/>
  <FooterPage/>
</template>
