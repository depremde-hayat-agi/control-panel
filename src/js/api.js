export async function  createNewCagri(latitude, longitude, material, text, creator, validator, owner, cagriType){
    const data = {
        "lattitude": latitude,
        "longitude": longitude,
        "text": text,
        "material": material,
        "creator": creator,
        "cagriType": cagriType,
        "validator": validator,
        "owner": owner
    }
    console.log(data)
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