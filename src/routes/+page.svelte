<script>
	import Activity from '../components/activity.svelte';
	const activities = [
		{
			user: 'John Doe',
			date: '2021-01-01',
			activity: 'Logged in'
		}
	];
</script>

<h1>Activity</h1>
<ul>
	{#each activities as activity}
		<Activity user={activity.user} date={activity.date} activity={activity.activity} />
	{/each}
</ul>
