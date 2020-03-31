Filter: <input bind:value={searchTerm} on:input|preventDefault={updateSearch}/>

<script>
  import { data as dataCsv, results } from '../tools/stores.js';
  import { loadCsv } from '../tools/getData';

	let searchTerm = "";
  
  $results = $dataCsv

  function updateSearch() {
    if (searchTerm) {
      console.log(searchTerm)
      $results = $dataCsv.filter(x => (x.country.indexOf(searchTerm) !== -1) || (x.city.indexOf(searchTerm) !== -1) || (x.device.indexOf(searchTerm) !== -1) || (x.source.indexOf(searchTerm) !== -1))
    } 
  }
	
</script>
