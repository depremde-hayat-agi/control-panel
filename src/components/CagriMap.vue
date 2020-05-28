<template>
  <div style="height: 750px; width: 100%">
      
    <l-map
      :zoom="zoom"
      :center="$getConst('ISTANBUL_LATLNG')"
    >
      <l-tile-layer
        :url="url"
      />
<!--        v-on:click="assignCagri(key)"-->
       <l-marker v-for="(item, key) in markers"  :lat-lng="item.latLng" v-bind:key="key" :icon="$getIcon(getParticipantName(item.owner))" >
           <l-popup>
               <h3>DeHA Çağrısı</h3>
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                   sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
                   Donec finibus semper metus id malesuada.
               </p>
               <p>
                   <v-btn  color="primary">Ekip Ata</v-btn>
               </p>
           </l-popup>
       </l-marker>
    </l-map>
   a
  </div>
</template>

<script>
import _ from 'lodash'
import {  latLng } from "leaflet";
import { LMap, LIcon, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

import ngo from '@/mixins/ngo'

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
  mixins: [ngo],
  data() {
    return {
      markers: {},
      zoom: 13,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    };
  },
  created: function() {
    console.log("Starting connection to WebSocket Server", this.$getConst('ISTANBUL_LATLNG'))
    const connection = new WebSocket("ws://34.240.2.41:3000")
    
    connection.onmessage = (event_json) => {
      const event = JSON.parse(event_json.data)
      if(event.$class === 'org.deha.cagri.CagriYaratildi'){
        this.$set(this.markers, event.cagriId, {cagriId: event.cagriId, owner: event.owner, latLng: latLng([event.lattitude, event.longitude])})

        return
      }
      if(event.$class === 'org.deha.cagri.CagriAtandi' & event.cagriId in this.markers){
        this.markers[event.cagriId]['owner'] = event.owner

        return
      }      
    }

    connection.onopen = function(event) {
      /*
      this.send(JSON.stringify({id: 1, coor: [41.015137, 28.979530]}))
      */
      console.log("Successfully connected to the echo websocket server...")
      
    }

  },
  methods: {
    
    async assignCagri(cagriId){

      const data = {
        "cagriId": cagriId,
        "owner": 'org.deha.participant.HayatZinciriParticipant#AFAD'
      }

      await fetch('http://34.240.2.41:3000/api/org.deha.cagri.CagriAta', {method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
    },
    innerClick() {
      alert("Click!");
    }
  }
};
</script>