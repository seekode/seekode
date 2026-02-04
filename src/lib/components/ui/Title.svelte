<script lang="ts">
	import type { Snippet } from 'svelte';

	interface TitleProps {
		center?: boolean;
		children: Snippet;
		gradient?: boolean;
		prefix: string;
		reduce?: boolean;
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	}

	let { center, children, gradient, prefix, reduce, tag = 'h1' }: TitleProps = $props();
</script>

<svelte:element this={tag} class="title" class:center class:reduce class:gradient>
	<span class:center>{prefix}</span>
	{@render children()}
</svelte:element>

<style lang="scss">
	.title {
		margin-top: 1.5rem;
		position: relative;
		font-size: $font-size-4xl;
		font-weight: $font-weight-medium;
		margin-bottom: -1rem;

		&.reduce {
			@media (max-width: 550px) {
				font-size: $font-size-2xl;
			}
		}

		&.center {
			text-align: center;
		}

		&.gradient {
			background: linear-gradient(
				90deg,
				$color-primary 0%,
				var(--text-primary) 50%,
				$color-primary 100%
			);
			background-size: 300% auto;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			animation: gradientFlow 7s ease infinite;

			span {
				-webkit-text-fill-color: var(--text-primary);
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;
			}
		}

		span {
			width: max-content;
			position: absolute;
			left: 1.2rem;
			bottom: 100%;
			font-size: $font-size-sm;
			font-weight: $font-weight-light;

			&::before,
			&::after {
				content: '';
				width: 0.3rem;
				height: 0.3rem;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				background-color: $color-secondary;
			}

			&::before {
				right: calc(100% + 0.8rem);
			}

			&::after {
				left: calc(100% + 0.8rem);
			}

			&.center {
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}

	@keyframes gradientFlow {
		0%,
		100% {
			background-position: 0% center;
		}
		50% {
			background-position: 100% center;
		}
	}
</style>
