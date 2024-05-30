<script>
	import { convertToShortDate } from '$lib/util';
	export let store;

	let data;
	let hasLength;

	store.subscribe((value) => {
		data = value;
		if (data.length > 0) {
			hasLength = data[0].hasOwnProperty('length');
		}
	});
</script>

{#each data as entry}
	{#if entry.status === 'Doing' || 'Reading' || 'Watching'}
		<div class="bg-slate-800 w-full h-16 p-1 rounded-md *:text-sm sm:text-base sm:w-2/5">
			<div class="flex justify-between">
				<h1 class="font-semibold">{entry.name}</h1>
				<h2>Started on: {entry.startDate}</h2>
			</div>

			<div class="flex justify-between">
				<h2>{hasLength ? 'Progress' : 'Days'}: {entry.progress}</h2>
				<h2>Score: {entry.score}</h2>
			</div>
		</div>
	{/if}
{/each}
