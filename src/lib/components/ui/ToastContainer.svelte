<script lang="ts">
	import { toast } from '$lib/stores/toast.svelte';
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { Check, X, TriangleAlert, Info } from '@lucide/svelte';

	const icons = {
		success: Check,
		error: X,
		warning: TriangleAlert,
		info: Info
	};

	let isMobile = $state(false);

	$effect(() => {
		const mediaQuery = window.matchMedia('(max-width: 767px)');
		isMobile = mediaQuery.matches;

		const handler = (e: MediaQueryListEvent) => (isMobile = e.matches);
		mediaQuery.addEventListener('change', handler);

		return () => mediaQuery.removeEventListener('change', handler);
	});
</script>

<div class="toast-container">
	{#each toast.list as item (item.id)}
		{@const Icon = icons[item.type]}
		<div
			class="toast toast--{item.type}"
			role="alert"
			in:fly={{ y: isMobile ? -50 : 50, duration: 300 }}
			out:fade={{ duration: 200 }}
			animate:flip={{ duration: 300 }}
		>
			<span class="toast__icon">
				<Icon size={18} />
			</span>
			<span class="toast__message">{item.message}</span>
			<button class="toast__close" onclick={() => toast.remove(item.id)} aria-label="Fermer">
				<X size={16} />
			</button>
		</div>
	{/each}
</div>

<style lang="scss">
	.toast-container {
		position: fixed;
		top: $spacing-6;
		left: $spacing-4;
		right: $spacing-4;
		z-index: $z-tooltip;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $spacing-3;

		@include md {
			top: auto;
			bottom: $spacing-6;
			left: auto;
			right: $spacing-6;
			align-items: flex-end;
			max-width: calc(100vw - $spacing-12);
		}
	}

	.toast {
		@include glass-effect;
		display: flex;
		align-items: center;
		gap: $spacing-3;
		padding: $spacing-3 $spacing-4;
		border-radius: $radius-lg;
		border: 1px solid var(--border-color);
		min-width: 280px;
		max-width: 400px;

		&__icon {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			width: 1.75rem;
			height: 1.75rem;
			border-radius: $radius-full;
		}

		&__message {
			flex: 1;
			font-size: $font-size-sm;
			color: var(--text-primary);
		}

		&__close {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-shrink: 0;
			padding: $spacing-1;
			background: transparent;
			border: none;
			border-radius: $radius-md;
			color: var(--text-secondary);
			cursor: pointer;
			transition: all $transition-fast $transition-timing;

			&:hover {
				background-color: rgb(var(--hover) / 0.1);
				color: var(--text-primary);
			}
		}

		&--success {
			border-color: rgba($color-success, 0.3);

			.toast__icon {
				background-color: rgba($color-success, 0.15);
				color: $color-success;
			}
		}

		&--error {
			border-color: rgba($color-error, 0.3);

			.toast__icon {
				background-color: rgba($color-error, 0.15);
				color: $color-error;
			}
		}

		&--warning {
			border-color: rgba($color-warning, 0.3);

			.toast__icon {
				background-color: rgba($color-warning, 0.15);
				color: $color-warning;
			}
		}

		&--info {
			border-color: rgba($color-primary, 0.3);

			.toast__icon {
				background-color: rgba($color-primary, 0.15);
				color: $color-primary;
			}
		}
	}
</style>
