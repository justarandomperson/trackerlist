<script>
	import { stores, selects } from '$lib/util';
	import Modal from '../modal/modal.svelte';
	import NewModal from '../modal/newModal.svelte';
	import AddButton from '../input/addButton.svelte';
	import EntryList from '../list/entry-list.svelte';
	export let group;
	const hasLength = group != 'hobbies';
	const groupSelect = selects[group];

	let modal = false;
	let newmodal = false;
	let openData = {};

	const turnItemModal = (bool = true, data) => {
		//bool to make sure modal won't open again if clicking cancel twice
		modal = bool;
		openData = data;
	};
	const turnNewModal = (bool = true) => {
		newmodal = bool;
	};
	const store = stores[group].store;
	const itemsName = group[0].toUpperCase() + group.slice(1);

	const itemName = stores[group].name;
	let items = $store;
	const statusItems = {};

	for (let status of groupSelect) {
		statusItems[status] = [];
	}

	store.subscribe((value) => {
		items = value;
		for (let status of groupSelect) {
			statusItems[status] = [];
		}
		for (let item of items) {
			if (statusItems[item.status].find((i) => i.name === item.name)) continue;
			statusItems[item.status].push(item);
		}
	});
</script>

{#key items}
	<div class="flex flex-col items-center">
		<h1 class="font-bold text-xl">{itemsName}</h1>
		<AddButton name={itemName} {turnNewModal} />
		{#each groupSelect as status}
			{#if statusItems[status].length > 0}
				<h1 class="p-1">{status}</h1>
				<EntryList {itemName} {hasLength} items={statusItems[status]} {turnItemModal} />
			{/if}
		{/each}
	</div>
{/key}

{#if modal}
	<Modal turnModal={turnItemModal} data={openData} {group} />
{/if}

{#if newmodal}
	<NewModal turnModal={turnNewModal} {group} />
{/if}
