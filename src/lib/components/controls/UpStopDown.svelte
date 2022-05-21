<script lang="ts">
	import Button from '../atoms/button/Button.svelte';
	import { createEventDispatcher } from 'svelte';

	type StateKey = 'up' | 'down' | 'stop';
	type State = {
		key: StateKey;
		pressed: boolean;
		text: string;
	};
	let states: State[] = [
		{ key: 'up', pressed: false, text: 'Up' },
		{ key: 'stop', pressed: false, text: 'Stop' },
		{ key: 'down', pressed: false, text: 'Down' }
	];
	const dispatch = createEventDispatcher();

	const handleMouseDown = (event: MouseEvent | TouchEvent, stateKey: StateKey) => {
		const state = states.find(({ key }) => key === stateKey);
		if (state && !state.pressed) {
			event.preventDefault();
			states = states.map((state) => ({ ...state, pressed: state.key === stateKey }));
			dispatch('mousedown', stateKey);
		}
	};
</script>

<div class="grid grid-cols-1 gap-1 w-full">
	{#each states as state (state.key)}
		<Button
			on:mousedown={(e) => handleMouseDown(e, state.key)}
			on:touchstart={(e) => handleMouseDown(e, state.key)}
			pressed={state.pressed}
		>
			<span class="text-3xl">{state.text}</span>
		</Button>
	{/each}
</div>
