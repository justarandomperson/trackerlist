<script>
	export let user;
	export let date;
	export let activity;
</script>

<li class="flex gap-5 bg-slate-800 w-1/4 h-14 p-2 rounded-md">
	<h2 class="text-sky-400 font-semibold">{user}</h2>
	<h1 class="flex-grow">{activity}</h1>
	<h2>{date}</h2>
</li>
