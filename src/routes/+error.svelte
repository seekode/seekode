<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	import * as m from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
	<title>{page.status} - {m.error_page_title()}</title>
</svelte:head>

<section>
	<div class="error">
		<div class="error__code">
			<span class="error__code__digit">4</span>
			<span class="error__code__zero">
				<span class="error__code__zero__ring"></span>
				<span class="error__code__zero__ring"></span>
				<span class="error__code__zero__ring"></span>
			</span>
			<span class="error__code__digit">4</span>
		</div>
		<h1>{m.error_page_title()}</h1>
		<p>{m.error_page_description()}</p>
		<Button link={localizeHref('/')}>{m.error_page_back_home()}</Button>
	</div>
</section>

<style lang="scss">
	section {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: $spacing-8;
	}

	.error {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: $spacing-6;
		text-align: center;

		&__code {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: $spacing-2;
			font-size: clamp(4rem, 15vw, 10rem);
			font-weight: $font-weight-bold;
			line-height: 1;
			color: var(--text-primary);

			&__digit {
				opacity: 0.15;
			}

			&__zero {
				position: relative;
				width: 0.85em;
				height: 0.85em;
				display: flex;
				align-items: center;
				justify-content: center;

				&__ring {
					position: absolute;
					width: 100%;
					height: 100%;
					border: 4px solid $color-primary;
					border-radius: 50%;
					opacity: 0.6;
					animation: pulse 2s ease-in-out infinite;

					&:nth-child(2) {
						animation-delay: 0.4s;
					}

					&:nth-child(3) {
						animation-delay: 0.8s;
					}
				}
			}
		}

		h1 {
			font-size: $font-size-2xl;
			font-weight: $font-weight-medium;
			color: var(--text-primary);

			@include md {
				font-size: $font-size-3xl;
			}
		}

		p {
			max-width: 400px;
			color: var(--text-secondary);
			font-size: $font-size-base;

			@include md {
				font-size: $font-size-lg;
			}
		}
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(0.8);
			opacity: 0.8;
		}
		50% {
			transform: scale(1.1);
			opacity: 0.2;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.error__code__zero__ring {
			animation: none;
		}
	}
</style>
