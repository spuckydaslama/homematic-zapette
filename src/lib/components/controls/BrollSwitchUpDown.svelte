<script lang="ts">
	import ZapButton from '../atoms/button/ZapButton.svelte';
	import IconChevronUp from '../atoms/icons/IconChevronUp.svelte';
	import IconChevronDown from '../atoms/icons/IconChevronDown.svelte';

	let upPressed = false;
	let downPressed = false;

	let upPressedResetTimeout: number | undefined;
	let downPressedResetTimeout: number | undefined;
	let handleUpClicked = () => {
		if (!upPressed) {
			upPressed = true;
			downPressed = false;
			if (downPressedResetTimeout) {
				clearTimeout(downPressedResetTimeout);
			}
			upPressedResetTimeout = setTimeout(() => {
				upPressed = false;
			}, 618) as unknown as number;
		}
	};
	let handleDownClicked = () => {
		if (!downPressed) {
			downPressed = true;
			upPressed = false;
			if (upPressedResetTimeout) {
				clearTimeout(upPressedResetTimeout);
			}
			downPressedResetTimeout = setTimeout(() => {
				downPressed = false;
			}, 618) as unknown as number;
		}
	};
</script>

<div class="w-full flex flex-col gap-1">
	<ZapButton on:click={handleUpClicked} pressed={upPressed}>
		<IconChevronUp slot="icon" />
	</ZapButton>
	<ZapButton on:click={handleDownClicked} pressed={downPressed}>
		<IconChevronDown slot="icon" />
	</ZapButton>
</div>
