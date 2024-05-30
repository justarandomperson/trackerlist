<script>
	import { activities } from '../store';
	import Activity from '../components/list/activity.svelte';
	import ActivityModal from '../components/modal/activityModal.svelte';

	let activitiesData = [];
	let openData = {};

	let openModal = false;
	const turnActivityModal = (data) => {
		openModal = !openModal;
		openData = data;
	};
	activities.subscribe((value) => {
		activitiesData = value;
	});
</script>

<h1>Activity</h1>
{#key activitiesData}
	<div class="flex flex-col gap-2">
		{#each activitiesData as data}
			<Activity {data} {turnActivityModal} />
		{/each}
	</div>
{/key}

{#if openModal}
	<ActivityModal data={openData} turnModal={turnActivityModal} />
{/if}
