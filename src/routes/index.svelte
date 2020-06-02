<script>
  import { onMount } from 'svelte';
  import { loadCsv, fetchHistory  } from '../components/tools/getData';
  import { data as dataCsv, results, lastWeek, lastWeekTemp  } from '../components/tools/stores.js';
  import Layout from '../components/views/Layout.svelte';

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

<main class="has-navbar-fixed-top">
  <Layout/>
</main>
