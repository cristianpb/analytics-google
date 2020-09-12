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
    index.search({ query }).then(console.log)

  });

  // Fires on each keyup in form
  async function search() {
    const result = await index.search({ query });
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


<h1>Svelte InstantSearch</h1>

<div>
  <input type="text" bind:value={query} on:keyup={search}>
</div>


{#each hits as hit}
  {JSON.stringify(hit)}
{/each}
