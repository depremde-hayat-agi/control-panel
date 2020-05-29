<template>
    <div>
        <v-select
                :items="items"
                v-model="type"
                label="Cağrı Tipleri"
        ></v-select>
    </div>
</template>

<script>
    export default {
        name: "TypesFilter",
        computed: {
            type: {
                get: function () {
                    return this.$store.state.typeFilter
                },
                set: function (newValue) {
                    this.$store.commit('typeChange', {
                        type: newValue
                    })
                }
            }
        },
        data(){
            return{
                items: [
                    {text: "Acil Yardım Çağrısı", value: "SOS"},
                    {text: "Yardım Çağrısı", value: "HELP"},
                    {text: "Destek", value: "SUPPORT"},
                    {text: "Bakım", value: "MAINTENANCE" },
                    {text: "Hepsi", value: "ALL"}
                ]
            }
        }

    }
</script>

<style scoped>

</style>