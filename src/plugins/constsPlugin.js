// constsPlugin.js

import {  icon, latLng } from "leaflet";

const YourConsts = {
    ICON: icon({
        iconUrl: "https://adalarpostasi.files.wordpress.com/2015/06/old-car-2-icon.png",
        iconSize: [50, 50]
    }),
    ISTANBUL_LAT: 41.015137,
    ISTANBUL_LNG: 28.979530,
    ISTANBUL_LATLNG: latLng(41.015137, 28.979530)
}
  
YourConsts.install = function (Vue, options) {
    Vue.prototype.$getConst = (key) => {
        return YourConsts[key]
    }
}
  
export default YourConsts