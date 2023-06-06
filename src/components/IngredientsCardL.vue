<script setup lang="ts">
import { pb } from '@/backend'
import type { IngredientsResponse } from '@/pocketbase-types'

const props: IngredientsResponse = defineProps<IngredientsResponse>()
const img0 = props.ingredients_img[0]
// si pas d'image (undefined) garde undefined
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
</script>
<template>
  <div class="flex justify-start items-start w-[228px] h-[122px] relative">
    <img :src="urlImg0" class="self-stretch flex-grow rounded-tl-[10.59px] rounded-bl-[10.59px] object-cover" />
    <div
      class="flex flex-col justify-between items-center self-stretch flex-grow relative px-[11px] py-[19px] rounded-tr-[10px] rounded-br-[10px] bg-[#f29f05]">
      <p class="flex-grow-0 flex-shrink-0 w-[69px] text-[18.58974266052246px] text-left text-black">
        {{ nom }}
      </p>
      <p class="flex-grow-0 flex-shrink-0 w-16 text-[13.942306518554688px] text-left text-black">
        prix : {{prix}}€
      </p>
      <p class="flex-grow-0 flex-shrink-0 w-20 text-[9.05155086517334px] font-bold text-left text-[#242d3e]">
        Ajouter au panier
      </p>
    </div>
  </div>
</template>