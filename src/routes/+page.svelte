<script>
	import { onMount } from 'svelte';
	import { fetchHistory } from '../lib/tools/getData';
	import { data as dataCsv, results, lastWeek, lastWeekTemp } from '../lib/tools/stores.js';
	import Charts from '../lib/views/Charts.svelte';
	import Footer from '../lib/views/Footer.svelte';

	onMount(async () => {
		const myData = await fetchHistory(0);
		const lastWeekData = await fetchHistory(7);
		$dataCsv = myData;
		$results = myData;
		$lastWeek = lastWeekData;
		$lastWeekTemp = lastWeekData;
	});
</script>

<svelte:head>
	<title>Analytics - Cristian Perez Brokate</title>
</svelte:head>

<div class="app dark:bg-gray-900 dark:text-gray-300">
	<Charts />
	<Footer />
</div>
