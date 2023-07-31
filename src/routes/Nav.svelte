<script>
	import { page } from '$app/stores';
  import { base } from '$app/paths';
  import SearchBox from '../lib/views/SearchBox.svelte';
  import { results } from '../lib/tools/stores.js'
  let total
  let burgerState = false;

  const unsubscribe = results.subscribe(myData => {
    total = myData.reduce((total, s) => total + s.sessions, 0);
  });

</script>


<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="flex flex-wrap items-center justify-between p-4 mx-auto max-w-screen-xl">
    <a href="{ import.meta.env.DEV ?  '/' : 'https://cristianpb.github.io/'}" class="flex items-center">
      <img src="{ import.meta.env.DEV ?  '/favicon.png' : 'https://cristianpb.github.io/assets/img/avatar-small.png'}" class="h-8 mr-3" alt="Flowbite Logo" />
    </a>
    <div class="flex md:order-2">
      <div class="relative hidden md:block">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search icon</span>
        </div>
        <SearchBox/>
      </div>
      <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false"
              on:click={() => burgerState = !burgerState}>
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
    <div class="items-center justify-between w-full md:flex md:w-auto md:order-1"
         class:hidden={!burgerState}
         id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <SearchBox/>
      </div>
      <ul class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="{base}/" class="{$page.url.pathname === "/" ? 'bg-blue-700 md:text-blue-700 text-white  md:bg-transparent md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-blue-100' } md:p-0 block py-2 pl-3 pr-4 rounded" aria-current="page">GA4</a>
        </li>
        <li>
          <a href="{base}/github" class="{$page.url.pathname === "/github" ? 'bg-blue-700 md:text-blue-700 text-white  md:bg-transparent md:dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-blue-100' } block py-2 pl-3 pr-4 rounded md:p-0 ">Github</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
