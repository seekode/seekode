<script lang="ts">
	import { Languages, Sun, Moon } from '@lucide/svelte';
	import { locales, getLocale, setLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { calendlyModal } from '$lib/stores/calendly.svelte';
	import { theme } from '$lib/stores/theme.svelte';
	import LogoText from '$lib/components/icons/LogoText.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let isLanguageOpen = $state(false);
	let isMenuOpen = $state(false);

	const languageNames: Record<string, string> = {
		fr: 'Français',
		en: 'English'
	};

	const handleClickOutside = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		if (isLanguageOpen && !target.closest('.language-switcher')) {
			isLanguageOpen = false;
			return;
		}
		if (!target.closest('.action') && !target.closest('.links') && !target.closest('.menu')) {
			isMenuOpen = false;
		}
	};

	$effect(() => {
		if (isLanguageOpen || isMenuOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<!-- Mobile backdrop overlay -->
<div class="mobile-backdrop" class:mobile-backdrop--active={isMenuOpen}></div>

<nav id="nav" class:nav--expanded={isMenuOpen}>
	<div class="brand">
		<LogoText />
	</div>
	<ul class="links" class:links--open={isMenuOpen}>
		<li>{m.nav_seelearn()}</li>
		<!-- <li>{m.nav_a_project()}</li> -->
		<!-- <li>Seekode</li> -->
		<!-- <li>{m.nav_our_projects()}</li> -->
	</ul>
	<div class="action" class:action--open={isMenuOpen}>
		<div class="action__line">
			<Button
				type="muted"
				square
				thin
				onclick={() => theme.toggle()}
				ariaLabel={theme.isDark ? m.nav_switch_light_mode() : m.nav_switch_dark_mode()}
			>
				<span class="theme-wrapper" class:dark={theme.isDark}>
					<Sun size="20" class="sun-icon" />
					<Moon size="20" class="moon-icon" />
				</span>
			</Button>
			<div class="language-switcher">
				<Button
					classes="language-switcher__trigger"
					type="muted"
					thin
					onclick={() => (isLanguageOpen = !isLanguageOpen)}
					ariaExpanded={isLanguageOpen}
					ariaHaspopup="true"
				>
					<Languages size={20} />
					<span>{getLocale().toUpperCase()}</span>
				</Button>
				<div class="language-switcher__dropdown" class:open={isLanguageOpen}>
					{#each locales as locale (locale)}
						<button
							class:active={locale === getLocale()}
							onclick={() => {
								setLocale(locale);
								isLanguageOpen = false;
							}}
						>
							{languageNames[locale]}
						</button>
					{/each}
				</div>
			</div>
		</div>
		<Button classes="formation" type="secondary" rounded thin onclick={() => calendlyModal.open()}>
			{m.nav_access_training()}
		</Button>
	</div>
	<div class="menu">
		<Button
			type="muted"
			square
			thin
			onclick={() => (isMenuOpen = !isMenuOpen)}
			ariaExpanded={isMenuOpen}
		>
			<div class="menu__line" class:menu__line--open={isMenuOpen}></div>
		</Button>
	</div>
</nav>

<style lang="scss">
	.mobile-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		backdrop-filter: blur(10px);
		z-index: 100;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		transition:
			opacity $transition-slow $transition-timing,
			visibility $transition-slow $transition-timing;

		@include xl {
			display: none;
		}

		&--active {
			opacity: 1;
			visibility: visible;
			pointer-events: auto;
		}
	}

	nav {
		@include glass-effect;
		// Mobile-first: compact pill
		width: 10rem;
		height: 3rem;
		margin: 0;
		padding: 0 $spacing-3;
		position: fixed;
		z-index: 101;
		top: auto;
		bottom: calc($spacing-4 + env(safe-area-inset-bottom, 0px));
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: $radius-full;
		transition:
			width $transition-slow $transition-timing,
			height $transition-slow $transition-timing,
			border-radius $transition-slow $transition-timing,
			padding $transition-slow $transition-timing,
			transform $transition-slow $transition-timing;

		@include sm {
			@include layout;
			width: calc(100% - $spacing-4 * 2);
			height: 6rem;
			padding: 0 var(--nav-padding);
			border-radius: $radius-lg;
			top: $spacing-4;
			bottom: auto;
			transition: none;
		}

		// Menu open: pill morphs to full bar (mobile only)
		&.nav--expanded {
			transform: translateX(-50%) scale(1.2);

			@include sm {
				transform: translateX(-50%) scale(1);
			}
		}

		> div {
			padding-left: $spacing-4;
			gap: $spacing-4;
			display: flex;
			align-items: center;

			@include xl() {
				flex: 1;
			}
		}

		.brand {
			padding-left: $spacing-2;

			@include sm {
				padding-left: $spacing-4;
			}

			:global(svg) {
				height: 18px;
				width: auto;

				@include sm {
					height: auto;
					width: 167px;
				}
			}
		}

		.links {
			@include glass-effect;
			width: 15.3rem;
			padding: $spacing-4;
			position: absolute;
			bottom: calc(100% + 8rem + $spacing-4 * 2);
			right: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: $spacing-8;
			font-size: $font-size-sm;
			border-radius: $radius-lg;
			transition:
				opacity $transition-slow $transition-timing,
				visibility $transition-slow $transition-timing,
				transform $transition-slow $transition-timing;
			transition-delay: calc($transition-slow / 4);
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			transform: translateX(50%);

			@include sm {
				top: calc(100% + 8rem + $spacing-4 * 2);
				bottom: auto;
				right: 0;
				transform: translateX($spacing-4);
			}

			@include md {
				width: auto;
				padding: auto;
				position: initial;
				top: auto;
				left: auto;
				flex-direction: row;
				background: none;
				backdrop-filter: none;
				box-shadow: none;
				opacity: 1;
				visibility: visible;
				pointer-events: auto;
				transform: translate(0);
			}

			@include lg {
				gap: $spacing-12;
			}

			&--open {
				opacity: 1;
				visibility: visible;
				pointer-events: auto;
				transition-delay: 100ms;

				@include sm {
					transition-delay: calc($transition-slow / 4);
					transform: translate(0);
				}
			}
		}

		.action {
			@include glass-effect;
			width: 15.3rem;
			height: 8rem;
			padding: $spacing-4;
			position: absolute;
			bottom: calc(100% + $spacing-4);
			right: 50%;
			flex-direction: column;
			justify-content: flex-end;
			border-radius: $radius-lg;
			transition:
				opacity $transition-slow $transition-timing,
				visibility $transition-slow $transition-timing,
				transform $transition-slow $transition-timing;
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			transform: translateX(50%);

			@include sm {
				top: calc(100% + $spacing-4);
				bottom: auto;
				right: 0;
				transform: translateX($spacing-4);
			}

			@include md {
				width: auto;
				height: auto;
			}

			@include xl {
				padding-right: $spacing-4;
				display: flex;
				flex-direction: row;
				position: relative;
				top: auto;
				right: auto;
				background: none;
				backdrop-filter: none;
				box-shadow: none;
				opacity: 1;
				visibility: visible;
				pointer-events: auto;
				transform: translate(0);
			}

			&--open {
				opacity: 1;
				visibility: visible;
				pointer-events: auto;
				transition-delay: 100ms;

				@include sm {
					transition-delay: 0ms;
					transform: translate(0);
				}
			}

			&__line {
				display: flex;
				gap: $spacing-4;

				.theme-wrapper {
					position: relative;
					width: 20px;
					height: 20px;

					:global(.sun-icon),
					:global(.moon-icon) {
						position: absolute;
						top: 0;
						left: 0;
						transition: $transition-slow $transition-timing;
					}

					:global(.sun-icon) {
						opacity: 1;
						transform: rotate(0deg) scale(1);
					}

					:global(.moon-icon) {
						opacity: 0;
						transform: rotate(-90deg) scale(0.5);
					}

					&.dark {
						:global(.sun-icon) {
							opacity: 0;
							transform: rotate(90deg) scale(0.5);
						}

						:global(.moon-icon) {
							opacity: 1;
							transform: rotate(0deg) scale(1);
						}
					}
				}

				.language-switcher {
					position: relative;

					:global(.language-switcher__trigger) {
						padding: 0 $spacing-3;
					}

					&__dropdown {
						position: absolute;
						top: calc(100% + $spacing-2);
						right: 0;
						min-width: 150px;
						background-color: var(--bg-secondary);
						border: 1px solid var(--border-color);
						border-radius: $radius-md;
						box-shadow: $shadow-lg;
						z-index: $z-dropdown;
						padding: $spacing-2;
						display: flex;
						flex-direction: column;
						gap: $spacing-1;

						// Animation
						opacity: 0;
						visibility: hidden;
						transform: translateY(-8px) scale(0.95);
						transform-origin: top right;
						transition:
							opacity $transition-fast $transition-timing,
							transform $transition-fast $transition-timing,
							visibility $transition-fast;

						&.open {
							opacity: 1;
							visibility: visible;
							transform: translateY(0) scale(1);
						}

						button {
							display: flex;
							align-items: center;
							gap: $spacing-3;
							width: 100%;
							padding: $spacing-2 $spacing-3;
							background: transparent;
							border: none;
							border-radius: $radius-sm;
							color: var(--text-secondary);
							font-size: $font-size-sm;
							font-weight: $font-weight-light;
							text-align: left;
							cursor: pointer;
							transition:
								background-color $transition-fast $transition-timing,
								color $transition-fast $transition-timing;

							&:hover {
								background-color: var(--bg-tertiary);
								color: var(--text-primary);
							}

							&.active {
								background-color: rgba($color-primary, 0.15);
								color: $color-primary;
								font-weight: $font-weight-medium;
							}
						}
					}
				}
			}
		}

		.menu {
			justify-content: flex-end;
			padding-right: $spacing-2;

			@include sm {
				padding-right: $spacing-4;
			}

			@include xl {
				display: none;
			}

			&__line {
				width: 50%;
				height: 0.1rem;
				position: relative;
				background: var(--text-primary);
				transition: $transition-slow $transition-timing;

				&::after,
				&::before {
					content: '';
					width: 100%;
					height: 100%;
					position: absolute;
					background: var(--text-primary);
					transition: $transition-slow $transition-timing;
					transition: $transition-slow $transition-timing;
				}

				&::after {
					top: 400%;
					left: 0;
				}

				&::before {
					bottom: 400%;
					left: 0;
				}

				&--open {
					transform: rotate(45deg);

					&::after {
						top: 0%;
						left: 0;
					}

					&::before {
						bottom: 0;
						left: 0;
						transform: rotate(-90deg);
					}
				}
			}

			:global(button) {
				@media (max-width: $breakpoint-sm) {
					border: none;
					background-color: transparent;
				}
			}

			:global(button:hover) {
				@media (max-width: $breakpoint-sm) {
					border: none;
					background-color: transparent;
				}
			}

			:global(button[aria-expanded='true']) {
				@media (max-width: $breakpoint-sm) {
					border: none;
					background-color: transparent;
				}
			}
		}
	}
</style>
