<script lang="ts">
	import { onMount } from 'svelte';
	import AudienceToggle from '$lib/components/ui/AudienceToggle.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Title from '$lib/components/ui/Title.svelte';
	import { m } from '$lib/paraglide/messages';
	import { audience } from '$lib/stores/audience.svelte';
	import { calendlyModal } from '$lib/stores/calendly.svelte';
	import { createScrollObserver } from '$lib/utils/scroll';
	import HomeHeaderImage from './HomeHeaderImage.svelte';

	let imageWrapperRef: HTMLDivElement | undefined = $state();
	let imageVisible = $state(false);
	let ready = $state(false);

	onMount(() => {
		requestAnimationFrame(() => {
			ready = true;
		});
	});

	$effect(() => {
		if (!imageWrapperRef) return;
		return createScrollObserver(
			imageWrapperRef,
			() => (imageVisible = true),
			() => (imageVisible = false)
		);
	});
</script>

<header>
	<div class="audience-toggle-wrapper">
		<div class="audience-toggle">
			<AudienceToggle halo />
		</div>
	</div>
	<div class="container">
		<div class="content" class:ready>
			<Title prefix={audience.text(m.home_header_on_title, m.home_header_on_title_vibe)} gradient>
				{audience.text(m.home_header_title, m.home_header_title_vibe)}
			</Title>
			<p>
				{audience.text(m.home_header_first_text, m.home_header_first_text_vibe)}
				<br />
				<br />
				{audience.text(m.home_header_second_text, m.home_header_second_text_vibe)}
			</p>
			<Button onclick={() => calendlyModal.open()} shimmer>{m.home_header_text_button()}</Button>
		</div>
		<div class="fake-img"></div>
	</div>
	<div class="content"></div>
	<div class="container-image" bind:this={imageWrapperRef}>
		<HomeHeaderImage visible={imageVisible} />
	</div>
</header>

<style lang="scss">
	.audience-toggle-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100% + $spacing-16);
		pointer-events: none;
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		@include xl {
			height: calc(100%);
			padding-bottom: $spacing-12;
		}
	}

	.audience-toggle {
		position: sticky;
		// Mobile: pill height (3.25rem) + pill bottom ($spacing-4) + gap ($spacing-4)
		bottom: calc(3.25rem + $spacing-4 + $spacing-4);
		left: 50%;
		transform: translateX(-50%);
		width: fit-content;
		margin: 0 auto;
		pointer-events: auto;

		@include sm {
			// Navbar is at top from sm breakpoint, so just use normal spacing
			bottom: $spacing-8;
		}

		@include xl {
			position: absolute;
			bottom: $spacing-12;
			left: 50%;
		}
	}

	header {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 37rem;

		@media (min-width: 362px) {
			gap: 33rem;
		}

		@media (min-width: 487px) {
			gap: 27rem;
		}

		@include sm {
			min-height: 100vh;
			min-height: 100dvh;
			height: 70rem;
			gap: 35rem;
		}

		@include md {
			height: 70rem;
			gap: 31rem;
		}

		@include xl {
			min-height: auto;
			height: 100vh;
			height: 100dvh;
			align-items: center;
			gap: $spacing-32;
			flex-direction: row;
		}

		@media (min-width: 2000px) {
			justify-content: center;
		}

		.container {
			width: 100%;
			height: 100%;
			padding: $spacing-4 $spacing-4 0 $spacing-4;
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			display: flex;
			align-items: start;
			gap: $spacing-32;

			@include sm {
				padding: 10rem $spacing-12 0 $spacing-12;
			}

			@include xl {
				padding: 0;
				align-items: center;
			}

			@media (min-width: 2000px) {
				justify-content: center;
			}

			.fake-img {
				flex: 1;
				max-width: 1720px;
				display: none;
				@media (min-width: 2000px) {
					display: block;
				}
			}
		}

		.content {
			width: 100%;
			max-width: 31.5rem;
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: $spacing-8;

			@include xl {
				width: 31.5rem;
				margin-left: 10rem;
			}

			p {
				color: var(--text-secondary);
			}

			> :global(*) {
				opacity: 0;
				transform: translateY(1.5rem);
				filter: blur(6px);
				transition:
					opacity 800ms cubic-bezier(0.16, 1, 0.3, 1),
					transform 800ms cubic-bezier(0.16, 1, 0.3, 1),
					filter 800ms cubic-bezier(0.16, 1, 0.3, 1);
			}

			&.ready > :global(:nth-child(1)) {
				opacity: 1;
				transform: translateY(0);
				filter: blur(0);
				transition-delay: 200ms;
			}

			&.ready > :global(:nth-child(2)) {
				opacity: 1;
				transform: translateY(0);
				filter: blur(0);
				transition-delay: 450ms;
			}

			&.ready > :global(:nth-child(3)) {
				opacity: 1;
				transform: translateY(0);
				filter: blur(0);
				transition-delay: 700ms;
			}

			@media (prefers-reduced-motion: reduce) {
				> :global(*) {
					opacity: 1;
					transform: none;
					filter: none;
					transition: none;
				}
			}
		}

		.container-image {
			width: 90%;
			max-width: 1720px;
			height: 25rem;
			position: relative;
			overflow: hidden;
			mask-composite: intersect;
			mask-image:
				linear-gradient(to right, rgba(0, 0, 0, 0.1), black 100%),
				linear-gradient(to top, rgba(0, 0, 0, 0), black 100%);

			:global([data-theme='light']) & {
				mask-image:
					linear-gradient(to right, rgba(0, 0, 0, 0.15), black 50%),
					linear-gradient(to top, rgba(0, 0, 0, 0), black 80%);
			}

			@include sm {
				min-height: calc(100vh - 35rem);
				height: 35rem;
			}

			@include md {
				width: calc(100% - 17rem);
				min-height: calc(100vh - 29rem);
				height: 40rem;
			}

			@include xl {
				/* height: 80vh;
				height: 80dvh; */
				/* min-height: auto; */
				height: auto;
				min-height: 80vh;
				min-height: 80dvh;
				/*  */
				max-height: none;
				flex: 1;
				align-self: flex-end;
			}
		}
	}
</style>
