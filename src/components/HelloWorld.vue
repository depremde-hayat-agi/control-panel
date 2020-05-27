<template>
  <div>
    <cagri-map></cagri-map>
    <v-btn v-on:click="createCagri">Test</v-btn>
  </div>
</template>
<script>
import CagriMap from './CagriMap'
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "HelloWorld",
  components: {
    CagriMap
  },

  methods: {
    async createCagri(){
      const data = {
        "$class": "org.deha.cagri.CagriYarat",
        "cagriId": uuidv4(),
        "lattitude": Math.random() / 100 + this.$getConst('ISTANBUL_LAT'),
        "longitude": Math.random() / 100 + this.$getConst('ISTANBUL_LNG'),
        "text": "Sample help request",
        "creator": 'org.deha.participant.HayatZinciriParticipant#DEHA'
      }
      console.log(data)
      await fetch('http://34.240.2.41:3000/api/org.deha.cagri.CagriYarat', {method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
        .then(response => response.json())
        .then(data => console.log(data));
    }
  }
}
</script>