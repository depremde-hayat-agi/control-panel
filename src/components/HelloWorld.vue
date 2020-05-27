<template>
  <div style="height: 500px; width: 100%">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
    >
      <l-tile-layer
        :url="url"
      />
       <l-marker v-for="m in markers" :lat-lng="m.latlng" v-bind:key="m.id" :icon="icon" >
       </l-marker>
    </l-map>
   
  </div>
</template>

<script>
import _ from 'lodash'
import { latLng } from "leaflet";
import { LMap, LIcon, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import {  icon } from "leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
    return {
      markers: [],
      zoom: 13,
      center: latLng(41.015137, 28.979530),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      mapOptions: {
        zoomSnap: 0.5
      },
      icon: icon({
        iconUrl: "https://adalarpostasi.files.wordpress.com/2015/06/old-car-2-icon.png",
        iconSize: [50, 50]
      }),
    };
  },
  created: function() {
    console.log("Starting connection to WebSocket Server")
    const connection = new WebSocket("ws://34.240.2.41:3000")

    connection.onmessage = (event) => {
      console.log(event.data)
      /*
      const jsondata = JSON.parse(event.data)
      const id = jsondata.id
      const coor = latLng(jsondata.coor)

      this.markers.push({id:id, latlng: coor})
      console.log(this.markers);
      */
    }

    connection.onopen = function(event) {
      /*
      this.send(JSON.stringify({id: 1, coor: [41.015137, 28.979530]}))
      */
      console.log("Successfully connected to the echo websocket server...")
      
    }

  },
  methods: {
    innerClick() {
      alert("Click!");
    }
  }
};
</script>