<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Booleanish } from 'svelte/elements';
	import { fade } from 'svelte/transition';

	interface ButtonProps {
		ariaExpanded?: Booleanish | null | undefined;
		ariaHaspopup?: 'dialog' | 'menu' | Booleanish | 'grid' | 'listbox' | 'tree' | null | undefined;
		ariaLabel?: string;
		children: Snippet;
		classes?: string;
		link?: string;
		loading?: boolean;
		onclick?: (event: MouseEvent) => void;
		rounded?: boolean;
		square?: boolean;
		success?: string;
		thin?: boolean;
		type?: 'secondary' | 'muted';
	}

	let {
		ariaExpanded,
		ariaHaspopup,
		ariaLabel,
		children,
		classes,
		link,
		loading,
		onclick,
		rounded,
		square,
		success,
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

{#if link}
	<a
		class={customClasses}
		aria-expanded={ariaExpanded}
		aria-haspopup={ariaHaspopup}
		aria-label={ariaLabel}
		href={link}
		target="_blank"
	>
		<div>
			{@render children()}
		</div>
	</a>
{:else}
	<button
		class={customClasses}
		class:loading
		class:success
		aria-expanded={ariaExpanded}
		aria-haspopup={ariaHaspopup}
		aria-label={ariaLabel}
		onclick={loading || success ? undefined : onclick}
	>
		<div>
			{#if loading}
				<span out:fade class="btn__loading"></span>
			{/if}
			{#if success}
				<span out:fade class="btn__success">{success}</span>
			{:else}
				{@render children()}
			{/if}
		</div>
	</button>
{/if}

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
		transition:
			$transition-base $transition-timing,
			transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);

		&:active {
			transform: scale(1.05);
		}

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

		&:hover,
		&.loading,
		&.success {
			color: var(--bg-primary);

			&::before,
			&::after {
				width: calc(50% + 2px);
			}
		}

		&.success {
			pointer-events: none;
			border-color: $color-success;

			&::before,
			&::after {
				background-color: $color-success;
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

			&:hover,
			&.loading,
			&.success {
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
			&::after,
			&.success {
				content: none;
			}

			&:hover,
			&.loading {
				color: var(--text-primary);
				border: 1px solid var(--text-muted-hover);
				background-color: rgb(var(--hover) / 0.08);
			}

			&[aria-expanded='true'] {
				background-color: rgba($color-primary-light, 0.1);
				border-color: rgba($color-primary, 0.5);
			}

			&.success {
				color: var(--text-primary);
			}
		}

		&--thin {
			height: 2.5rem;
			padding: 0 $spacing-4;
			font-size: $font-size-sm;
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

		&__loading {
			position: absolute;
			width: 1rem;
			height: 1rem;
			border: 2px solid currentColor;
			border-top-color: transparent;
			border-radius: 50%;
			animation:
				spin 0.6s linear infinite,
				appear 0.3s ease-out;
			color: $color-primary;
		}

		@keyframes spin {
			to {
				transform: rotate(360deg);
			}
		}

		&__success {
			animation: appear 0.3s ease-out;
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
			overflow: hidden;
			transition: color $transition-base $transition-timing;
		}

		&.loading {
			pointer-events: none;

			> div {
				color: transparent;
			}
		}
	}
</style>
