import {icon} from "leaflet";

export function owner2Text(owner){
    switch(owner) {
        case "DEHA":
            return "DEHA"
        case "AFAD":
            return "AFAD"
        case "ATANMAMIS":
            return "Atanmamış Çağrılar"
        case "ALL":
            return "Tüm Çağrılar"
    }
}

export function getParticipantName (id) {
    return id.split('#')[1]
}

export function event2cagri(event){
    return {
        cagriId: event.cagriId,
        creator: getParticipantName(event.creator),
        validator: getParticipantName(event.validator),
        owner: getParticipantName(event.owner),
        lattitude: event.lattitude,
        longitude: event.longitude
    }
}

export function getIcon(participant){

    const icons = {
        AFAD: icon({
            iconUrl: "https://img.tamindir.com/resize/128x128/ti_e_ul/canerdil/p/afad-deprem-logo_300x300.png",
            iconSize: [50, 50]
        }),
            AKUT: icon({
            iconUrl: "https://www.akut.org.tr/images/site/akut-logo.png",
            iconSize: [50, 50]
        }),
            ATANMAMIS: icon({
            iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY9qrY0GdZyZlEigojO9wmrusNMbmwb7J8zJOYdcOsLgocZhYI&usqp=CAU",
            iconSize: [50, 50]
        })
    }
    return icons[participant]
}