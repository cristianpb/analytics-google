<script>
  export let segment;
  import SearchBox from './views/SearchBox.svelte';
  import { results } from './tools/stores.js'
  let total
  let burgerState = false;

  const unsubscribe = results.subscribe(myData => {
    total = myData.reduce((total, s) => total + s.sessions, 0);
  });

</script>

<nav class="navbar is-primary is-fixed-top  ontop" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="{ process.env.NODE_ENV === 'development' ?  '/' : 'https://cristianpb.github.io/'}">
      <img src="{ process.env.NODE_ENV === 'development' ?  '/favicon.png' : 'https://cristianpb.github.io/assets/img/avatar-small.png'}" 
      alt="home page link"
      width="30" height="30"/>
    </a>
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

  <div id="navMenu" class="navbar-menu" class:is-active={burgerState}>
    <div class="navbar-end">
      <a class="navbar-item" href="/about">About me</a>
      <a class="navbar-item" href="/blog">Blog</a>
      <a class="navbar-item" class:is-active={segment === undefined} href="/analytics-google">Analytics</a>
    </div>
  </div>
</nav>

<style>
  .ontop {
    z-index: 999;
  }
  .navbar .is-active {
  }
</style>


