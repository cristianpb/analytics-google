<script>
  import { data as dataCsv, results } from '../tools/stores.js';
  import { loadCsv } from '../tools/getData';

	let searchTerm = "";
  
  $results = $dataCsv

  function updateSearch() {
    if (searchTerm) {
      $results = $dataCsv.filter(x => (x.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (x.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (x.device.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (x.source.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) || (x.pagePath.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1))
    } else {
      $results = $dataCsv
    }
  }

  async function resetData() {
    searchTerm = "";
    const myData = await loadCsv()
    $results = myData
  }
	
</script>

<div class="field has-addons">
  <div class="control">
    <input class="input"  type="search" placeholder="Search ex: Poland" bind:value={searchTerm} on:input|preventDefault={updateSearch}/>
  </div>
  <div class="control">
    <a class="button is-info" href="{null}"  on:click={resetData}>
      Clear
    </a>
  </div>
</div>

<style>
  .input  {
    color: #723122;
    width: 150px;
    background-color: #EFF0EB;
  }
</style>
