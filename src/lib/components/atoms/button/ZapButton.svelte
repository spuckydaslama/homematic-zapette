<script lang="ts">
	export let pressed = false;
</script>

<button
	class:border-amber-300={pressed}
	class:border-amber-700={!pressed}
	class:text-amber-300={pressed}
	class:text-amber-700={!pressed}
	class="border-2 bg-blue-600 flex justify-center"
	on:click
>
	<slot />
</button>
