<!-- <template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Définir votre clé API ici également
const apiKey = 'VOTRE_CLE_API';

// Définir les coordonnées du centre de la carte
const center = { lat: 37.7749, lng: -122.4194 };

// Définir la fonction d'initialisation de la carte
const initMap = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    center,
    zoom: 12,
  });

  // Ajouter un marqueur sur la carte
  const marker = new google.maps.Marker({
    position: center,
    map,
    title: 'Hello World!',
  });
};

// Créer une référence pour stocker la carte
const mapRef = ref<google.maps.Map | null>(null);

// Effectuer l'initialisation de la carte lorsque le composant est monté
onMounted(() => {
  // Charger l'API Google Maps avec la clé API
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
  script.onload = initMap;
  document.head.appendChild(script);
});
</script>
 -->