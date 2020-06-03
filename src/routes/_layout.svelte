<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<Nav {segment}/>

<main class="has-navbar-fixed-top">
	<slot></slot>
</main>
