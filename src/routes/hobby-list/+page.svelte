<script>
	import Entry from '../../components/entry.svelte';
	import Modal from '../../components/modal.svelte';

	const hobbies = [
		{
			name: 'Reading',
			progress: 3,
			img: ''
		}
	];

	let modal = false;
	let openData = {};

	const turnModal = (e, data) => {
		modal = !modal;
		openData = data;
	};
</script>

<div class="flex flex-col items-center">
	<h1 class="font-bold text-xl">Hobbies</h1>
	<ul class="w-1/3 bg-slate-800 rounded-md mt-5">
		<li class="flex justify-between bg-slate-800 p-3 rounded-t-md">
			<h2>Hobby</h2>
			<div class="flex justify-around w-1/5">
				<h2>Days</h2>
				<h2>Today</h2>
			</div>
		</li>

		{#each hobbies as hobby}
			<Entry data={hobby} {turnModal} />
		{/each}
	</ul>
</div>

{#if modal}
	<Modal {turnModal} data={openData} />
{/if}
