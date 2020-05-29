<template>
  <v-app>
    <HelloWorld/>
  </v-app>
</template>

<script>
  import {getAllCagri} from '@/js/api'
import HelloWorld from './components/HelloWorld.vue'
import {event2cagri} from "./js/common";
import _ from "lodash";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    getAllCagri().then((data) => {
      _.map(data, (event) => {
        this.$store.commit('addNewCagri', {
          cagri: event2cagri(event)
        })
      })
      console.log(this.$store.getters.filteredCagris)
    })

    console.log("Starting connection to WebSocket Server", this.$getConst('ISTANBUL_LATLNG'))
    const connection = new WebSocket("ws://34.240.2.41:3000")

    connection.onmessage = (event_json) => {
      const event = JSON.parse(event_json.data)
      if(event.$class === 'org.deha.cagri.CagriYaratildi'){
        this.$store.commit('addNewCagri', {
          cagri: event2cagri(event)
        })
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
  }
}
</script>

<style>
#app {
}
</style>
