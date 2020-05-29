export default {
  methods: {
    getParticipantName: function (id) {
        if(id === undefined)
            return 'DEHA'
        return id.split('#')[1]
    },
    async createCagri(){
      const data = {
          "lattitude": Math.random() / 100 + this.$getConst('ISTANBUL_LAT'),
          "longitude": Math.random() / 100 + this.$getConst('ISTANBUL_LNG'),
          "text": "Sample help request",
          "creator": "org.deha.participant.HayatZinciriParticipant#DEHA",
          "owner": "org.deha.participant.HayatZinciriParticipant#ATANMAMIS"
      }
      await fetch('http://34.240.2.41:3000/api/org.deha.cagri.CagriYarat', {method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
    }
  }
}