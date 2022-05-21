<script lang="ts">
	import UpStopDown from '../controls/UpStopDown.svelte';
	import { authToken, ccu3Url } from '$lib/stores/settings';

	let token = $authToken;
	let url = $ccu3Url;

	$: handleMouseDown = (event: CustomEvent) => {
		if (!token || !url) {
			return;
		}
		const headers = { Authorization: token };
		if (event.detail === 'up') {
			fetch(`${url}/device/00111D89B79C33/4/LEVEL`, {
				method: 'PUT',
				headers: headers,
				body: JSON.stringify({ v: 0 })
			});
		} else if (event.detail === 'down') {
			fetch(`${url}/device/00111D89B79C33/4/LEVEL`, {
				method: 'PUT',
				headers: headers,
				body: JSON.stringify({ v: 0 })
			});
		} else if (event.detail === 'stop') {
			fetch(`${url}/device/00111D89B79C33/4/STOP`, {
				method: 'PUT',
				headers: headers,
				body: JSON.stringify({ v: 1 })
			});
		}
	};
</script>

<UpStopDown on:mousedown={handleMouseDown} />
