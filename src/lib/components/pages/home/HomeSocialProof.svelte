<script>
	import Button from '$lib/components/ui/Button.svelte';
	import Title from '$lib/components/ui/Title.svelte';
	import { m } from '$lib/paraglide/messages';
	import { calendlyModal } from '$lib/stores/calendly.svelte';
</script>

<section>
	<div class="card">
		<div class="card__overlay"></div>
		<img src="assets/images/djason.webp" alt="Apprenant" />
	</div>
	<div class="content">
		<Title tag="h2" prefix={m.home_social_proof_on_title()} center reduce>
			{m.home_social_proof_title()}
		</Title>
		<ul class="content__list">
			<li>{m.home_social_proof_first_text()}</li>
			<li>{m.home_social_proof_second_text()}</li>
			<li class="last">{m.home_social_proof_tertiary_text()}</li>
		</ul>
		<div class="content__actions">
			<Button onclick={() => calendlyModal.open()}>{m.home_social_proof_primary_btn()}</Button>
			<Button type="secondary" link="https://djason-chery.dev/">
				{m.home_social_proof_secondary_btn()}
			</Button>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		@include container;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: $spacing-8;

		@media (min-width: 850px) {
			flex-direction: row;
		}

		.card {
			width: 13rem;
			border: 1px solid rgba($color-primary, 0.25);
			position: relative;
			border-radius: $radius-xl;
			overflow: hidden;

			@media (min-width: 850px) {
				width: 17rem;
				align-self: stretch;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: top;
			}

			&__overlay {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba($color-primary, 0.2) 100%);

				:global([data-theme='light']) & {
					background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba($color-primary, 0.3) 110%);
				}
			}
		}

		.content {
			width: 45rem;
			max-width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $spacing-12;

			@media (min-width: 850px) {
				align-items: start;
			}

			:global(.title) {
				@media (min-width: 850px) {
					text-align: start;
				}
			}

			:global(.title span) {
				@media (min-width: 850px) {
					left: 0.8rem;
					transform: translateX(0);
				}
			}

			&__list {
				max-width: 90%;
				padding-left: $spacing-4;
				display: flex;
				flex-direction: column;
				gap: $spacing-5;

				li {
					position: relative;
					color: var(--text-secondary);

					&::before,
					&::after {
						content: '';
						position: absolute;
						background-color: $color-primary;
					}

					&::before {
						width: $spacing-2;
						height: $spacing-2;
						right: calc(100% + $spacing-2);
						top: 50%;
						transform: translateY(-50%);
						border-radius: 2rem;
					}

					&::after {
						width: 0.05rem;
						height: $spacing-5;
						top: 100%;
						right: calc(100% + $spacing-3);
						transform: translateX(50%);
					}

					&.last::after {
						display: none;
					}
				}
			}

			&__actions {
				display: flex;
				flex-direction: column;
				gap: $spacing-4;

				@include sm {
					flex-direction: row;
				}
			}
		}
	}
</style>
