<script lang="ts">
	import Title from '$lib/components/ui/Title.svelte';
	import type { HomeReviewCardProps } from './HomeReviewCard.svelte';
	import HomeReviewCard from './HomeReviewCard.svelte';
	import * as m from '$lib/paraglide/messages';
	import Button from '$lib/components/ui/Button.svelte';
	import { calendlyModal } from '$lib/stores/calendly.svelte';
	import { reveal } from '$lib/utils/scroll';

	const reviews: HomeReviewCardProps[] = [
		{
			content: m.review_1_content(),
			img: 'djason',
			name: m.review_1_name(),
			work: m.review_1_work()
		},
		{
			content: m.review_2_content(),
			img: 'maxime',
			name: m.review_2_name(),
			work: m.review_2_work()
		},
		{
			content: m.review_3_content(),
			img: 'romain',
			name: m.review_3_name(),
			work: m.review_3_work()
		}
	];
</script>

<section>
	<div>
		<div use:reveal={{ animation: 'land' }}>
			<Title prefix={m.review_prefix()} center>{m.review_title()}</Title>
		</div>

		<div class="reviews" use:reveal={{ animation: 'land', stagger: 120 }}>
			{#each reviews as { content, img, name, work }, i (i)}
				<HomeReviewCard {content} {img} {name} {work} />
			{/each}
		</div>

		<div use:reveal>
			<Button onclick={() => calendlyModal.open()}>{m.review_join()}</Button>
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

			> .reviews {
				padding: $spacing-32 0 $spacing-12 0;
				display: flex;
				justify-content: center;
				gap: $spacing-4;
				flex-wrap: wrap;
			}
		}
	}
</style>
