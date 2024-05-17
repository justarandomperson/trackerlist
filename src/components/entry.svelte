<script>
	import Edit from '../icons/edit.svelte';
	export let turnModal, data;

	const addDay = (e) => {
		if (e.target.checked) {
			data.progress++;
		} else {
			data.progress--;
		}
	};
</script>

<li
	class="group flex justify-between text-slate-300 bg-slate-800 rounded-md hover:bg-slate-400 mt-2"
>
	<div class="flex items-center w-1/4">
		{#if data.img}
			<img src={data.img} alt={data.name} class="w-10 h-10 group-hover:hidden" />
		{:else}
			<div class="w-10 h-10 group-hover:hidden"></div>
		{/if}
		<button class="pl-2 w-10 h-10 hidden group-hover:inline" on:click={turnModal(this, data)}
			><Edit /></button
		>
		<h2 class="p-2 group-hover:text-white">{data.name}</h2>
	</div>
	<div class="flex justify-around items-center w-1/5 gap-5">
		<h2>0</h2>
		<h2 class="p-2 group-hover:text-white mr-2">
			{data.progress}{#if data.maxVideos}
				/{data.maxVideos}
			{/if}
		</h2>
		{#if !data.maxVideos}
			<input type="checkbox" class="mr-2" on:change={addDay} />
		{/if}
	</div>
</li>
