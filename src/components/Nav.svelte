<script>
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
    <a role="button"
       class:is-active={burgerState}
       on:click={() => burgerState = !burgerState}
       class="navbar-burger burger"
       aria-label="menu" aria-expanded="false" href="{null}"
       data-target="navMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navMenu" class="navbar-menu" class:is-active={burgerState} class:active={burgerState}>
    <div class="navbar-end">
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

  .active {
    display: contents;
  }
</style>


