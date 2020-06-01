<script>
  import { onMount } from 'svelte';
  import { loadCsv, fetchHistory  } from '../components/tools/getData';
  import { data as dataCsv, results, lastWeek  } from '../components/tools/stores.js';
  import Layout from '../components/views/Layout.svelte';

  onMount(async () => {
    const myData = await loadCsv()
    $lastWeek = await fetchHistory()
    $dataCsv = myData
    $results = myData
	});


</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<main class="has-navbar-fixed-top">
  <Layout/>
</main>
