<script>
	import Logo from '$components/ui/Logo.svelte';
	import { l } from '$lib/i18n';
</script>

<header>
	<div class="pres">
		<div class="pres__content">
			<div class="pres__content__logo">
				<Logo />
			</div>
			<div class="pres__content__title">
				<div>
					<h1>{l.home_header_title()}</h1>
					<p>{l.home_header_text()}</p>
				</div>
				<button>{l.home_header_button()}</button>
			</div>
		</div>
		<div class="pres__image">
			<img src="/images/home/header.png" alt="Présentation" />
		</div>
	</div>
	<!-- <div class="links">
		<a href="#temp">Créations de site web</a>
		<a href="#temp">Créations de site web</a>
		<a href="#temp">Créations de site web</a>
	</div>
	<div class="contacts">
		<a href="#temp">Créations de site web</a>
		<a href="#temp">Créations de site web</a>
		<a href="#temp">Créations de site web</a>
		<a href="#temp">Créations de site web</a>
		<a href="#temp">Créations de site web</a>
		<a href="#temp">Créations de site web</a>
	</div> -->
</header>

<style lang="scss">
	header {
		width: 100%;
		height: calc(100svh - 6rem);
		padding: $margin;
		position: relative;

		.pres {
			width: 100%;
			height: 40%;
			display: flex;
			gap: $margin;

			&__content {
				width: calc(70% - $margin);
				height: 100%;
				display: flex;
				flex-direction: column;
				gap: $margin;

				> div {
					@include cards;

					height: calc(50% - ($margin / 2));
				}

				&__title {
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					> div {
						display: flex;
						flex-direction: column;
						gap: calc($padding / 2);

						h1 {
							font-size: 1.3rem;
						}

						p {
							padding-left: $padding;
						}
					}

					button {
						align-self: end;
					}
				}
			}

			&__image {
				@include cards;

				width: 30%;
				height: 100%;
				padding: calc($padding * 2);
				display: flex;
				align-items: center;
				justify-content: center;

				img {
					max-width: 100%;
					max-height: 100%;
				}
			}
		}
	}

	@media screen and (max-width: 1000px) {
		header .pres {
			&__content {
				width: calc(70% - $margin);

				&__title {
					width: calc(100vw - $margin * 2);
					align-items: center;

					> div {
						display: flex;
						flex-direction: column;
						align-items: center;

						p {
							padding-left: 0;
						}
					}

					button {
						align-self: center;
					}
				}
			}

			&__image {
				height: calc(50% - ($margin / 2));
				padding: $padding;
			}
		}
	}

	@media screen and (max-width: 800px) {
		header {
			height: calc(100svh - 5rem);

			.pres {
				&__content {
					width: 100%;
				}

				&__image {
					position: absolute;
					height: 89px;
					bottom: calc(153px + $margin * 2);
				}
			}
		}
	}
</style>
