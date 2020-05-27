<template>
  <div style="height: 500px; width: 100%">
      
    <l-map
      :zoom="zoom"
      :center="$getConst('ISTANBUL_LATLNG')"
    >
      <l-tile-layer
        :url="url"
      />
       <l-marker v-for="m in markers" :lat-lng="m.latlng" v-bind:key="m.id" :icon="$getConst('ICON')" >
       </l-marker>
    </l-map>
   
  </div>
</template>

<script>
import _ from 'lodash'
import {  latLng } from "leaflet";

import { LMap, LIcon, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";


export default {
  name: "Map",
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
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    };
  },
  created: function() {
    console.log("Starting connection to WebSocket Server", this.$getConst('ISTANBUL_LATLNG'))
    const connection = new WebSocket("ws://34.240.2.41:3000")
    
    connection.onmessage = (event) => {
      const data = JSON.parse(event.data)
      this.markers.push({id: data.cagriId, latlng: latLng([data.lattitude, data.longitude])})
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