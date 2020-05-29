import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cagris: [],
        typeFilter: "ALL",
        ownerFilter: "ALL",
        creatorFilter: "ALL"
    },
    getters: {
      filteredCagris: function (state) {
        return _.filter(state.cagris, (cagri)=>{
            return (state.typeFilter === "ALL" || cagri.type === state.typeFilter) &&
                (state.ownerFilter === "ALL" || cagri.owner === state.ownerFilter) &&
                (state.creatorFilter === "ALL" || cagri.creator === state.creatorFilter)
        })
      }
    },
    mutations: {
        addNewCagri(state, payload) {
            return state.cagris.push(payload.cagri);
        },
        typeChange(state, payload){
            state.typeFilter = payload.type
        },
        ownerChange(state, payload){
            state.ownerFilter = payload.owner
        },
        creatorChange(state, payload){
            state.creatorFilter = payload.creator
        }
    }
})