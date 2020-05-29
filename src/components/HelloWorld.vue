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
                <v-container>
                <v-list dense>
                    <v-list-item>
                        <v-list-item-content>
                            <v-btn v-on:click="createCagri" color="primary">Generate</v-btn>
                        </v-list-item-content>
                    </v-list-item>
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
                    <stream></stream>
                </v-container>

            </v-navigation-drawer>
        </v-card>
    </div>
</template>
<script>

    import CagriMap from './CagriMap'
    import TypeFilter from './TypeFilter'
    import OwnerFilter from './OwnerFilter'
    import CreatorFilter from './CreatorFilter'


    import Stream from "./Stream";
    import {createCagri} from "../js/api";

    export default {
        name: "HelloWorld",
        components: {
            Stream,
            CagriMap,
            OwnerFilter,
            CreatorFilter,
            TypeFilter
        },
        data() {
            return {}
        },
        created() {

        },
        methods: {
            createCagri
        }
    }
</script>