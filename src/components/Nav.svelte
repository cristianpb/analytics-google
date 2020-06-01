<script>
	export let segment;

  import SearchBox from './views/SearchBox.svelte';
  import { loadCsv } from './tools/getData';
  import { results } from './tools/stores.js'
  let total
  let burgerState = false;

  const unsubscribe = results.subscribe(myData => {
    total = myData.reduce((total, s) => total + s.sessions, 0);
  });

  async function resetData() {
    const myData = await loadCsv()
    $results = myData
    console.log("RESET", $results.length);
  }

  function toggleBurger() {
    burgerState = !burgerState
  }

</script>

<nav class="navbar is-link is-fixed-top  ontop" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div href="{null}" class="navbar-item">
      <a href="{null}" class="button" on:click={resetData}>
        ♻️
      </a>
    </div>
    <div class="navbar-item">
      <SearchBox/>
    </div>
    <a href="{null}" 
       class:is-active={burgerState}
       on:click={toggleBurger}
       role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navMenu" class="navbar-menu" class:is-active={burgerState}>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-danger" aria-current='{segment === undefined ? "page" : undefined}' href='.'>
            home
          </a>
        </div>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-danger" href="https://github.com/cristianpb/analytics-google">
            Github code
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<style>
  .ontop {
    z-index: 999;
  }
</style>
