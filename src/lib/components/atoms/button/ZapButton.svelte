<script lang="ts">
	export let pressed = false;
</script>

<button
	class:border-amber-300={pressed}
	class:border-amber-700={!pressed}
	class:text-amber-300={pressed}
	class:text-amber-700={!pressed}
	class="w-full object-contain border-2"
	on:click
>
	<slot name="icon" />
</button>
