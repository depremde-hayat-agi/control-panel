export default {
  methods: {
    getParticipantName: function (id) {
        if(id === undefined)
            return 'DEHA'
        return id.split('#')[1]
    }
  }
}