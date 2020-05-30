<template>
    <div>
        <v-container  style="overflow-y: scroll; height:100%">
            <v-row dense>

                <v-col
                        v-for="(item, i) in cards"
                        :key="i"
                        cols="12"
                >
                    <v-card
                            v-on:click="changeSelectedCagri(i)"
                            :color="item.color"
                            dark
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                        class="headline"
                                        v-text="item.title"
                                ></v-card-title>

                                <v-card-subtitle v-html="'İstek yaratıcısı: ' + item.artist + '<br> İstek sahiplenicisi: ' + item.owner"></v-card-subtitle>
                                <v-card-text >
                                    <div>{{item.text}}<br>{{item.date}}</div>

                                </v-card-text>
                            </div>

                            <v-avatar
                                    class="ma-3"
                                    size="50"
                                    tile
                            >
                                <v-img :src="item.src"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import _ from "lodash";
    import {participant2text, getSrc} from "../js/common";
    import dateFormat from 'dateformat';
    export default {
        name: "Stream",
        computed: {
            cards() {
                return _.map(this.$store.getters.filteredCagris,
                    cagri => {
                        return {
                            color: this.getColor(cagri.cagriType) ,
                            title: this.getTitle(cagri.cagriType),
                            src: getSrc(false, cagri.owner, cagri.material, cagri.cagriType),
                            text: cagri.text,
                            owner: cagri.owner,
                            date: dateFormat(cagri.createdAt, "HH:MM dd-mm-yyyy"),
                            artist: this.getArtist(cagri.owner)
                        }
                    }
                )
            }
        },
        methods:{
            changeSelectedCagri(idx){
                this.$store.commit('changeSelectedCagri', {
                    idx: idx
                })
            },
            getColor(cagriType){
                switch (cagriType) {
                    case "SOS":
                        return "#EF5350"
                    case "HELP":
                        return "#EF5350"
                    case "SUPPORT":
                        return "#A5D6A7"
                    case "MAINTENANCE":
                        return "#ff0000"
                }
            },
            getTitle(cagriType){
                switch (cagriType) {
                    case "SOS":
                        return "Acil Yardım İsteği"
                    case "HELP":
                        return "Yardım İsteği"
                    case "SUPPORT":
                        return "Destekte Talebi"
                    case "MAINTENANCE":
                        return "Bakım İsteği"
                }
            },

            getArtist(owner){
                return participant2text(owner)
            }

        }
    }
</script>

<style scoped>

</style>