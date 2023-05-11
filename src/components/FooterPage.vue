<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
</script>
<template>
    <footer class="bg-blue-900 px-5 pt-4">
      <div class="text-white columns-2 ">
        <div class="H4 ">
            Contactez Nous
            <ul>
              <li class="text-sm pt-2">
                <a href="vegeplace@free.fr">vegeplace@free.fr</a>
              </li>
            </ul>
        </div>
        <div class="H4">
          En savoir Plus
          <ul>
              <li class="text-sm pt-2">
                Calendrier des évenements à venir
              </li>
            </ul>
        </div>
      </div>
      <ul>
          <li>
            <a href="#"><IconFacebook /></a>
          </li>
          <li>
            <a href="#"><IconInstagram /></a>
          </li>
          <li>
            <a href="#"><IconLinkedin /></a>
          </li>
      </ul>
    </footer>
  </template>

