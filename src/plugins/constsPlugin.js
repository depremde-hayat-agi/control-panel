// constsPlugin.js

import {  icon, latLng } from "leaflet";

const YourConsts = {
    ICONS: {
        AFAD: icon({
            iconUrl: "https://img.tamindir.com/resize/128x128/ti_e_ul/canerdil/p/afad-deprem-logo_300x300.png",
            iconSize: [50, 50]
        }),
        AKUT: icon({
            iconUrl: "https://www.akut.org.tr/images/site/akut-logo.png",
            iconSize: [50, 50]
        }),
        DEHA: icon({
            iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY9qrY0GdZyZlEigojO9wmrusNMbmwb7J8zJOYdcOsLgocZhYI&usqp=CAU",
            iconSize: [50, 50]
        })
    },
    ISTANBUL_LAT: 41.015137,
    ISTANBUL_LNG: 28.979530,
    ISTANBUL_LATLNG: latLng(41.015137, 28.979530)
}
  
YourConsts.install = function (Vue, options) {
    Vue.prototype.$getConst = (key) => {
        return YourConsts[key]
    }
    Vue.prototype.$getIcon = (key) => {
        return YourConsts['ICONS'][key]
    }
}
  
export default YourConsts