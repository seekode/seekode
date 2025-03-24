<script lang="ts">
	import { toogle, theme } from '$lib/stores/theme';

	interface Props {
		width?: string;
		height?: string;
		padding?: string;
	}

	const { width = '1.45rem', height = '1.45rem', padding = '0' } = $props();
</script>

<button
	class="theme-toggle text"
	id="theme-toggle"
	title="Switch theme clair & sombre"
	aria-label="clair"
	aria-live="polite"
	onclick={toogle}
	style={`width: ${width}; height: ${height}; padding: ${padding}`}
>
	<svg class="sun-and-moon" aria-hidden="true" width="100%" height="100%" viewBox="0 0 24 24">
		<mask class="moon" id="moon-mask">
			<rect x="0" y="0" width="100%" height="100%" fill="white" />
			<!-- <circle cx="26" cy="10" r="8" fill="black" /> -->
			<circle cx="23" cy="23" r="8" fill="black" />
		</mask>
		<circle
			class="sun"
			cx="12"
			cy="12"
			r="5"
			mask="url(#moon-mask)"
			fill="currentColor"
			stroke="currentColor"
			stroke-width="1.5"
		/>
		<g class="sun-beams" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
			<line x1="12" y1="1" x2="12" y2="3.5" />
			<line x1="12" y1="20.5" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.84" y2="5.84" />
			<line x1="18.16" y1="18.16" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3.5" y2="12" />
			<line x1="20.5" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.84" y2="18.16" />
			<line x1="18.16" y1="5.84" x2="19.78" y2="4.22" />
		</g>
	</svg>
</button>

<style lang="scss">
	button {
		padding: 0;
	}

	$transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

	.sun-and-moon {
		transition: $transition;
	}

	.sun {
		transition: $transition;
	}

	.sun-beams {
		transition: $transition;
	}

	#moon-mask circle {
		transition: $transition;
	}

	:global([data-theme='dark']) {
		.sun-and-moon {
			transform: rotate(-180deg);
		}

		.sun {
			r: 9px;
			transform: translate(0, 0);
		}

		.sun-beams {
			opacity: 0;
		}

		#moon-mask circle {
			transform: translateX(-7px);
			cx: 15px;
			cy: 15px;
		}
	}
</style>
