<template>
    <div>
        <v-select
                :items="items"
                v-model="owner"
                label="Cağrı İle İlgilenen Kurum"
        ></v-select>
    </div>
</template>

<script>
    export default {
        name: "OwnerFilter",
        computed: {
            owner: {
                get: function () {
                    return this.$store.state.ownerFilter
                },
                set: function (newValue) {
                    this.$store.commit('ownerChange', {
                        owner: newValue
                    })
                }
            }
        },
        data(){
            return{
                items: [
                    {text: "Henüz Atanmamış", value: "ATANMAMIS" },
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