<script>
  import { onMount } from 'svelte';
  import { loadCsv } from './components/tools/getData';
  import { data as dataCsv, results  } from './components/tools/stores.js';
  import Layout from './components/views/Layout.svelte';

  onMount(async () => {
    const myData = await loadCsv()
    console.log(myData);
    $dataCsv = myData
    $results = myData
	});


</script>

<main class="has-navbar-fixed-top">
  <Layout/>
</main>

<svelte:head>
  <style src="./scss/global.scss"></style>
</svelte:head>
