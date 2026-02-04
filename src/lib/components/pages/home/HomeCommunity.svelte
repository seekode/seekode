<script lang="ts">
	import Title from '$lib/components/ui/Title.svelte';
	import type { HomeCommunityCardProps } from './HomeCommunityCard.svelte';
	import HomeCommunityCard from './HomeCommunityCard.svelte';
	import * as m from '$lib/paraglide/messages';
	import { parallax } from '$lib/utils/parallax';
	import { reveal } from '$lib/utils/scroll';

	const cards: HomeCommunityCardProps[] = [
		{
			action: 'https://www.youtube.com/@_seekode',
			icon: 'skool',
			title: m.community_card_skool_title(),
			text: m.community_card_skool_text(),
			actionName: m.community_card_skool_action()
		},
		{
			action: 'https://www.youtube.com/@_seekode',
			icon: 'live',
			title: m.community_card_live_title(),
			text: m.community_card_live_text(),
			actionName: m.community_card_live_action()
		},
		{
			action: 'https://www.youtube.com/@_seekode',
			icon: 'tiktok',
			title: m.community_card_tiktok_title(),
			text: m.community_card_tiktok_text(),
			actionName: m.community_card_tiktok_action()
		},
		{
			action: 'https://www.youtube.com/@_seekode',
			icon: 'youtube',
			title: m.community_card_youtube_title(),
			text: m.community_card_youtube_text(),
			actionName: m.community_card_youtube_action()
		}
	];
</script>

<section>
	<div>
		<div use:reveal={{ animation: 'land' }} use:parallax={{ speed:1 }}>
			<Title prefix={m.community_prefix()} center>{m.community_title()}</Title>
			<p>
				{m.community_description_1()}
				<br />
				<br />
				{m.community_description_2()}
			</p>
		</div>
		<div class="line" use:reveal={{ animation: 'grow' }}></div>
		<div class="cards" use:reveal={{ animation: 'land', stagger: 120 }}>
			{#each cards as { title, text, action, actionName, icon } (title)}
				<HomeCommunityCard {title} {text} {action} {actionName} {icon} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		@include container-gradient;

		> div {
			@include container;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $spacing-12;

			> div:first-child {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: $spacing-12;
			}

			p {
				max-width: 46rem;
				text-align: center;
			}

			> .line {
				max-width: 65rem;
				width: 100%;
				height: 1px;
				margin: $spacing-10 0;
				background: var(--text-muted);
			}

			> .cards {
				display: flex;
				justify-content: center;
				gap: $spacing-4;
				flex-wrap: wrap;
			}
		}
	}
</style>
