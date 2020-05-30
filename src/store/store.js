import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isopen: false,
        latLng: undefined,
        selectedCagriIdx: undefined,
        cagris: [],
        typeFilter: "ALL",
        ownerFilter: "ALL",
        creatorFilter: "ALL"
    },
    getters: {
      filteredCagris: function (state) {
        let filtered = _.filter(state.cagris, (cagri)=>{
            return (state.typeFilter === "ALL" || cagri.cagriType === state.typeFilter) &&
                (state.ownerFilter === "ALL" || cagri.owner === state.ownerFilter) &&
                (state.creatorFilter === "ALL" || cagri.creator === state.creatorFilter)
        })
          return _.sortBy(filtered, [function(o) { return -o.createdAt; }]);
      }
    },
    mutations: {
        changeisOpen(state, payload){
            state.latLng = payload.latLng
            return state.isopen = payload.isopen
        },
        changeSelectedCagri(state, payload){
            return state.selectedCagriIdx = payload.idx
        },
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