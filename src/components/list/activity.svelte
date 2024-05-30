<script>
	import Delete from '../icons/delete.svelte';
	import Comment from '../icons/comment.svelte';
	import { deleteActivity, saveActivity } from '$lib/activityUtil';
	export let data, turnActivityModal;
	let noting = false;

	const changeNote = () => {
		noting = !noting;
	};
	const leaveNote = () => {
		noting = false;
		saveActivity(data.id, data.note);
	};
</script>

<li
	class="group flex bg-slate-800 w-full h-20 pt-1 rounded-md transition-colors hover:bg-slate-700 md:w-1/4"
	on:mouseleave={leaveNote}
>
	<button
		class="flex flex-col h-full w-full p-1 justify-between"
		on:click|preventDefault={turnActivityModal(data)}
	>
		<div class="flex justify-between w-full">
			<div class="flex gap-5">
				<h2 class="text-sky-400 font-semibold">{data.user || 'you'}</h2>
				<h1 class="flex-grow text-sm sm:text-base">{data.activity}</h1>
			</div>
			<h2>{data.date}</h2>
		</div>

		<div class="flex gap-2 w-full justify-between *:transition-opacity">
			{#if noting}
				<input
					class="flex-grow bg-slate-800 p-1 h-8 outline-none {noting ? 'opacity-100' : 'opacity-0'}"
					name="note"
					autofocus
					bind:value={data.note}
				/>
			{:else}
				<h1 class="flex-grow p-1 h-8 text-left overflow-hidden text-ellipsis whitespace-nowrap">
					{data.note}
				</h1>
			{/if}
			<div class="min-w-14">
				<button on:click|stopPropagation={changeNote} class="invisible group-hover:visible">
					<Comment />
				</button>
				<button
					on:click|stopPropagation={deleteActivity(data.id)}
					class="invisible group-hover:visible"><Delete /></button
				>
			</div>
		</div>
	</button>
</li>
