<template>
  <div class="flex justify-center items-center h-screen">
    <vue-ticker :items="items" :speed="100" :pause-on-hover="true" :direction="'left'" :item-class="'text-2xl font-bold text-red-500'"/>
  </div>
</template>

<script>
import VueTicker from 'vue-ticker'

export default{
  components: {
    VueTicker
  },
  data () {
    return {
      items: [
        'Texte défilant 1',
        'Texte défilant 2',
        'Texte défilant 3'
      ]
    }
  }
}
</script>