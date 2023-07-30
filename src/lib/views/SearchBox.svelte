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

<div class="relative hidden md:block">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
    <span class="sr-only">Search icon</span>
  </div>
  <input 
    type="text"
    id="search-navbar"
    class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Search ex: Poland"
    bind:value={searchTerm}
    on:input|preventDefault={updateSearch}
    >
</div>
