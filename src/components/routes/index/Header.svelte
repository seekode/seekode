<script>
	import Button from '$components/ui/Button.svelte';
	import Logo from '$components/ui/Logo.svelte';
	import { l } from '$lib/i18n';
</script>

<header>
	<div class="top">
		<div class="logo">
			<Logo />
		</div>
		<div class="text">
			<h1>{l.home_header_title()}</h1>
			<p>{l.home_header_text()}</p>
			<button>{l.home_header_button()}</button>
			<!-- <Button>{l.home_header_button()}</Button> -->
		</div>
	</div>
	<div class="bottom">
		<div class="left">
			<div class="image">
				<img src="/images/home/header.png" alt="Présentation" />
			</div>
			<div class="links">
				<a href="#temp">🌐 Créations de site web</a>
				<a href="#temp">🎓 Formation en ligne</a>
				<a href="#temp">💼 Préstations de formation</a>
			</div>
		</div>
		<div class="networks">
			<a href="https://www.youtube.com/@_seekode" target="_blank">Youtube 📽️</a>
			<a href="https://www.instagram.com/seekodes?igsh=bGMzZnZqdmN5ejk1" target="_blank">
				Instagram 📸
			</a>
			<a href="https://www.tiktok.com/@seekode" target="_blank">Tiktok 📸</a>
			<a href="https://www.linkedin.com/in/nicolas-texier-dev/" target="_blank">LinkedIn 💼</a>
			<a href="mailto:nicolas@seekode.com">Mail 📧</a>
			<a href="tel:0621240684">Phone 📱</a>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		height: calc(100svh - 4rem - $margin);
		min-height: 34rem;
		padding: $margin;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: $margin;

		> div {
			height: calc(50% - $margin / 2);
			max-height: 15rem;

			&.top {
				max-height: 20rem;
				display: flex;
				flex-direction: column;
				gap: $margin;

				> div {
					@include cards;

					display: flex;
					flex-direction: column;
					gap: calc($margin / 2);
					text-align: center;

					&.logo {
						height: calc(40% - $margin / 2);
					}

					&.text {
						height: calc(60% - $margin / 2);
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-between;

						h1 {
							font-size: 0.9rem;
						}

						p {
							width: 90%;
							font-size: 0.62rem;
						}
					}
				}
			}

			&.bottom {
				display: flex;
				max-height: 15rem;
				justify-content: space-between;
				gap: $margin;

				> div {
					&.left {
						flex: 1;
						max-width: 15rem;
						display: flex;
						flex-direction: column;
						gap: $margin;

						.image {
							@include cards;

							flex: 1;
							display: flex;
							align-items: center;
							justify-content: center;
							overflow: hidden;

							img {
								max-width: 100%;
								max-height: 100%;
							}
						}

						.links {
							@include cards;

							display: flex;
							flex-direction: column;
							gap: $margin;
							font-size: 0.62rem;
						}
					}

					&.networks {
						@include cards;

						padding-left: calc($padding * 2);
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						align-items: end;
						gap: $margin;
						font-size: 0.62rem;
					}
				}
			}
		}
	}

	@media screen and (min-width: 400px) {
		header > div {
			&.top > div.text {
				h1 {
					font-size: 0.9rem;
				}
				p {
					width: 70%;
					font-size: 0.7rem;
				}
			}

			&.bottom > div {
				&.left .links {
					font-size: 0.7rem;
				}

				&.networks {
					font-size: 0.7rem;
				}
			}
		}
	}

	@media screen and (min-width: 500px) {
		header > div {
			&.top > div.text {
				h1 {
					font-size: 1.2rem;
				}

				p {
					font-size: 0.9rem;
				}
			}

			&.bottom > div {
				&.left .links {
					font-size: 0.9rem;
				}

				&.networks {
					font-size: 0.9rem;
				}
			}
		}
	}

	@media screen and (min-width: 800px) {
		header {
			height: auto;
			min-height: calc(100svh - 4rem - var(--margin));

			> div {
				&.top {
					max-height: none;
					height: 30rem;

					> div {
						&.logo {
							width: calc(100% - 15rem - $margin);
							height: 50%;
						}

						&.text {
							height: 50%;
						}
					}
				}

				&.bottom {
					align-items: end;
					max-height: none;

					> div.left {
						flex: none;
						max-width: none;

						.image {
							width: 15rem;
							height: 15rem;
							position: absolute;
							top: $margin;
							right: $margin;
						}
					}
				}
			}
		}

		@media screen and (max-height: 1100px) {
			header > div {
				&.top {
					height: 25rem;
				}

				&.bottom > div.left .image {
					height: 12.5rem;
				}
			}
		}

		@media screen and (max-height: 1000px) {
			header > div {
				&.top {
					height: 20rem;

					> div {
						&.logo {
							height: 40%;
						}

						&.text {
							height: 60%;
						}
					}
				}

				&.bottom > div.left .image {
					height: 8rem;
				}
			}
		}
	}

	@media screen and (min-width: 1300px) {
		header > div {
			&.top {
				width: calc(100% - 30rem - $margin);

				> div {
					&.logo {
						width: 100%;
					}

					&.text {
						align-items: start;

						p {
							padding-left: $padding;
							text-align: start;
							width: 100%;
						}

						button {
							align-self: flex-end;
						}
					}
				}
			}

			&.bottom > div.left .image {
				width: 30rem;
				height: 30rem;
			}
		}

		@media screen and (max-height: 1100px) {
			header > div.bottom > div.left .image {
				height: 25rem;
			}
		}

		@media screen and (max-height: 1000px) {
			header > div.bottom > div.left .image {
				height: 20rem;
			}
		}
	}
</style>
