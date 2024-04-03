<script>
  import { onMount } from 'svelte';
  import algoliasearch from 'algoliasearch/lite';

  let searchClient;
  let index;

  let query = '';
  let hits = [];

  onMount(() => {

    searchClient = algoliasearch(
      'Z1GMX6PWB9',
      'fa7e5223f22e6988eb1f12a16f14a0af',
    );

    index = searchClient.initIndex('cristianpb');

    // Warm up search
    index.search(query).then(console.log)

  });

  // Fires on each keyup in form
  async function search() {
    const result = await index.search(query);
    hits = result.hits;
    console.log(hits)
  }


</script>

<style>
  :global(em) {
    color: red;
    font-weight: bold;
    background: black;
  }
</style>


<div class="mb-6">
    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={query} on:keyup={search}>
</div>


<div class="grid grid-cols-3 gap-5">
  {#each hits as hit}
    <div class="col-span-3 sm:col-span-1">
      <h2 class="text-2xl font-bold dark:text-white">{hit.title}</h2>
      <img class="h-auto max-w-full" src="https://cristianpb.github.io{hit.thumb.path}" alt="{hit.tags.toString()}">
      <p >{hit.description}</p>
    </div>
  {/each}
</div>
