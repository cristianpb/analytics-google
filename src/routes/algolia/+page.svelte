<svelte:head >
	<title>Algolia</title>
</svelte:head>

<div class=" dark:bg-gray-900 dark:text-gray-300">
  <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Algolia InstantSearch</h1>
  <div class="px-8 ">
    <Algolia/>
  </div>
</div>

<script>
  import Algolia from '../../lib/views/Algolia.svelte';
</script>
