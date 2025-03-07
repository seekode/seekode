<script lang="ts">
	import IconSun from '~icons/solar/sun-2-linear';
	import IconLanguage from '~icons/ion/language-outline';
	import { toogle } from '$lib/stores/theme';

	interface Props {
		activeLink: string;
	}

	const { activeLink }: Props = $props();
</script>

<nav>
	<div class="logo">
		<img src="/logo_text.svg" alt="logo" />
	</div>
	<div class="nav">
		<a class:active={activeLink === '/'} href="/">Accueil</a>
		<a class:active={activeLink === '/creation-of-website'} href="/creation-of-website">
			Création de site web
		</a>
		<a class:active={activeLink === '/training'} href="/training">Formation</a>
		<a class:active={activeLink === '/our-creations'} href="/our-creations">Nos créations</a>
	</div>
	<div class="settings">
		<IconLanguage />
		<IconSun onclick={toogle} />
	</div>
</nav>

<style lang="scss">
	nav {
		width: 100%;
		height: 4rem;
		max-width: 1600px;
		position: fixed;
		z-index: 1;
		top: $spacing;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1.5rem;
		font-weight: bold;

		> div {
			@include backdrop;

			height: 100%;
			padding: 0rem 2rem;
			position: absolute;
			top: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;
			border-radius: 1.5rem;
		}

		.logo {
			left: 2rem;
		}

		.nav {
			left: 50%;
			transform: translateX(-50%);

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
					transition: 0.3s ease-in;
				}

				&.active::before {
					top: calc(100% + 0.13rem);
					opacity: 1;
				}
			}
		}

		.settings {
			right: 2rem;
		}
	}
</style>
