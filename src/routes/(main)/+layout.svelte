<script lang="ts">
	import NavBar from '$components/layout/main/NavBar.svelte';
	import type { Snippet } from 'svelte';
	import { blur, fade, fly, scale } from 'svelte/transition';

	interface Props {
		children: Snippet;
		data: { url: string };
	}

	const { children, data }: Props = $props();

	const urls = ['/', '/creation-of-website', '/training', '/our-creations'];

	let activeLink = data.url;

	let next = $derived.by(() => {
		const result = urls.indexOf(activeLink) < urls.indexOf(data.url);
		activeLink = data.url;
		return result;
	});
</script>

<NavBar activeLink={data.url} />
{#key data.url}
	<div
		in:fly={{ x: next ? 200 : -200, duration: 1000, delay: 300 }}
		out:fly={{ x: next ? -200 : 200, duration: 1000 }}
	>
		{@render children()}
	</div>
{/key}

<style lang="scss">
	div {
		width: 100%;
		min-height: calc(100vh - 6rem);
		min-height: calc(100dvh - 6rem);
		padding-top: 4rem + $spacing;
		position: absolute;
		z-index: 0;
		top: 0;
		left: 0;
	}
</style>
