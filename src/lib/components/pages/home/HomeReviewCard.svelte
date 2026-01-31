<script lang="ts">
	import Quote from '$lib/components/icons/Quote.svelte';

	export interface HomeReviewCardProps {
		content: string;
		img: string;
		name: string;
		work: string;
	}

	const { content, img, name, work }: HomeReviewCardProps = $props();
</script>

<div class="card">
	<Quote />
	<p>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		"{@html content}"
	</p>
	<div class="card__author">
		<img src="assets/images/review/{img}.webp" alt="auteur de l'avis" />
		<div class="card__author__info">
			<p class="card__author__info__name">{name}</p>
			<p class="card__author__info__work">{work}</p>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		flex: 1;
		min-width: 20rem;
		padding: $spacing-6;
		border: 1px solid rgba($color-primary, 0.25);
		display: flex;
		flex-direction: column;
		gap: $spacing-6;
		font-size: $font-size-sm;
		border-radius: $radius-3xl;
		background-color: rgba(#595959, 0.07);

		:global(.icon) {
			stroke-width: 0;
			fill: $color-primary;
			transform: rotate(180deg);
		}

		:global(span) {
			color: $color-primary;
		}

		&__author {
			display: flex;
			align-items: center;
			gap: $spacing-3;

			img {
				width: 3rem;
				border-radius: $radius-full;
			}

			&__info {
				&__name {
					font-size: $font-size-lg;
					font-weight: $font-weight-bold;
				}

				&__work {
					font-size: $font-size-sm;
					font-weight: $font-weight-regular;
					color: var(--text-secondary);
				}
			}
		}
	}
</style>
