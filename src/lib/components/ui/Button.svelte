<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Booleanish } from 'svelte/elements';

	interface ButtonProps {
		ariaExpanded?: Booleanish | null | undefined;
		ariaHaspopup?: 'dialog' | 'menu' | Booleanish | 'grid' | 'listbox' | 'tree' | null | undefined;
		ariaLabel?: string;
		children: Snippet;
		classes?: string;
		onclick?: (event: MouseEvent) => void;
		rounded?: boolean;
		square?: boolean;
		type?: 'secondary' | 'muted';
	}

	let {
		ariaExpanded,
		ariaHaspopup,
		ariaLabel,
		children,
		classes,
		onclick,
		rounded,
		square,
		type
	}: ButtonProps = $props();

	// Classes computed with $derived
	const customClasses = $derived(
		['btn', classes, type && `btn--${type}`, rounded && 'btn--rounded', square && 'btn--square']
			.filter(Boolean)
			.join(' ')
	);
</script>

<button
	class={customClasses}
	aria-expanded={ariaExpanded}
	aria-haspopup={ariaHaspopup}
	aria-label={ariaLabel}
	{onclick}
>
	{@render children()}
</button>

<style lang="scss">
	.btn {
		height: 2.5rem;
		padding: 0 $spacing-4;
		border: 1px solid $color-primary;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: $spacing-2;
		cursor: pointer;
		color: $color-primary;
		border-radius: $radius-md;
		transition: $transition-base $transition-timing;

		&:hover {
			color: var(--bg-primary);
			background-color: $color-primary;
		}

		&--secondary {
			color: var(--text-primary);
			border: 1px solid var(--text-primary);

			&:hover {
				color: var(--text-primary);
				background-color: var(--bg-hover);
			}

			&[aria-expanded='true'] {
				background-color: rgba($color-primary-light, 0.1);
				border-color: rgba($color-primary, 0.5);
			}
		}

		&--muted {
			color: var(--text-primary);
			border: 1px solid var(--text-muted);

			&:hover {
				color: var(--text-primary);
				border: 1px solid var(--text-muted-hover);
				background-color: var(--bg-hover);
			}

			&[aria-expanded='true'] {
				background-color: rgba($color-primary-light, 0.1);
				border-color: rgba($color-primary, 0.5);
			}
		}

		&--rounded {
			border-radius: $radius-full;
		}

		&--square {
			aspect-ratio: 1;
			padding: 0;
		}
	}
</style>
