<script lang="ts">
	import { authToken } from '$lib/stores/settings';
	import { ccu3Url } from '$lib/stores/settings';
</script>

<div class="m-2 ml-8 mr-8 flex flex-col gap-2">
	<div class="flex items-center gap-1">
		<label for="ccu3Url" class="after:content-['_*'] text-white">ccu3 Url (with trailing slash)</label>
		<input
			id="ccu3Url"
			name="ccu3Url"
			type="text"
			bind:value={$ccu3Url}
			class="grow rounded border-2 bg-zinc-800 text-white"
			class:border-rose-500={!$ccu3Url}
			class:border-zinc-600={$ccu3Url}
		/>
	</div>
	<div class="flex items-center gap-1">
		<label for="authToken" class="text-white">Auth Token</label>
		<input
			id="authToken"
			name="authToken"
			type="text"
			bind:value={$authToken}
			class="grow rounded border-2 bg-zinc-800 text-white border-zinc-600"
		/>
	</div>
</div>
