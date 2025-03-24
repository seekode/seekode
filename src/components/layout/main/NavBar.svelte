<script lang="ts">
	import IconLanguage from '~icons/ion/language-outline';
	import FlagFr from '~icons/flag/fr-4x3';
	import FlagSh from '~icons/flag/sh-4x3';
	import { i18n, l } from '$lib/i18n';
	import { page } from '$app/state';
	import type { AvailableLanguageTag } from '$lib/paraglide/runtime';
	import { goto } from '$app/navigation';
	import LogoInText from '$components/ui/LogoInText.svelte';
	import { fade } from 'svelte/transition';
	import ToogleTheme from '$components/ui/ToogleTheme.svelte';

	interface Props {
		activeLink: string;
	}

	const { activeLink }: Props = $props();

	let languageOpen = $state(false);

	let menuOpen = $state(false);

	const switchToLanguage = (newLanguage: AvailableLanguageTag) => {
		const canonicalPath = i18n.route(page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
		languageOpen = false;
		menuOpen = false;
	};

	const handleLinkClick = () => {
		languageOpen = false;
		menuOpen = false;
	};
</script>

<nav>
	<div class="logo">
		<LogoInText />
	</div>
	<div class="nav" class:nav--active={menuOpen}>
		<div>
			<a class:active={activeLink === '/'} href="/" onclick={handleLinkClick}>{l.nav_home()}</a>
			<a
				class:active={activeLink === '/creation-of-website'}
				href="/creation-of-website"
				onclick={handleLinkClick}
			>
				{l.nav_creation_of_website()}
			</a>
			<a class:active={activeLink === '/training'} href="/training" onclick={handleLinkClick}
				>{l.nav_training()}</a
			>
			<a
				class:active={activeLink === '/our-creations'}
				href="/our-creations"
				onclick={handleLinkClick}
			>
				{l.nav_our_creations()}
			</a>
		</div>
		<button
			aria-label="Toggle menu"
			onclick={() => {
				languageOpen = false;
				menuOpen = !menuOpen;
			}}
			class:active={menuOpen}
		>
			<div></div>
		</button>
	</div>
	<div class="settings" class:settings--active={languageOpen}>
		<div>
			<div class="settings__actions">
				<button
					aria-label="Change language"
					class:active={languageOpen}
					onclick={() => {
						menuOpen = false;
						languageOpen = !languageOpen;
					}}
				>
					<IconLanguage />
				</button>
				<ToogleTheme width="3.5rem" height="100%" padding="0 1rem" />
			</div>
			<div class="settings__language">
				<button class="text" onclick={() => switchToLanguage('fr')}>
					<div class="icon">
						<FlagFr />
					</div>
					Français
				</button>
				<button class="text" onclick={() => switchToLanguage('en')}>
					<div class="icon">
						<FlagSh />
					</div>
					English
				</button>
			</div>
		</div>
	</div>
</nav>

{#if menuOpen || languageOpen}
	<button
		class="closeAll"
		aria-label="Close all menu"
		onclick={() => {
			menuOpen = false;
			languageOpen = false;
		}}
		transition:fade={{ duration: 300 }}
	></button>
{/if}

<style lang="scss">
	nav {
		width: 1920px;
		height: 0;
		max-width: 100%;
		position: fixed;
		z-index: 2;
		top: $margin;
		left: 50%;
		transform: translateX(-50%);
		font-weight: bold;

		> div {
			@include backdrop;
			transition: $transition;

			height: 4rem;
			padding: 0rem 2rem;
			position: absolute;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: $padding;
			border-radius: 1.5rem;
		}

		.logo {
			padding: 1.25rem $padding;
			left: $margin;
		}

		.nav {
			left: 50%;
			transform: translateX(-50%);

			> div {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: $padding;

				a {
					position: relative;

					&::before {
						content: '';
						width: 1.5rem;
						height: 0.2rem;
						position: absolute;
						z-index: -1;
						top: calc(100% - 0.4rem);
						left: 50%;
						transform: translateX(-50%);
						border-radius: 5rem;
						opacity: 0;
						background: $primary;
					}

					&.active::before {
						top: calc(100% + 0.13rem);
						opacity: 1;
					}
				}
			}

			button {
				display: none;
				width: 4rem;
				height: 4rem;
				border: none;
				position: absolute;
				bottom: 0;
				right: 0;
				background: none;

				div {
					width: 1.5rem;
					height: 3px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					border-radius: 5rem;
					background: $primary;
					transition: $transition;

					&::before,
					&::after {
						content: '';
						width: 100%;
						height: 100%;
						position: absolute;
						left: 0;
						border-radius: 5rem;
						background: $primary;
						transition: $transition;
					}

					&::before {
						bottom: 200%;
					}

					&::after {
						top: 200%;
					}
				}

				&.active {
					div {
						transform: translate(-50%, -50%) rotate(45deg);

						&::before {
							transform: rotate(90deg);
							bottom: 0;
						}

						&::after {
							top: 0;
						}
					}
				}
			}
		}

		.settings {
			height: auto;
			padding: 0rem 1rem;
			min-height: 4rem;
			min-height: 4rem;
			max-height: 4rem;
			right: $margin;
			display: block;
			overflow: hidden;
			transition: $transition;

			> div {
				display: flex;
				flex-direction: column;

				.settings__actions {
					height: 4rem;
					display: flex;
					justify-content: center;
					align-items: center;

					button {
						height: 100%;
						padding: 0 1rem;
						font-size: 1.25rem;
						display: flex;
						align-items: center;
						justify-content: center;
						background: none;
						border: none;
						color: $primary;

						:global(*) {
							transition: $transition;
						}

						&.active :global(*) {
							color: $primary;
						}
					}
				}

				.settings__language {
					margin-bottom: 0.5rem;
					display: flex;
					flex-direction: column;
					align-items: start;
					padding-left: 1rem;

					button {
						align-items: start;
						font-weight: bold;
						padding: 0.75rem 0;

						.icon {
							height: 16px;
							border-radius: 0.2rem;
							overflow: hidden;
						}
					}
				}
			}

			&--active {
				max-height: 12rem;
				padding: 0 2rem;
			}
		}
	}

	.closeAll {
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		border: none;
		background: transparent;
		background: rgba(0, 0, 0, 0.188);
	}

	@media screen and (max-width: 1300px) {
		nav {
			.logo {
				display: none;
			}

			.nav {
				left: 2rem;
				transform: translateX(0);
			}
		}
	}

	@media screen and (max-width: 800px) {
		nav {
			top: auto;
			bottom: $margin;

			.nav {
				width: 0;
				top: auto;
				bottom: 0;
				right: $margin;
				left: auto;
				transform: translateX(0);
				overflow: hidden;

				&--active {
					width: calc(100vw - $margin * 6);
					right: calc($margin * 3);
					height: 15rem;
					bottom: 5rem;

					-webkit-backdrop-filter: blur(20px);
					backdrop-filter: blur(20px);
				}

				> div {
					width: calc(100vw - $margin * 6);
					height: 15rem;
					position: absolute;
					bottom: 0;
					right: 0;
					flex-direction: column;
				}

				button {
					display: block;
				}
			}

			.settings {
				top: auto;
				bottom: 0;
				right: 50%;
				transform: translateX(50%);
				display: flex;
				flex-direction: column;
				justify-content: end;

				> div {
					flex-direction: column-reverse;
				}

				&--active {
					bottom: calc(4rem + $margin);
				}
			}
		}

		.closeAll {
			display: block;
		}
	}

	@media screen and (max-width: 350px) {
		nav .settings {
			right: auto;
			left: $margin;
			transform: translateX(0);

			&--active {
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
</style>
