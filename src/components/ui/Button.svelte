<script lang="ts">
	import type { Snippet } from 'svelte';
	import Arrow from '~icons/ion/arrow-forward';

	interface Props {
		children: Snippet;
		ariaLabel?: string;
		btn?: HTMLButtonElement;
		onclick?: () => void;
	}

	let { children, ariaLabel = undefined, btn = $bindable(), onclick }: Props = $props();
</script>

<button aria-label={ariaLabel} bind:this={btn} {onclick}>
	<span class="content">
		{@render children()}
	</span>
	<span class="effect"><Arrow /></span>
</button>

<style lang="scss">
	button {
		position: relative;
		overflow: hidden;

		.effect {
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&:hover {
			.content {
				// transform: ;
				opacity: 0;
				transform: scale(0.8);
			}

			.effect {
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
</style>
