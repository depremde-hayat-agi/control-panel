<template>
  <div style="height: 1000px; width: 100%">
      
    <l-map
      :zoom="13"
      :center="center"
    >
      <l-tile-layer
        :url="url"
      />
<!--        v-on:click="assignCagri(key)"-->
       <l-marker v-for="(item, key) in markers"  :lat-lng="item.latLng" v-bind:key="key" :icon="getIcon(item.owner)" >
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
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    };
  },
    computed: {
        markers () {
            console.log(this.$store.getters.filteredCagris)
            return _.map(this.$store.getters.filteredCagris, cagri => {return {cagriId: cagri.cagriId, owner: cagri.owner, latLng: latLng([cagri.lattitude, cagri.longitude])}})
        },
        selectedCagriIdx(){
            return this.$store.state.selectedCagriIdx
        }
    },
    watch: {
      selectedCagriIdx: function (i) {
          console.log('selam')
          this.center = latLng([this.$store.getters.filteredCagris[i].lattitude, this.$store.getters.filteredCagris[i].longitude])
      }
    },
  methods: {
      getParticipantName,
      assignCagri,
      getIcon
  }
};
</script>