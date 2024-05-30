<script>
	import Entry from './entry.svelte';
	export let itemName, hasLength, items, turnItemModal;
</script>

<ul class="w-full bg-slate-800 rounded-md lg:w-1/3">
	<li class="flex justify-between bg-slate-800 p-2 rounded-md">
		<h2>{itemName}</h2>
		<div class="flex justify-around items-center text-center pr-2 gap-2 *:w-16">
			<h2>Score</h2>
			<h2>{hasLength ? 'Progress' : 'Days'}</h2>
			{#if !hasLength}
				<h2>Today</h2>
			{/if}
		</div>
	</li>

	{#each items as data}
		<Entry {data} {turnItemModal} />
	{/each}
</ul>
