<script lang="ts">
	import "$lib/css/global.css"

	let { children } = $props()
</script>

<main>
	{@render children()}
</main>
