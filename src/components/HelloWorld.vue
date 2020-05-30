<template>
    <div>
            <create-cagri></create-cagri>

            <v-navigation-drawer
                    absolute
                    right
                    class="blur-div rounded"
                    style="z-index: 1000; top: 50px; right: 50px; width: 400px; height: 800px;"
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
                <v-container>
                <v-list dense>
<!--                    <v-list-item>-->
<!--                        <v-list-item-content>-->
<!--                            <v-btn v-on:click="createCagri" color="primary">Generate</v-btn>-->
<!--                        </v-list-item-content>-->
<!--                    </v-list-item>-->
                    <v-list-item>
                        <v-list-item-content>
                            <type-filter></type-filter>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <owner-filter></owner-filter>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <creator-filter></creator-filter>
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
                    <stream style="height: 350px"></stream>
                </v-container>

            </v-navigation-drawer>
            <cagri-map ></cagri-map>

    </div>
</template>
<script>

    import CagriMap from './CagriMap'
    import TypeFilter from './TypeFilter'
    import OwnerFilter from './OwnerFilter'
    import CreatorFilter from './CreatorFilter'

    import Stream from "./Stream";
    import CreateCagri from "./CreateCagri";

    export default {
        name: "HelloWorld",
        components: {
            CreateCagri,
            Stream,
            CagriMap,
            OwnerFilter,
            CreatorFilter,
            TypeFilter
        },
        data() {
            return {
            }
        },
        created() {

        }
    }
</script>
<style>
    .rounded{
        border-radius:5px !important;
    }

    .blur-div{
        background-color: rgba(255, 255, 255, 0.5) !important;
        backdrop-filter: blur(8px) !important;
    }

</style>