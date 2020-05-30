<template>
    <v-navigation-drawer
            absolute
            v-bind:class="{ 'opened': isopen, 'closed': !isopen }"
            class="rounded blur-div text-center"
            style="z-index: 1000; top: 50px; left: 50px;"
    >
        <v-container>
            <h3 class="ma-4"> Yeni Çağrı Yarat<br></h3>
            <small v-if="isopen">Latitude: {{parseInt(latLng.lat * 1000) / 1000}}<br>Longitude: {{parseInt(latLng.lng * 1000) / 1000}}</small>
            <v-select
                    v-model="type"
                    :items="typeItems"
                    label="Çağrı Tipi"
            ></v-select>
            <v-select
                    v-model="validator"
                    :items="validatorItems"
                    label="Tasdikleyen Kurum"
            ></v-select>
            <v-select
                    v-model="material"
                    :items="materialItems"
                    label="İstenen ya da sağlanan mal"
            ></v-select>
            <v-textarea
                    solo
                    v-model="reqtext"
                    name="input-7-4"
                    label="Varsa ek notlarınızı yazın"
            ></v-textarea>
            <v-card-actions class="justify-center">
                <v-btn v-on:click="closeCagri()" color="warning">İptal et</v-btn>
                <v-btn v-on:click="createNewCagri(latLng.lat, latLng.lng, material, reqtext, 'AKUT', validator, 'ATANMAMIS', type)" color="primary">Oluştur</v-btn>
            </v-card-actions>
        </v-container>
    </v-navigation-drawer>
</template>

<script>
    import {createNewCagri} from "../js/api";

    export default {
        name: "CreateCagri",
        data(){
          return{
                reqtext: "",
                material: "other",
                validator: "IBB",
                type: "HELP",
                typeItems: [
                    {text: "Acil Yardım Çağrısı", value: "SOS"},
                    {text: "Yardım Çağrısı", value: "HELP"},
                    {text: "Destek", value: "SUPPORT"},
                    {text: "Bakım", value: "MAINTENANCE" },
                    {text: "Hepsi", value: "ALL"}
                ],
                  validatorItems: [
                      {text: "IBB", value: "IBB"},
                      {text: "AFAD", value: "AFAD"},
                      {text: "AKOM", value: "AKOM"},
                      {text: "Yok", value: "YOK" }
                  ],
                materialItems: [
                    {text: "Diğer", value: "diger"},
                    {text: "Çadır", value: "cadir"},
                    {text: "Tekstil", value: "tekstil"},
                    {text: "Gıda", value: "gida" },
                    {text: "Su", value: "su"},
                    {text: "Tıbbi", value: "tibbi"}
                ]
            }
        },
        computed: {
            latLng(){
                console.log(this.$store.state.latLng)
              return this.$store.state.latLng
            },
            isopen(){
                return this.$store.state.isopen
            }
        },
        methods:{
            createNewCagri,
            closeCagri(){
                this.$store.commit('changeisOpen', {
                    isopen: false
                })
            },
        }
    }
</script>

<style scoped>
    .closed{
        width: 375px !important;
        height: 0px !important;
        transition: height 0.4s linear !important;
    }
    .opened{
        width: 375px !important;
        height: 580px !important;
        transition: height 0.4s linear !important;
    }
</style>