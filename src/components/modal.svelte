<script>
	import Blackscreen from './blackscreen.svelte';
	import { scale } from 'svelte/transition';
	export let turnModal, data;

	const selectsHobby = ['Doing', 'Paused', 'Planning', 'Dropped'];
	const selectsCourse = ['Watching', 'Completed', 'Paused', 'Planning', 'Dropped'];
</script>

<Blackscreen {turnModal} />
<div class="absolute top-0 left-0 items-center h-screen w-screen pointer-events-none">
	<div
		class="flex flex-col justify-between mx-auto mt-36 w-1/2 h-1/2 bg-slate-800 pointer-events-auto p-2 rounded-md"
		transition:scale={{ duration: 300 }}
	>
		<div>
			<div class="flex">
				{#if data.img}
					<img src={data.img} alt={data.name} class="w-10 h-10" />
				{/if}
				<h1 class="text-2xl font-semibold mb-4">{data.name}</h1>
			</div>
			<div class="flex gap-5 text-slate-400">
				<div>
					<h1 class="">Status</h1>
					<select class="bg-slate-900 w-32 px-2 py-1 mt-1 mb-10 rounded-md text-white">
						{#each !data.maxVideos ? selectsHobby : selectsCourse as select}
							{console.log(data)}
							<option value={select}>{select}</option>
						{/each}
					</select>
				</div>

				<div>
					<h1>Score</h1>
					<input class="bg-slate-900 w-32 px-2 py-1 mt-1 rounded-md text-white" type="number" />
				</div>

				<div>
					<h1>Progress</h1>
					<input class="bg-slate-900 w-32 px-2 py-1 mt-1 rounded-md text-white" type="number" />
				</div>

				<div>
					<h1>Start Date</h1>
					<input class="bg-slate-900 px-2 py-1 rounded-lg text-white" type="date" />
				</div>

				<div>
					<h1 class="text-slate-400">End Date</h1>
					<input class="bg-slate-900 px-2 py-1 rounded-lg text-white" type="date" />
				</div>
			</div>
			<h1 class="text-slate-400">Notes</h1>
			<textarea
				class="bg-slate-900 w-full h-52 px-2 py-1 mt-1 rounded-md text-white outline-none resize-none"
			></textarea>
		</div>
		<div class="flex justify-end gap-2">
			<button
				class="bg-slate-900 px-2 py-1 rounded-md text-white transition-colors hover:bg-red-500"
			>
				Delete</button
			>
			<button class="bg-sky-400 px-2 py-1 rounded-md text-white">Save</button>
		</div>
	</div>
</div>
