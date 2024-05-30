<script>
	import { scale } from 'svelte/transition';

	export let error;
</script>

<div class="absolute w-screen top-10 left-0">
	<div
		class="flex mx-auto w-4/5 h-20 bg-slate-900 border-2 border-red-500 p-3 rounded-md sm:w-1/4"
		transition:scale={{ duration: 200 }}
	>
		<h1 class="text-lg">{error}</h1>
	</div>
</div>
