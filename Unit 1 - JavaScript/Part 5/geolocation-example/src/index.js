import {MyGeolocation} from "./my-geolocation.class";
import {Map, Marker} from "maplibre-gl";

import maplibrecss from "../node_modules/maplibre-gl/dist/maplibre-gl.css";
import css from "../styles.css";

let p = document.getElementById("coordinates");

const apiKey = "AAPK5fa1609b719e42bcacbe0853c2e0ef63etisgeCcpqCcGL5GKcb8jPzPNDm-arxk_yZiQ-VaFnfw_wuQKo41AlguZ12-PwOk";
const basemapEnum = "OSM:Streets";

MyGeolocation.getGeolocation()
    .then(coords => {
        const map = new Map({
            container: "map",
            style: `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapEnum}?type=style&token=${apiKey}`, // stylesheet location
            center: [coords.longitude, coords.latitude], // starting position [lng, lat]
            zoom: 13 // starting zoom
        });
        new Marker({color: "red"})
            .setLngLat([coords.longitude, coords.latitude])
            .addTo(map);
    })
    .catch(error => p.textContent = error);
