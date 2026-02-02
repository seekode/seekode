<script lang="ts">
	import { Braces, Sparkles } from '@lucide/svelte';
	import { audience } from '$lib/stores/audience.svelte';

	interface AudienceToggleProps {
		halo?: boolean;
	}

	let { halo = false }: AudienceToggleProps = $props();
</script>

<div class="toggle-wrapper" class:toggle-wrapper--halo={halo}>
	<button
		class="toggle"
		onclick={() => audience.toggle()}
		aria-label={audience.isDev ? 'Passer en mode Vibe Coder' : 'Passer en mode Développeur'}
	>
		<span class="toggle__option" class:toggle__option--active={audience.isDev}>
			<Braces size={16} />
			<span>Dev</span>
		</span>
		<span class="toggle__option" class:toggle__option--active={audience.isVibe}>
			<Sparkles size={16} />
			<span>Vibe</span>
		</span>
		<span class="toggle__slider" class:toggle__slider--vibe={audience.isVibe}></span>
	</button>
</div>

<style lang="scss">
	.toggle-wrapper {
		position: relative;
		overflow: visible;

		&--halo {
			&::before,
			&::after {
				content: '';
				position: absolute;
				inset: -12px -20px;
				border-radius: $radius-full;
				border: 3px solid rgba($color-primary, 0.5);
				filter: blur(4px);
				animation: pulse-ring 2.5s ease-out infinite;
				pointer-events: none;
				z-index: -1;
			}

			&::after {
				animation-delay: 1.25s;
			}
		}
	}

	.toggle {
		position: relative;
		display: flex;
		padding: 4px;
		background-color: var(--bg-tertiary);
		border: 1px solid var(--text-muted);
		border-radius: $radius-full;
		cursor: pointer;
		transition:
			border-color $transition-base $transition-timing,
			transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);

		&:hover {
			border-color: var(--text-secondary);
		}

		&:active {
			transform: scale(1.05);
		}

		&__option {
			position: relative;
			z-index: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: $spacing-2;
			padding: $spacing-2 $spacing-3;
			border-radius: $radius-full;
			color: var(--text-secondary);
			font-size: $font-size-sm;
			font-weight: $font-weight-medium;
			transition: color $transition-base $transition-timing;

			@include md {
				padding: $spacing-2 $spacing-4;
			}

			&--active {
				color: var(--bg-primary);
			}
		}

		&__slider {
			position: absolute;
			top: 4px;
			left: 4px;
			right: 50%;
			height: calc(100% - 8px);
			background-color: $color-primary;
			border-radius: $radius-full;
			// Dev → Vibe: left moves first, right follows (stretch then contract)
			transition:
				left 0.3s cubic-bezier(0.4, 0, 0.2, 1),
				right 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.12s;

			&--vibe {
				left: 50%;
				right: 4px;
				// Vibe → Dev: right moves first, left follows (stretch then contract)
				transition:
					left 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0.12s,
					right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
			}
		}
	}

	@keyframes pulse-ring {
		0% {
			opacity: 0;
			transform: scale(0.8);
		}
		20% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: scale(1);
		}
	}
</style>
