<script>
	import { scale } from 'svelte/transition';
	import { stores, selects } from '$lib/util';
	import { newItem, hasItem } from '$lib/itemUtil';
	import Blackscreen from '../other/blackscreen.svelte';
	import Error from '../other/error.svelte';
	export let turnModal, group;
	let name;
	let length;
	let progress;
	let status;
	let error = null;
	let errorSubject = null;
	const store = stores[group].store;
	const groupSelect = selects[group];

	const fixError = (field) => {
		if (errorSubject == field) {
			error = null;
			errorSubject = null;
		}
	};

	const newCall = () => {
		const data = { name, progress, status };
		if (group != 'hobbies') data.length = length;

		if (hasItem(store, data.name)) {
			errorSubject = 'name';
			error = 'Name is already used';
		}
		Object.keys(data).forEach((field) => {
			if (data[field] == null) {
				errorSubject = field;
				error = `${field} cannot be empty`;
			}
		});
		if (error) return;
		newItem(store, data);
		turnModal(false);
	};
</script>

<Blackscreen {turnModal} />

{#if error}
	<Error {error} />
{/if}

<div class="absolute top-0 left-0 items-center w-screen pointer-events-none">
	<div
		class="flex flex-col mx-auto w-5/6 mt-36 bg-slate-800 pointer-events-auto p-3 rounded-md md:w-1/4"
		transition:scale={{ duration: 300 }}
	>
		<div>
			<div class="flex flex-col gap-4 p-2 *:flex *:gap-2">
				<div>
					<h1 class="w-28">Name</h1>
					<input
						class="bg-slate-900 px-2 py-1 rounded-lg text-white border-2 transition-colors {errorSubject ==
						'name'
							? 'border-red-500 focus:outline-none '
							: 'border-slate-800'}"
						on:input={() => fixError('name')}
						bind:value={name}
					/>
				</div>
				{#if group != 'hobbies'}
					<div>
						<h1 class="w-28">Length</h1>
						<input
							class="bg-slate-900 px-2 py-1 rounded-lg text-white border-2 {errorSubject == 'length'
								? 'border-red-500 focus:outline-none '
								: 'border-slate-800'}"
							type="number"
							on:input={() => fixError('length')}
							bind:value={length}
						/>
					</div>
				{/if}
				<div>
					<h1 class="w-28">Progress</h1>
					<input
						class="bg-slate-900 px-2 py-1 rounded-lg text-white border-2 {errorSubject == 'progress'
							? 'border-red-500 focus:outline-none '
							: 'border-slate-800'}"
						type="number"
						on:input={() => fixError('progress')}
						bind:value={progress}
					/>
				</div>
				<div>
					<h1 class="w-28">Status</h1>
					<select
						class="{errorSubject == 'status'
							? 'border-red-500 focus:outline-none '
							: 'border-slate-800'} bg-slate-900 w-32 px-2 p-1 rounded-md text-white"
						on:input={() => fixError('status')}
						bind:value={status}
					>
						{#each groupSelect as select}
							<option value={select}>{select}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<div class="flex justify-end gap-2">
			<button
				class="bg-slate-900 px-2 py-1 rounded-md text-white transition-colors hover:bg-slate-500 hover:text-slate-300"
				on:click={turnModal(false)}
			>
				Cancel</button
			>
			<button
				class="bg-sky-400 px-2 py-1 rounded-md text-white transition-colors hover:bg-sky-600 hover:text-slate-300"
				on:click={newCall}>Add</button
			>
		</div>
	</div>
</div>
