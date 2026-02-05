<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import Modal from './Modal.svelte';

	interface CalendlyModalProps {
		open: boolean;
		onclose?: () => void;
	}

	let { open = $bindable(), onclose }: CalendlyModalProps = $props();

	let loaded = $state(false);
	$effect(() => {
		if (open) loaded = true;
	});
</script>

<Modal bind:open {onclose} noPaddings title={m.calendly_title()}>
	<div class="calendly-container">
		{#if loaded}
			<iframe
				src="https://calendly.com/seekode/30min?background_color=0e0e0e&text_color=e5e5e5&primary_color=1bc8ac"
				title={m.calendly_title()}
			>
			</iframe>
		{/if}
	</div>
</Modal>

<style lang="scss">
	.calendly-container {
		position: relative;
		width: 100%;
		height: 1000px;

		@include md {
			height: 650px;
		}

		iframe {
			width: 100%;
			height: 100%;
			border: none;
			border-radius: $radius-md;
		}
	}
</style>
