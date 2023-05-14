<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: {
    GoogleMap,
    Marker
  },
  data() {
    return {
      apiKey: "AIzaSyChXK5Iz8zTGhMk3hr0-BTzNjiLb42Snwo",
      lat: null,
      lng: null,
    };
  },
  created() {
    this.$getLocation()
      .then((coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<template>
  <div>
    <GoogleMap api-key="AIzaSyChXK5Iz8zTGhMk3hr0-BTzNjiLb42Snwo" style="width: 100%; height: 500px" :center="{lat: lat, lng: lng }" :zoom="15">
      <Marker :options="{ position: {lat: lat, lng: lng } }" />
    </GoogleMap>
  </div>
</template>