<script lang="ts">
	import LayoutAnimation from '$lib/classes/LayoutAnimation';
	import { i18n } from '$lib/i18n';
	import { theme } from '$lib/stores/theme';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	const { children }: Props = $props();

	let canvas: HTMLCanvasElement;

	function isFirefoxMobile(): boolean {
		const userAgent = navigator.userAgent.toLowerCase();
		return (
			userAgent.includes('firefox') &&
			(userAgent.includes('android') || userAgent.includes('iphone'))
		);
	}

	onMount(() => {
		if (!isFirefoxMobile()) new LayoutAnimation(canvas);

		theme.subscribe((value) => {
			document.documentElement.setAttribute('data-theme', value);
		});
	});
</script>

<div>
	<ParaglideJS {i18n}>
		{@render children()}
	</ParaglideJS>
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
		min-height: 100dvh;
		position: relative;
		overflow-x: hidden;
	}
</style>
