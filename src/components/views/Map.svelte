<p>
  Map
</p>

<div id="map" style="width: 100%; height: 400px"></div>

<script>
  import { data as dataCsv } from '../tools/stores.js';
  import mapboxgl from 'mapbox-gl';
  import { onMount } from "svelte";

  let map

  onMount(async () => {
    mapboxgl.accessToken = '__MAPBOX_TOKEN__';
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9'
    });
    const res = await fetch(`/countries.geo.json`);
    const countries = await res.json();
    const unsubscribe = dataCsv.subscribe(myData => {
      if (myData.length > 0) {
        console.log('CHANGE',  myData.length);
        map.on('load', function() {
          countries.features.forEach((obj) => {
            let density = myData
              .filter(x => x.countryIsoCode === obj.id)
              .reduce((total, s) => total + s.sessions, 0)
            obj.properties.density = density;
          })
          drawMap(countries)
          map.on('click', 'path-countries', function(e) {
            new mapboxgl.Popup()
              .setLngLat(e.lngLat)
              .setHTML(`${e.features[0].properties.name}: ${e.features[0].properties.density}`)
              .addTo(map);
          });
        })
      }
    })

  });

  function drawMap(countries) {
    map.setCenter([37,2.8]);
    map.setZoom(1);
    map.addSource('countries', {
      type: 'geojson',
      data: countries
    })

    map.addLayer({
      'id': 'path-countries',
      'type': 'fill',
      'source': 'countries',
      'paint': {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['get', 'density'],
          0,
          '#F2F12D',
          10,
          '#EED322',
          20,
          '#E6B71E',
          30,
          '#DA9C20',
          40,
          '#CA8323',
          50,
          '#B86B25',
          75,
          '#A25626',
          100,
          '#8B4225',
          120,
          '#723122'
        ],
        'fill-opacity': 0.75
      }
    })
  }

</script>
