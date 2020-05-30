<template>
  <div style="height: 100vh; width: 100%">
      
    <l-map
      v-on:click="newCagri"
      :zoom="13"
      :center="center"
    >
      <l-tile-layer
        :url="url"
      />
<!--      click, participant, material, type  v-on:click="assignCagri(key)"-->
        <l-marker v-for="team in teams"  :lat-lng="team" :icon="getIcon(undefined, undefined, undefined, 'team')"  ></l-marker>
        <l-marker v-if="isopen" :lat-lng="latLng" :icon="getIcon(true)" ></l-marker>
       <l-marker v-for="(item, key) in markers"  :lat-lng="item.latLng" v-bind:key="key" :icon="getIcon(false, item.creator, item.material, item.type)" >
           <l-popup>
               <h3>{{item.title}}</h3>
               <p>
                   {{item.text}}
               </p>
               <p>
                Eğer bu yardım talebini karşılayabilceğinizi düşünüyoranız teklifi kabul edin
               </p>
               <p>
                   <v-btn  color="primary">Kabul Et</v-btn>
               </p>
           </l-popup>
       </l-marker>
    </l-map>
  </div>
</template>

<script>
    import _ from 'lodash'
import {  latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

import {getParticipantName, getIcon} from '@/js/common'
import {assignCagri} from '@/js/api'

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },

  data() {
    return {
        center: this.$getConst('ISTANBUL_LATLNG'),
      zoom: 13,
        teams_pre: [{"lat": 41.03215804866004, "long": 28.943836410603637, "support": 145}, {"lat": 41.00138309903029, "long": 29.271222347449406, "support": 33}, {"lat": 41.00910826863252, "long": 28.768376402445213, "support": 172}, {"lat": 41.006043137546584, "long": 29.08825507055681, "support": 38}, {"lat": 41.017764903876, "long": 28.844753508559272, "support": 243}, {"lat": 40.85189456958767, "long": 29.343697598187333, "support": 66}, {"lat": 40.91399134995677, "long": 29.176035769220587, "support": 46}, {"lat": 41.133711034811085, "long": 29.052574734222766, "support": 26}, {"lat": 41.140102788724974, "long": 28.853480780588892, "support": 23}, {"lat": 41.0237021795772, "long": 28.888762401340934, "support": 203}],
      url: 'https://api.mapbox.com/styles/v1/guemues/ckasnzug462b01iqrw97aqfqy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3VlbXVlcyIsImEiOiJjandoank2aWcwOTBiNDlvMXoxdGl0eHZmIn0.UYb6II-Fk9b7tCj_m4TQ0Q'
    };
  },

    computed: {
        teams(){
            return _.map(this.teams_pre, (item) => latLng(item.lat, item.long))
        },
        latLng(){
            return this.$store.state.latLng
        },
        isopen(){
            return this.$store.state.isopen
        },
        markers () {
            return _.map(this.$store.getters.filteredCagris, cagri => {console.log(cagri); return {cagriId: cagri.cagriId,  title: this.getTitle(cagri.cagriType), text: cagri.text, creator: cagri.creator, material: cagri.material, type: cagri.cagriType, latLng: latLng([cagri.lattitude, cagri.longitude])}})
        },
        selectedCagriIdx(){
            return this.$store.state.selectedCagriIdx
        }
    },
    watch: {
      selectedCagriIdx: function (i) {
          this.center = latLng([this.$store.getters.filteredCagris[i].lattitude, this.$store.getters.filteredCagris[i].longitude])
      }
    },
  methods: {
      getParticipantName,
      assignCagri,
      getIcon,
      newCagri(event){
          console.log(event.latlng)
          this.$store.commit('changeisOpen', {
              latLng: event.latlng,
              isopen: true
          })
      },
      getTitle(cagriType){
          switch (cagriType) {
              case "SOS":
                  return "Acil Yardım İsteği"
              case "HELP":
                  return "Yardım İsteği"
              case "SUPPORT":
                  return "Malzeme Veriyor"
              case "MAINTENANCE":
                  return "Bakım İsteği"
          }
      },
  }
};
</script>
<style>
    .leaflet-div-icon {
        background: #fff;
        border: 1px solid #666;
    }
</style>