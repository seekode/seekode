<script lang="ts">
	import type { Snippet } from 'svelte';

	interface TitleProps {
		center?: boolean;
		children: Snippet;
		prefix: string;
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	}

	let { center, children, prefix, tag = 'h1' }: TitleProps = $props();
</script>

<svelte:element this={tag} class="title" class:center>
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

		&.center {
			text-align: center;
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
</style>
