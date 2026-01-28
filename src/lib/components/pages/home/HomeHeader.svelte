<script>
	import Button from '$lib/components/ui/Button.svelte';
	import Title from '$lib/components/ui/Title.svelte';
	import HomeHeaderImage from './HomeHeaderImage.svelte';
</script>

<header>
	<div class="container">
		<div class="content">
			<Title prefix="Bienvenue chez Seekode !">Apprenez à coder comme un vrai développeur.</Title>
			<p>
				Être développeur, ce n’est pas juste connaître une techno. C’est savoir résoudre des
				problèmes, s’adapter et progresser vite.
				<br />
				<br />
				Apprenez à comprendre n’importe quelle techno, à choisir les bons outils, et à travailler comme
				un pro, même en dehors des tutos.
			</p>
			<Button>Voir la formation</Button>
		</div>
		<div class="fake-img"></div>
	</div>
	<div class="content"></div>
	<div class="container-image">
		<HomeHeaderImage />
	</div>
</header>

<style lang="scss">
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

		@media (min-width: 542px) {
			gap: 25rem;
		}

		@include sm {
			min-height: 100vh;
			min-height: 100dvh;
			gap: 35rem;
		}

		@include md {
			gap: 29rem;
		}

		@include xl {
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
		}

		.container-image {
			width: 90%;
			max-width: 1720px;
			height: 25rem;
			max-height: 50vh;
			max-height: 50dvh;
			position: relative;
			overflow: hidden;
			mask-composite: intersect;
			mask-image:
				linear-gradient(to right, rgba(0, 0, 0, 0.1) 15%, black 130%),
				linear-gradient(to top, rgba(0, 0, 0, 0) 15%, black 100%);

			:global([data-theme='light']) & {
				mask-image:
					linear-gradient(to right, rgba(0, 0, 0, 0.15), black 100%),
					linear-gradient(to top, rgba(0, 0, 0, 0), black 120%);
			}

			@include sm {
				min-height: calc(100vh - 35rem);
			}

			@include md {
				width: calc(100% - 17rem);
				min-height: calc(100vh - 29rem);
				height: 40rem;
			}

			@include xl {
				height: 80vh;
				height: 80dvh;
				min-height: auto;
				max-height: none;
				flex: 1;
				align-self: flex-end;
			}
		}
	}
</style>
