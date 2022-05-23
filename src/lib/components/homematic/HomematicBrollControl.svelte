<script lang="ts">
	import UpStopDown from '../controls/UpStopDown.svelte';
	import { authToken, ccu3Url } from '$lib/stores/settings';

	let token = $authToken;
	let url = $ccu3Url;

	$: handleMouseDown = (event: CustomEvent) => {
		if (!url) {
			return;
		}
		const headers = (token && { Authorization: token }) || {};
		if (event.detail === 'up') {
			fetch(`${url}device/00111D89B79C33/4/LEVEL/~pv`, {
				method: 'PUT',
				headers: headers,
				body: JSON.stringify({ v: 1 })
			});
		} else if (event.detail === 'down') {
			fetch(`${url}device/00111D89B79C33/4/LEVEL/~pv`, {
				method: 'PUT',
				headers: headers,
				body: JSON.stringify({ v: 0 })
			});
		} else if (event.detail === 'stop') {
			fetch(`${url}device/00111D89B79C33/4/STOP/~pv`, {
				method: 'PUT',
				headers: headers,
				body: JSON.stringify({ v: true })
			});
		}
	};
</script>

<UpStopDown on:mousedown={handleMouseDown} />
