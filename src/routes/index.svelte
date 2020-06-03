<script>
  import { onMount } from 'svelte';
  import { loadCsv, fetchHistory  } from '../components/tools/getData';
  import { data as dataCsv, results, lastWeek, lastWeekTemp  } from '../components/tools/stores.js';
  import Charts from '../components/views/Charts.svelte';
  import Footer from '../components/views/Footer.svelte';

  onMount(async () => {
    const myData = await loadCsv()
    const lastWeekData = await fetchHistory()
    $dataCsv = myData
    $results = myData
    $lastWeek = lastWeekData
    $lastWeekTemp = lastWeekData
	});


</script>

<svelte:head>
	<title>Analytics - Cristian Perez Brokate</title>
</svelte:head>

<div class="app">
  <Charts/>
  <Footer/>
</div>
