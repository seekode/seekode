<script lang="ts">
	import { browser } from '$app/environment';
	import { Cookie } from '@lucide/svelte';
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { reducedMotion } from '$lib/stores/reducedMotion.svelte';
	import { fly } from 'svelte/transition';

	const STORAGE_KEY = 'cookie-banner-dismissed';

	let visible = $state(false);

	$effect(() => {
		if (localStorage.getItem(STORAGE_KEY) === '1') return;

		const showTimeout = setTimeout(() => {
			visible = true;
		}, 2000);

		const hideTimeout = setTimeout(() => {
			dismiss();
		}, 10000);

		return () => {
			clearTimeout(showTimeout);
			clearTimeout(hideTimeout);
		};
	});

	const dismiss = () => {
		visible = false;
		if (browser) localStorage.setItem(STORAGE_KEY, '1');
	};
</script>

{#if visible}
	<div class="banner" role="status" aria-live="polite" transition:fly={{ y: -30, duration: reducedMotion.value ? 0 : 300 }}>
		<Cookie size={18} class="banner-icon" />
		<p>
			{m.cookie_banner_text()}
			<a href={localizeHref('/cookies')}>{m.cookie_banner_link()}</a>
		</p>
		<button onclick={dismiss}>{m.cookie_banner_dismiss()}</button>
	</div>
{/if}

<style lang="scss">
	.banner {
		@include glass-effect;
		position: fixed;
		top: $spacing-4;
		left: $spacing-4;
		right: $spacing-4;
		z-index: $z-fixed;
		display: flex;
		align-items: center;
		gap: $spacing-4;
		padding: $spacing-4 $spacing-5;
		border-radius: $radius-lg;
		border: 1px solid var(--text-muted);

		@include sm {
			top: calc(6rem + $spacing-4 + $spacing-4);
			left: 50%;
			right: auto;
			transform: translateX(-50%);
			max-width: 480px;
		}

		:global(.banner-icon) {
			flex-shrink: 0;
			color: $color-primary;
		}

		p {
			flex: 1;
			font-size: $font-size-xs;
			color: var(--text-secondary);
			line-height: $line-height-normal;

			a {
				color: $color-primary;
				text-decoration: underline;
				text-underline-offset: 2px;

				&:hover {
					opacity: 0.8;
				}
			}
		}

		button {
			flex-shrink: 0;
			padding: $spacing-2 $spacing-4;
			background: transparent;
			border: 1px solid $color-primary;
			border-radius: $radius-md;
			color: $color-primary;
			font-size: $font-size-xs;
			font-weight: $font-weight-medium;
			cursor: pointer;
			transition: $transition-base $transition-timing;

			&:hover {
				background-color: $color-primary;
				color: var(--bg-primary);
			}
		}
	}
</style>
