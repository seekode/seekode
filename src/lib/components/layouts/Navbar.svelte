<script lang="ts">
	import { Languages, Sun, Moon } from '@lucide/svelte';
	import { locales, getLocale, setLocale } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';

	let isOpen = $state(false);
	let theme = $state<'light' | 'dark'>('dark');

	const languageNames: Record<string, string> = {
		fr: 'Français',
		en: 'English'
	};

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', theme);
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.language-switcher')) {
			isOpen = false;
		}
	}

	$effect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<nav>
	<div>
		<img src="assets/images/logo/text.svg" alt="Logo text" />
	</div>
	<ul>
		<li>Seelearn</li>
		<li>{m.nav_a_project()}</li>
		<li>Seekode</li>
		<li>Nos projets</li>
	</ul>
	<div>
		<button
			class="theme-toggle"
			onclick={toggleTheme}
			aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			<span class="icon-wrapper" class:dark={theme === 'dark'}>
				<Sun size={20} class="sun-icon" />
				<Moon size={20} class="moon-icon" />
			</span>
		</button>
		<div class="language-switcher">
			<button
				class="language-trigger"
				onclick={() => (isOpen = !isOpen)}
				aria-expanded={isOpen}
				aria-haspopup="true"
			>
				<Languages size={20} />
				<span>{getLocale().toUpperCase()}</span>
			</button>
			<div class="language-dropdown" class:open={isOpen}>
				{#each locales as locale (locale)}
					<button
						class:active={locale === getLocale()}
						onclick={() => {
							setLocale(locale);
							isOpen = false;
						}}
					>
						{languageNames[locale]}
					</button>
				{/each}
			</div>
		</div>
		<button>Accéder a la formation</button>
	</div>
</nav>

<style lang="scss">
	nav {
		@include glass-effect;
		width: calc(100% - 2rem);
		height: 5rem;
		position: absolute;
		top: $spacing-4;
		left: $spacing-4;
		display: flex;
		border-radius: $radius-lg;

		> div {
			flex: 1;
			padding-left: $spacing-4;
			gap: $spacing-4;
			display: flex;
			align-items: center;

			&:last-child {
				justify-content: flex-end;
				padding-right: $spacing-4;
			}
		}

		> ul {
			display: flex;
			align-items: center;
			gap: $spacing-4;
		}
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		padding: 0;
		border: 1px solid var(--text-muted);
		border-radius: $radius-md;
		color: inherit;
		cursor: pointer;
		transition:
			background-color $transition-fast $transition-timing,
			border-color $transition-fast $transition-timing;

		&:hover {
			background-color: rgba(255, 255, 255, 0.08);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	.icon-wrapper {
		position: relative;
		width: 20px;
		height: 20px;

		:global(.sun-icon),
		:global(.moon-icon) {
			position: absolute;
			top: 0;
			left: 0;
			transition:
				opacity $transition-slow $transition-timing,
				transform $transition-slow $transition-timing;
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
	}

	.language-trigger {
		display: flex;
		align-items: center;
		gap: $spacing-2;
		padding: $spacing-2 $spacing-3;
		background: transparent;
		border: 1px solid var(--text-muted);
		border-radius: $radius-md;
		color: inherit;
		cursor: pointer;
		transition:
			background-color $transition-fast $transition-timing,
			border-color $transition-fast $transition-timing;

		&:hover {
			background-color: rgba(255, 255, 255, 0.08);
			border-color: rgba(255, 255, 255, 0.25);
		}

		&[aria-expanded='true'] {
			background-color: rgba(255, 255, 255, 0.1);
			border-color: rgba($color-primary, 0.5);
		}

		span {
			font-size: $font-size-sm;
			font-weight: $font-weight-medium;
		}
	}

	.language-dropdown {
		position: absolute;
		top: calc(100% + $spacing-2);
		right: 0;
		min-width: 150px;
		background-color: $dark-bg-secondary;
		border: 1px solid rgba(255, 255, 255, 0.1);
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
			color: $dark-text-secondary;
			font-size: $font-size-sm;
			font-weight: $font-weight-normal;
			text-align: left;
			cursor: pointer;
			transition:
				background-color $transition-fast $transition-timing,
				color $transition-fast $transition-timing;

			&:hover {
				background-color: rgba(255, 255, 255, 0.08);
				color: $dark-text-primary;
			}

			&.active {
				background-color: rgba($color-primary, 0.15);
				color: $color-primary;
				font-weight: $font-weight-medium;
			}
		}
	}
</style>
