Filter: <input bind:value={searchTerm} on:keyup|preventDefault={updateSearch}/>

<script>
  import { data as dataCsv } from '../tools/stores.js';
  import { loadCsv } from '../tools/getData';

	let searchTerm = "";

  async function updateSearch() {
    if (searchTerm) {
      console.log(searchTerm)
      //loadCsv()
      dataCsv.update(v => v.filter(x => (x.country.indexOf(searchTerm) !== -1) || (x.city.indexOf(searchTerm) !== -1) || (x.device.indexOf(searchTerm) !== -1) || (x.source.indexOf(searchTerm) !== -1)))
    }
  }
	
</script>
