<script>
  import { data as dataCsv, results } from '../tools/stores.js';
  import { loadCsv } from '../tools/getData';

	let searchTerm = "";
  
  $results = $dataCsv

  function updateSearch() {
    if (searchTerm) {
      console.log(searchTerm)
      $results = $dataCsv.filter(x => (x.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (x.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (x.device.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (x.source.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (x.pagePath.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1))
    } else {
      $results = $dataCsv
    }
  }
	
</script>

<input class="input"  type="text" placeholder="Search ex: Poland" bind:value={searchTerm} on:input|preventDefault={updateSearch}/>

<style>
  .input, .textarea, .select select {
    color: white;
  }
</style>
