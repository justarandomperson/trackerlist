<script>
	import Blackscreen from '../other/blackscreen.svelte';
	import { scale } from 'svelte/transition';
	import { stores, selects } from '$lib/util';
	import { deleteItem, saveItem } from '$lib/itemUtil';
	import TickMap from './tickMap.svelte';
	import Image from '../icons/image.svelte';
	export let turnModal, data, group;

	const store = stores[group].store;
	const newData = { ...data };
	const hasLength = data.hasOwnProperty('length');

	const groupSelect = selects[group];

	let files;
	let fileInput;

	const deleteCall = () => {
		deleteItem(store, data.name);
		turnModal(false);
	};
	const saveCall = () => {
		saveItem(store, data.name, newData);
		turnModal(false);
	};

	const getBase64 = (image) => {
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			newData.img = e.target.result;
		};
	};
</script>

<Blackscreen {turnModal} />
<div class="absolute top-0 left-0 items-center h-screen w-screen pointer-events-none">
	<div
		class="flex flex-col relative px-2 w-full h-full gap-5 *:pointer-events-auto sm:flex-row sm:justify-center"
		transition:scale={{ duration: 300 }}
	>
		<div
			class="flex flex-col justify-between w-full max-h-[30rem] mt-5 bg-slate-800 p-2 shadow-2xl shadow-black rounded-md sm:max-h-[35rem] sm:w-1/2 sm:mt-28"
		>
			<div>
				<div class="flex">
					<input
						class="hidden"
						id="file-to-upload"
						type="file"
						accept=".png,.jpg"
						bind:this={fileInput}
						bind:files
						on:change={() => getBase64(files[0])}
					/>
					<button class="upload-btn" on:click={() => fileInput.click()}>
						{#if newData.img}
							<img src={newData.img} alt={'img'} class="w-10 h-10" />
						{:else}
							<Image />
						{/if}
					</button>
					<input
						class=" text-2xl w-1/2 px-2 py-1 mt-1 rounded-md text-white mb-4 bg-transparent outline-none hover:bg-slate-900 focus:bg-slate-900"
						bind:value={newData.name}
					/>
				</div>
				<div class="flex flex-wrap gap-5 text-slate-400">
					<div>
						<h1 class="">Status</h1>
						<select
							class="bg-slate-900 w-32 px-2 py-1 mt-1 rounded-md text-white"
							bind:value={data.status}
						>
							{#each groupSelect as select}
								<option value={select}>{select}</option>
							{/each}
						</select>
					</div>

					<div>
						<h1>Score</h1>
						<input
							class="bg-slate-900 max-w-16 px-2 py-1 mt-1 rounded-md text-white"
							type="number"
							bind:value={newData.score}
						/>
					</div>

					<div>
						<h1>Progress</h1>
						<input
							class="bg-slate-900 max-w-20 px-2 py-1 mt-1 rounded-md text-white"
							type="number"
							bind:value={newData.progress}
						/>
					</div>

					{#if hasLength}
						<div>
							<h1>Length</h1>
							<input
								class="bg-slate-900 max-w-20 px-2 py-1 mt-1 rounded-md text-white"
								type="number"
								bind:value={newData.length}
							/>
						</div>
					{/if}

					<div>
						<h1>Start Date</h1>
						<input
							class="bg-slate-900 px-2 py-1 rounded-lg text-white"
							type="date"
							bind:value={newData.startDate}
						/>
					</div>

					<div>
						<h1 class="text-slate-400">End Date</h1>
						<input
							class="bg-slate-900 px-2 py-1 rounded-lg text-white"
							type="date"
							bind:value={newData.endDate}
						/>
					</div>
				</div>
				<h1 class="text-slate-400 mt-10">Notes</h1>
				<textarea
					class="bg-slate-900 w-full h-20 md:h-40 px-2 py-1 mt-1 rounded-md text-white outline-none resize-none"
					bind:value={newData.notes}
				></textarea>
			</div>
			<div class="flex justify-end gap-2">
				<button
					class="bg-slate-900 px-2 py-1 rounded-md text-white transition-colors hover:bg-slate-500 hover:text-slate-300"
					on:click={turnModal(false)}
				>
					Cancel</button
				>
				<button
					class="bg-slate-900 px-2 py-1 rounded-md text-white transition-colors hover:bg-red-500"
					on:click={deleteCall}
				>
					Delete</button
				>
				<button
					class="bg-sky-400 px-2 py-1 rounded-md text-white transition-colors hover:bg-sky-600 hover:text-slate-300"
					on:click={saveCall}>Save</button
				>
			</div>
		</div>
		<div
			class="w-full bottom-0 bg-slate-800 shadow-2xl shadow-black rounded-md sm:w-1/5 sm:absolute sm:right-10 sm:my-20 sm:bottom-auto"
		>
			{#if !hasLength}
				<TickMap lastMapCheck={data.lastMapCheck} name={data.name} map={data.map} />
			{:else}
				<h1>Course</h1>
			{/if}
		</div>
	</div>
</div>
