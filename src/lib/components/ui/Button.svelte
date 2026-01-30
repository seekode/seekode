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
		thin?: boolean;
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
		thin,
		type
	}: ButtonProps = $props();

	// Classes computed with $derived
	const customClasses = $derived(
		[
			'btn',
			classes,
			type && `btn--${type}`,
			rounded && 'btn--rounded',
			square && 'btn--square',
			thin && 'btn--thin'
		]
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
	<div>
		{@render children()}
	</div>
</button>

<style lang="scss">
	.btn {
		height: 3rem;
		padding: 0 $spacing-8;
		border: 1px solid $color-primary;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: $spacing-2;
		font-weight: $font-weight-regular;
		cursor: pointer;
		color: $color-primary;
		border-radius: $radius-md;
		transition: $transition-base $transition-timing;

		&::before,
		&::after {
			content: '';
			width: 0;
			height: 100%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			z-index: 0;
			background-color: $color-primary;
			transition: $transition-slow $transition-timing;
		}

		&::before {
			left: calc(50% - 1px);
			border-radius: 0 $radius-md $radius-md 0;
		}

		&::after {
			right: calc(50% - 1px);
			border-radius: $radius-md 0 0 $radius-md;
		}

		&:hover {
			color: var(--bg-primary);

			&::before,
			&::after {
				width: calc(50% + 2px);
			}
		}

		&--secondary {
			color: var(--text-primary);
			border: 1px solid var(--text-primary);
			font-weight: $font-weight-light;

			&::before,
			&::after {
				background-color: var(--text-primary);
			}

			&:hover {
				color: var(--bg-primary);
			}

			&[aria-expanded='true'] {
				background-color: rgba($color-primary-light, 0.1);
				border-color: rgba($color-primary, 0.5);
			}
		}

		&--muted {
			color: var(--text-primary);
			border: 1px solid var(--text-muted);
			font-weight: $font-weight-light;

			&::before,
			&::after {
				content: none;
			}

			&:hover {
				color: var(--text-primary);
				border: 1px solid var(--text-muted-hover);
				background-color: rgb(var(--hover) / 0.08);
			}

			&[aria-expanded='true'] {
				background-color: rgba($color-primary-light, 0.1);
				border-color: rgba($color-primary, 0.5);
			}
		}

		&--thin {
			height: 2.5rem;
			padding: 0 $spacing-4;
		}

		&--rounded {
			border-radius: $radius-full;

			&::before {
				border-radius: 0 $radius-full $radius-full 0;
			}

			&::after {
				border-radius: $radius-full 0 0 $radius-full;
			}
		}

		&--square {
			aspect-ratio: 1;
			padding: 0;
		}

		> div {
			width: 100%;
			height: 100%;
			position: relative;
			z-index: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: $spacing-2;
		}
	}
</style>
