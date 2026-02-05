<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface FieldProps extends Omit<HTMLInputAttributes, 'id' | 'placeholder' | 'value'> {
		children: Snippet;
		id: string;
		placeholder?: string;
		value?: string;
		error?: string;
	}

	let {
		children,
		id,
		placeholder,
		value = $bindable(''),
		error,
		required,
		type = 'text',
		...restProps
	}: FieldProps = $props();
</script>

<div class="field" class:field--error={error}>
	<label for={id}>{@render children()}{#if required}<span class="field__required" aria-hidden="true"> *</span>{/if}</label>
	<input
		{id}
		{type}
		{placeholder}
		bind:value
		{required}
		aria-describedby={error ? `${id}-error` : undefined}
		aria-invalid={error ? true : undefined}
		{...restProps}
	/>
	{#if error}
		<span id="{id}-error" class="field__error">{error}</span>
	{/if}
</div>

<style lang="scss">
	.field {
		width: 100%;
		position: relative;
		margin-top: $spacing-6;
		margin-bottom: $spacing-4;
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
			transition: background-color $transition-slow $transition-timing;
		}

		label {
			position: absolute;
			font-size: $font-size-xs;
			bottom: calc(100% + $spacing-1);
			transition: color $transition-slow $transition-timing;
		}

		&__required {
			color: $color-error;
		}

		input {
			width: 100%;
			padding: 0.4rem $spacing-4;
			border: 1px solid $color-primary;
			border-radius: $radius-full;
			background: none;
			transition: border-color $transition-slow $transition-timing;
		}

		&__error {
			position: absolute;
			top: 100%;
			left: $spacing-4;
			font-size: $font-size-xs;
			color: $color-error;
			animation: appear 0.3s ease-out;
		}

		// État erreur
		&--error {
			&::before {
				background-color: $color-error;
			}

			label {
				color: $color-error;
			}

			input {
				border-color: $color-error;
			}
		}
	}
</style>
