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
        owner: getParticipantName(event.owner),
        cagriType: event.cagriType,
        lattitude: event.lattitude,
        longitude: event.longitude
    }
}

export function getUrl(participant) {
    switch (participant) {
        case "AFAD":
            return "https://img.tamindir.com/resize/128x128/ti_e_ul/canerdil/p/afad-deprem-logo_300x300.png"
        case "AKUT":
            return "https://www.akut.org.tr/images/site/akut-logo.png"
        default:
            return "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY9qrY0GdZyZlEigojO9wmrusNMbmwb7J8zJOYdcOsLgocZhYI&usqp=CAU"
    }

}


export function getIcon(participant){

    const icons = {
        AFAD: icon({
            iconUrl: getUrl("AFAD"),
            iconSize: [50, 50]
        }),
            AKUT: icon({
            iconUrl: getUrl("AKUT"),
            iconSize: [50, 50]
        }),
            ATANMAMIS: icon({
            iconUrl: getUrl("ATANMAMIS"),
            iconSize: [50, 50]
        })
    }
    console.log(participant)
    return icons[participant]
}