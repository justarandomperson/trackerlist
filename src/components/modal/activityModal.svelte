<script>
	import { scale } from 'svelte/transition';
	import Blackscreen from '../other/blackscreen.svelte';
	import { saveActivity } from '$lib/activityUtil';
	export let turnModal, data;

	const close = () => {
		turnModal();
		saveActivity(data.id, data.note);
	};
</script>

<Blackscreen turnModal={close} />
<div class="absolute top-0 left-0 items-center h-screen w-screen pointer-events-none">
	<div
		class="flex relative justify-center w-full h-full gap-5 *:pointer-events-auto"
		transition:scale={{ duration: 300 }}
	>
		<div
			class="flex flex-col justify-between w-1/2 h-1/5 mt-20 bg-slate-800 p-2 shadow-2xl shadow-black rounded-md"
		>
			<div>
				<div class="flex justify-between">
					<h1 class="text-sky-400 text-2xl font-semibold">you</h1>
					<h1>{data.date}</h1>
				</div>
				<h1 class="text-xl text-semibold mb-5">{data.activity}</h1>
				<textarea
					class="bg-slate-900 w-full h-20 p-1 outline-none resize-none rounded-md"
					bind:value={data.note}
				/>
			</div>
			<div></div>
		</div>
	</div>
</div>
