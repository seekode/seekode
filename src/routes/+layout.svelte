<script lang="ts">
	import { LayoutAnimation } from '$lib/classes/LayoutAnimation';
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	let canvas: HTMLCanvasElement;

	onMount(() => {
		new LayoutAnimation(canvas);

		theme.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value);
		});
	});
	
</script>

<div>
	{@render children()}
</div>
<canvas bind:this={canvas}></canvas>

<style lang="scss">
	canvas {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -1;
		top: 0;
		left: 0;
	}

	div {
		width: 100%;
		max-width: 1920px;
		min-height: 100vh;
		min-height: 100dvh;
		position: relative;
	}
</style>
