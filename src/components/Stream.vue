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

                                <v-card-subtitle v-text="'İstek yaratıcısı: ' + item.artist"></v-card-subtitle>
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
    import {getUrl, participant2text} from "../js/common";

    export default {
        name: "Stream",
        computed: {
            cards() {
                return _.map(this.$store.getters.filteredCagris,
                    cagri => {
                        return {
                            color: this.getColor(cagri.cagriType) ,
                            title: this.getTitle(cagri.cagriType),
                            src: this.getSrc(cagri.creator),
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
                        return "#ff0000"
                    case "HELP":
                        return "#ff0000"
                    case "SUPPORT":
                        return "#ff0000"
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
                        return "Destekte Bulunma İsteği"
                    case "MAINTENANCE":
                        return "Bakım İsteği"
                }
            },
            getSrc(creator){
                return getUrl(creator)
            },
            getArtist(owner){
                return participant2text(owner)
            }

        }
    }
</script>

<style scoped>

</style>