<script lang="ts">
	export let pressed = false;
</script>

<button
	class:border-amber-100={pressed}
	class:border-blue-700={!pressed}
	class:text-amber-100={pressed}
	class:text-amber-500={!pressed}
	class="border-2 bg-blue-700 flex justify-center items-center"
	on:click
	on:mousedown
	on:mouseup
	on:touchstart
	on:touchend
	on:touchcancel
	on:mouseleave
>
	<slot />
</button>
