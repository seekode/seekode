<script lang="ts">
	import { LayoutAnimation } from '$lib/classes/LayoutAnimation';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};
	const { children }: Props = $props();

	let canvas: HTMLCanvasElement;

	onMount(() => {
		new LayoutAnimation(canvas);
	});
</script>

{@render children()}
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
</style>
