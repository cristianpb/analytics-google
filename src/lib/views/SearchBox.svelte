<script>
	import { data as dataCsv, results, lastWeek, lastWeekTemp } from '../tools/stores.js';

	let searchTerm = '';

	$results = $dataCsv;

	function updateSearch() {
		if (searchTerm) {
			$results = $dataCsv.filter(
				(x) =>
					x.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
					x.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
					x.device.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
					x.pagePath.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
			);
			$lastWeekTemp = $lastWeek.filter(
				(x) =>
					x.country.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
					x.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
					x.device.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
					x.pagePath.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
			);
		} else {
			$results = $dataCsv;
		}
	}

	async function resetData() {
		searchTerm = '';
		$results = $dataCsv;
		$lastWeekTemp = $lastWeek;
	}
</script>

<input 
  type="text"
  id="search-navbar"
  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  placeholder="Search ex: Poland"
  bind:value={searchTerm}
  on:input|preventDefault={updateSearch}
  >
