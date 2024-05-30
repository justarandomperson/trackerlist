<script>
	export let name, turnNewModal;
</script>

<button
	class="bg-slate-800 rounded-md w-40 my-2 p-2 hover:bg-slate-700 hover:text-slate-300"
	on:click={turnNewModal}
>
	Add new {name}
</button>
