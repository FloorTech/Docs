<script lang="ts">
	import "$lib/css/global.css";
	import Loading from "$lib/components/Loading.svelte";
	import type ApiResponse from "$lib/types/api-response";

	let apiDown = false;

	async function checkApiStatus() {
		try {
			const response = await fetch("/api");

			if (response.ok) {
				const data = (await response.json()) as ApiResponse;

				if (!data.status) {
					apiDown = true;
				}
			} else {
				apiDown = true;
			}
		} catch {
			apiDown = true;
		}
	}

	checkApiStatus();
</script>

<main>
	{#if apiDown}
		<Loading />
	{:else}
		<slot />
	{/if}
</main>
