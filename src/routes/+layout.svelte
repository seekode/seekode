<script lang="ts">
	import Navbar from '$lib/components/layouts/Navbar.svelte';
	import '$lib/styles/global.scss';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
