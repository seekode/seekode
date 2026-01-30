<script lang="ts">
	import type { Snippet } from 'svelte';

	interface FieldProps {
		children: Snippet;
		id: string;
		placeholder?: string;
	}

	const { children, id, placeholder }: FieldProps = $props();
</script>

<div class="input">
	<label for={id}>{@render children()}</label>
	<input {id} type="text" {placeholder} />
</div>

<style lang="scss">
	.input {
		width: 100%;
		position: relative;
		margin-top: $spacing-6;
		border-radius: $radius-full;

		&::before {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: -2;
			inset: 0;
			opacity: 0.2;
			pointer-events: none;
			border-radius: $radius-full;
			background-color: $color-primary;
		}

		label {
			position: absolute;
			font-size: $font-size-xs;
			bottom: calc(100% + $spacing-1);
		}

		input {
			width: 100%;
			padding: 0.4rem $spacing-4;
			border: 1px solid $color-primary;
			border-radius: $radius-full;
			background: none;
		}
	}
</style>
