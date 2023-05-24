<script setup lang="ts">
import IconFacebook from '@/components/icons/IconFacebook.vue'
</script>

<template>
  <div class="flex justify-center items-center py-8 mx-12">
    <div
      class="flex flex-col justify-between items-center self-stretch flex-grow relative px-[11px] py-[19px] rounded-tl-[10px] rounded-bl-[10px] bg-[#f29f05]"
    >
      <p class="flex-grow-0 flex-shrink-0 w-[69px] text-[18.58974266052246px] text-left text-black">
        Pancake
      </p>
      <p class="flex-grow-0 flex-shrink-0 w-16 text-[13.942306518554688px] text-left text-black">
        prix : 5.5€
      </p>
      <p
        class="flex-grow-0 flex-shrink-0 w-20 text-[9.05155086517334px] font-bold text-left text-black"
      >
        Ajouter au panier
      </p>
    </div>
    <img
      src="pancake.jpeg"
      class="self-stretch flex-grow rounded-tr-[10px] rounded-br-[10px] object-cover"
    />
  </div>
</template>