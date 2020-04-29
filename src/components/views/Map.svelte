<div id="map"  bind:this={mapContainer} style="width: 100%; height: 400px"></div>

<script>
  import { data as dataCsv, results } from '../tools/stores.js';
  import L from "leaflet";
  import { onMount } from "svelte";

  let leafletMap;
  let mapContainer;
  let countriesLayer;
  let center = [20, 15.8];
  let zoom = 1;

  onMount(async () => {
    leafletMap = L.map(mapContainer, {
      svgSprite: false,
      preferCanvas: false,
      zoomControl: false,
      center: center,
      zoom: zoom
    });
    leafletMap.doubleClickZoom.disable();
    L.control.zoom({
        position: 'topright'
    }).addTo(leafletMap);

    const res = await fetch(`__BASEURL__/countries.geo.json`);
    const countries = await res.json();

    const unsubscribe = results.subscribe(myData => {
      if (myData.length > 0) {
        console.log('Change',  myData.length);
        countries.features.forEach((obj) => {
          let density = myData
            .filter(x => x.countryIsoCode === obj.id)
            .reduce((total, s) => total + s.sessions, 0)
          obj.properties.density = density;
        })
        leafletMap.eachLayer(l => leafletMap.removeLayer(l))
        countriesLayer = L.geoJson(countries, {
          style, 
          onEachFeature: (f, l) => l.bindPopup(`${f.properties.name}: ${f.properties.density}`)
          })
        countriesLayer.addTo(leafletMap);
      }
    })
  });

  function getColor(d) {
    return d > 1000 ? '#800026' :
      d > 120  ? '#723122' :
      d > 100  ? '#8B4225' :
      d > 75  ? '#A25626' :
      d > 40  ? '#B86B25' :
      d > 20  ? '#CA8323' :
      d > 10   ? '#DA9C20' :
      d > 5   ? '#E6B71E' :
      d >= 1   ? '#EED322' :
      'white';
  }

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

</script>
