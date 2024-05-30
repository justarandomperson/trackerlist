<script>
	import Edit from '../icons/Edit.svelte';
	import { hobbies } from '../../store';
	import { tick } from '$lib/hobbyUtil';
	import { convertToShortDate } from '$lib/util';
	export let turnItemModal, data;
	const hasLength = data.hasOwnProperty('length');

	let checkedToday = data.lastCheck == convertToShortDate(new Date());
	if (!hasLength) {
		hobbies.subscribe((value) => {
			const hobby = value.find((hobby) => hobby.name === data.name);
			if (!hobby) return;
			checkedToday = hobby.lastCheck == convertToShortDate(new Date());
		});
	}
</script>

<li
	class="group flex justify-between pr-2 text-slate-300 bg-slate-800 rounded-md hover:bg-slate-400"
>
	<div class="flex justify-between bg-slate-800 group-hover:bg-slate-400 rounded-md">
		{#if data.img}
			<img src={data.img} alt={data.name} class="w-10 h-10 group-hover:hidden" />
		{:else}
			<div class="w-10 h-10 group-hover:hidden"></div>
		{/if}
		<button class="pl-3 w-10 h-10 hidden group-hover:inline" on:click={turnItemModal(true, data)}
			><Edit /></button
		>
		<h2 class="p-2 group-hover:text-white text-sm sm:text-base">{data.name}</h2>
	</div>
	<div
		class="flex justify-around items-center text-center pr-2 gap-2 *:text-sm *:sm:text-base *:w-16"
	>
		<h2>{data.score}</h2>
		<h2 class="break-words">
			{data.progress}{#if hasLength}
				/{data.length}
			{/if}
		</h2>
		{#if !hasLength}
			<input
				type="checkbox"
				class="w-1/2 h-1/2"
				checked={checkedToday}
				on:change={tick(data.name, this.checked)}
			/>
		{/if}
	</div>
</li>
