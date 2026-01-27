<script lang="ts">
	import type { Snippet } from 'svelte';

	interface TitleProps {
		children: Snippet;
		prefix: string;
	}

	let { children, prefix }: TitleProps = $props();
</script>

<h1 class="title">
	<span>{prefix}</span>
	{@render children()}
</h1>

<style lang="scss">
	.title {
		margin-top: 1.5rem;
		position: relative;
		font-size: $font-size-4xl;
		font-weight: $font-weight-medium;

		span {
			position: absolute;
			left: 0.8rem;
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
				right: calc(100% + 0.5rem);
			}

			&::after {
				left: calc(100% + 0.5rem);
			}
		}
	}
</style>
