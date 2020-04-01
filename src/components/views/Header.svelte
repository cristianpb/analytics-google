<nav class="navbar is-link is-fixed-top" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a href="{null}" class="navbar-item" on:click={resetData}>
      Reset
    </a>
    <a href="{null}" class="navbar-item">
      Total sessions: {total}
    </a>
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
    <div class="navbar-start">
      <div class="navbar-item">
        <SearchBox/>
      </div>
    </div>
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

<script>
  import SearchBox from './SearchBox.svelte';
  import { loadCsv } from '../tools/getData';
  import { results } from '../tools/stores.js'
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
