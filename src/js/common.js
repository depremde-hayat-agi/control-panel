import {icon} from "leaflet";


export function getParticipantName (id) {
    return id.split('#')[1]
}

export function participant2text(participant){
    switch (participant) {
        case "AFAD":
            return "AFAD"
        case "AKUT":
            return "AKUT"
        default:
            return "DeHA"
    }
}

export function event2cagri(event){
    return {
        cagriId: event.cagriId,
        creator: getParticipantName(event.creator),
        validator: getParticipantName(event.validator),
        text: event.text,
        material: event.material,
        owner: getParticipantName(event.owner),
        createdAt: new Date(event.createdAt),
        cagriType: event.cagriType,
        lattitude: event.lattitude,
        longitude: event.longitude
    }
}

/*
{text: "Diğer", value: "diger"},
{text: "Çadır", value: "cadir"},
{text: "Tekstil", value: "tekstil"},
{text: "Gıda", value: "gida" },
{text: "Su", value: "su"},
{text: "Tıbbi", value: "tibbi"}
*/
export function getIcon(click, participant, material, type){
    /*
    type: help or support
    participant:
    */
    return icon({
        iconUrl: getSrc(click, participant, material, type),
        iconSize: [50, 50]
    })

}


export function getSrc(click, participant, material, type){
    /*
    type: help or support
    participant:
    */

    console.log(click, participant, material, type)
    if(click)
        return "https://lh3.googleusercontent.com/proxy/YQr11vosBDrG5t9rDRVP6mHGWjO_Gu8N_R7NK2qhtvFjuzm0LfUbwyV3p5wxK3iC356lcGYOZXW_wUO0JWha5ZC3-yL2DdMdkBpJ3nc2n9H-qAgU-1Z7-V9pGkycMlXyI3NJkbYFhgBxXp3vPyhzKKM"

    if(type === 'team')
        return 'https://www.shareicon.net/data/256x256/2016/09/01/821861_medical_512x512.png'

    if(type === 'SOS')
        return "/earthquake.png"

    if(type === 'HELP'){
        if(material === 'gida')
            return "/bread-req.png"

        if(material === 'tekstil')
            return "/cloth-req.png"

        if(material === 'cadir')
            return "/tent-req.png"

        if(material === 'tibbi')
            return "/vaccine-req.png"

        if(material === 'su')
            return "/water-req.png"

        if(material === 'diger')
            return "/other-req.png"
    }
    if(material === 'diger')
        return "/other-supply.png"

    if(material === 'gida')
        return "/bread-supply.png"

    if(material === 'tekstil')
        return "/cloth-supply.png"

    if(material === 'cadir')
        return "/tent-supply.png"

    if(material === 'tibbi')
        return "/vaccine-supply.png"

    if(material === 'su')
        return "/water-supply.png"

    console.log('No No no')
}