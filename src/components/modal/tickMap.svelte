<script>
	import { hobbies } from '../../store';
	import { convertToShortDate } from '$lib/util';
	import { tickBox } from '$lib/hobbyUtil';
	export let lastMapCheck, name, map;

	if (lastMapCheck != convertToShortDate(new Date())) {
		const checkDate = new Date(lastMapCheck);
		const difference = new Date().getTime() - checkDate.getTime();
		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		for (let i = 0; i < days; i++) {
			map.shift();
			map.push(0);
		}
		hobbies.update((value) => {
			const hobbyIndex = value.findIndex((item) => item.name === name);
			const hobby = value[hobbyIndex];
			hobby.lastMapCheck = convertToShortDate(new Date());
			value[hobbyIndex] = hobby;
			return value;
		});
	}

	hobbies.subscribe((value) => {
		const hobby = value.find((item) => item.name === name);
		if (!hobby) return;
		map = hobby.map;
	});
</script>

{#key map}
	<div class="flex flex-wrap gap-1 px-2 py-1">
		{#each map as tile, i}
			<button
				class="w-3 h-3 md:w-[0.8rem] md:h-[0.8rem] lg:w-[1.1rem] lg:h-[1.1rem] {tile
					? 'bg-sky-700 hover:bg-sky-300'
					: 'bg-slate-900 hover:bg-slate-500'}"
				on:click={tickBox(name, i)}
			></button>
		{/each}
	</div>
{/key}
