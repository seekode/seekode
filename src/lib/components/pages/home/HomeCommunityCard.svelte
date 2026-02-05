<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { tilt } from '$lib/utils/tilt';

	export interface HomeCommunityCardProps {
		action: (() => void) | string;
		actionName: string;
		icon: 'live' | 'skool' | 'tiktok' | 'youtube';
		text: string;
		title: string;
	}

	const { action, actionName, icon, text, title }: HomeCommunityCardProps = $props();

	const isLink = $derived(typeof action === 'string');
</script>

<svelte:element
	this={isLink ? 'a' : 'button'}
	class="card"
	use:tilt
	aria-label={isLink ? `${title} ${m.community_card_opens_new_tab()}` : title}
	href={isLink ? (action as string) : undefined}
	rel={isLink ? 'noopener noreferrer' : undefined}
	target={isLink ? '_blank' : undefined}
	onclick={!isLink ? (action as () => void) : undefined}
	role={!isLink ? 'button' : undefined}
>
	<img src={`assets/images/icons/${icon}.svg`} alt={title} aria-hidden="true" />
	<h3>{title}</h3>
	<p class="card__text">{text}</p>
	<p class="card__actionName">{actionName}</p>
</svelte:element>

<style lang="scss">
	.card {
		max-width: 22rem;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: $spacing-4;
		transition:
			border-color $transition-slow $transition-timing,
			background $transition-slow $transition-timing;
		border-radius: 20px;
		border: 0.5px solid transparent;

		&:hover {
			border: 0.5px solid var(--text-primary);
			background: linear-gradient(198deg, rgb(var(--hover) / 0.1), var(--bg-primary));
		}

		img {
			max-height: 1.4rem;
		}

		h3 {
			font-size: $font-size-base;
			font-weight: $font-weight-regular;
		}

		&__text {
			font-size: $font-size-sm;
			font-weight: $font-weight-light;
			color: var(--text-secondary);
		}

		&__actionName {
			font-size: $font-size-xs;
			font-weight: $font-weight-regular;
		}
	}
</style>
