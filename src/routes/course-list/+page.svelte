<script>
	import Entry from '../../components/entry.svelte';
	import Modal from '../../components/modal.svelte';

	const courses = [
		{
			name: 'NodeJS',
			progress: 3,
			maxVideos: 203,
			img: 'https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png'
		},
		{
			name: 'ReactJS',
			progress: 3,
			maxVideos: 361,
			img: 'https://avatars.githubusercontent.com/u/6412038?s=280&v=4'
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
	<h1 class="font-bold text-xl">Courses</h1>
	<ul class="w-1/3 bg-slate-800 rounded-md mt-5">
		<li class="flex justify-between bg-slate-800 p-2 rounded-t-md">
			<h2>Course</h2>
			<div class="flex justify-around pr-2 gap-2 w-1/5">
				<h2>Score</h2>
				<h2>Progress</h2>
			</div>
		</li>

		{#each courses as course}
			<Entry data={course} {turnModal} />
		{/each}
	</ul>
</div>

{#if modal}
	<Modal {turnModal} data={openData} />
{/if}
