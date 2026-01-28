<script>
	import Button from '$lib/components/ui/Button.svelte';
	import Title from '$lib/components/ui/Title.svelte';
</script>

<section>
	<div class="card">
		<div class="card__overlay"></div>
		<img src="assets/images/djason.webp" alt="Apprenant" />
	</div>
	<div class="content">
		<Title tag="h2" prefix="Formez-vous comme Djason !" center>
			Djason Chery à debloqué son potentiel de développeur grâce à Seelearn.
		</Title>
		<ul class="content__list">
			<li>Plus de 10 projets réalisés sur différentes technologies en quelques mois.</li>
			<li>Formé à l’apprentissage d’une nouvelle technologie en quelques jours.</li>
			<li class="last">Capable de mener des projets en équipe ou en freelance.</li>
		</ul>
		<div class="content__actions">
			<Button>Je me forme</Button>
			<Button type="secondary">Voir les projets de djason</Button>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		max-width: calc(100% - $spacing-8);
		margin: $spacing-32 0;
		display: flex;
		flex-direction: column;
		align-items: center;
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
				text-align: center;

				@media (max-width: 550px) {
					font-size: $font-size-2xl;
				}

				@media (min-width: 850px) {
					text-align: start;
				}
			}

			:global(.title span) {
				width: 196px;
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
