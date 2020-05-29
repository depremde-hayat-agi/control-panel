export async function  createCagri(){
    const data = {
        "lattitude": Math.random() / 100 + this.$getConst('ISTANBUL_LAT'),
        "longitude": Math.random() / 100 + this.$getConst('ISTANBUL_LNG'),
        "text": "Sample help request",
        "creator": "DEHA",
        "cagriType": "SOS",
        "validator": "ATANMAMIS",
        "owner": "ATANMAMIS"
    }
    await fetch('http://34.240.2.41:3000/api/org.deha.cagri.CagriYarat', {method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
}

export async function assignCagri(cagriId){

    const data = {
        "cagriId": cagriId,
        "owner": 'org.deha.participant.HayatZinciriParticipant#AFAD'
    }

    await fetch('http://34.240.2.41:3000/api/org.deha.cagri.CagriAta', {method: 'POST', mode: 'cors', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
}

export async function getAllCagri(){
    return await fetch('http://34.240.2.41:3000/api/queries/AllCagri?limit=50&skip=0', {method: 'GET', mode: 'cors'}).then(response => response.json())
}