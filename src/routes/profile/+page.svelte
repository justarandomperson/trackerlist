<script>
	import { get } from 'svelte/store';
	import { stores } from '$lib/util';
	import CurrentEntries from '../../components/list/current-entries.svelte';
</script>

<h1>User</h1>
<div class="flex flex-col gap-5 mt-2">
	{#each Object.keys(stores) as storeName}
		{#if storeName !== 'activities' && get(stores[storeName].store).length > 0}
			<div>
				<h1>Current {storeName}:</h1>
				<CurrentEntries store={stores[storeName].store} />
			</div>
		{/if}
	{/each}
</div>
