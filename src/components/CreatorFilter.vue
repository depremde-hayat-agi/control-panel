<template>
    <div>
        <v-select
                :items="items"
                v-model="creator"
                label="Çağrı Üreticisi"
        ></v-select>
    </div>
</template>

<script>
    export default {
        name: "CreatorFilter",
        computed: {
            creator: {
                get: function () {
                    return this.$store.state.creatorFilter
                },
                set: function (newValue) {
                    this.$store.commit('creatorChange', {
                        creator: newValue
                    })
                }
            }
        },
        data(){
            return{
                items: [
                    {text: "AKUT", value: "AKUT"},
                    {text: "AFAD", value: "AFAD"},
                    {text: "DEHA", value: "DEHA"},
                    {text: "KIZILAY", value: "KIZILAY" },
                    {text: "Hepsi", value: "ALL"}
                ]
            }
        }

    }
</script>

<style scoped>

</style>