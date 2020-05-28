<template>
  <div>
    <v-card height="100%">
      <cagri-map></cagri-map>
      <v-navigation-drawer
              width="400px"
              absolute
              permanent
              right
              style="z-index: 1000"
      >
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Gözde Ünal</v-list-item-title>
              <v-list-item-subtitle>AKUT çağrı sistemine giriş yapıldı</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-btn v-on:click="createCagri" color="primary">Generate</v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
<!--      -->



<!--    <v-btn v-on:click="createCagri">Test</v-btn>-->
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
  data(){
    return{
    }
  },

  methods: {
    async createCagri(){
      const data = {
        "lattitude": Math.random() / 100 + this.$getConst('ISTANBUL_LAT'),
        "longitude": Math.random() / 100 + this.$getConst('ISTANBUL_LNG'),
        "text": "Sample help request",
        "creator": "org.deha.participant.HayatZinciriParticipant#DEHA",
        "owner": "org.deha.participant.HayatZinciriParticipant#ATANMAMIS"
      }
      await fetch('http://34.240.2.41:3000/api/org.deha.cagri.CagriYarat', {method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
    }
  }
}
</script>