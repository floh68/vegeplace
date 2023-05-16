<template>
    <div>
        <vue-ticker :items="items" />
    </div>
</template>

<script>
import VueTicker from 'vue-ticker'

export default {
    components: {
        VueTicker
    },
    data() {
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