<script>
	import Visits from './Visits.svelte';
	import Countries from './Countries.svelte';
	import Pages from './Pages.svelte';
	import Map from './Map.svelte';
	import Devices from './Devices.svelte';
	import Provenances from './Provenances.svelte';
	import Table from './Table.svelte';
	import Indicators from './Indicators.svelte';
	import Tags from './Tags.svelte';
	import { data as dataCsv } from '../tools/stores.js';
</script>

<section class="px-8">
	<div class="w-full">
		{#if $dataCsv.length === 0}
			<progress class="progress is-small is-primary" max="100">15%</progress>
		{/if}
		<Indicators />

		<div class="grid grid-cols-3 gap-5">
			<div class="col-span-3 sm:col-span-1">
				<Visits />
			</div>
			<div class="col-span-3 sm:col-span-1">
				<Countries />
			</div>
			<div class="col-span-3 sm:col-span-1">
				<Map />
			</div>

			<div class="col-span-3 sm:col-span-1">
				<Pages />
			</div>
			<div class="col-span-3 sm:col-span-1">
				<Devices />
			</div>
			<div class="col-span-3 sm:col-span-1">
				<Provenances />
			</div>

			<div class="col-span-3 sm:col-span-1">
				<Tags />
			</div>

			<div class="col-span-3 sm:col-span-3">
				<Table />
			</div>
		</div>
	</div>
</section>
