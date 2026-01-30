<script lang="ts">
	const devTechnos = [
		'HTML',
		'CSS',
		'JAVASCRIPT',
		'TYPESCRIPT',
		'REACT',
		'SVELTE',
		'ANGULAR',
		'FLUTTER',
		'REACT NATIVE',
		'PYTHON',
		'RUST',
		'C++',
		'JAVA',
		'KOTLIN',
		'NODE.JS',
		'PHP'
	];

	const aiTechnos = [
		'CLAUDE CODE',
		'CODEX',
		'GEMINI CLI',
		'MCP',
		'Cursor',
		'GITHUB COPILOT',
		'Blackbox',
		'Prompt engineering',
		'Automatisation',
		'A2A',
		'Tool use',
		'ANTHROPIC',
		'OPENAI',
		'GOOGLE AI',
		'DEEPSEEK'
	];
</script>

<div class="container">
	<div class="slide" aria-label="Technologies showcase">
		<div class="slide__track slide__track--left">
			{#each { length: 4 }, i (i)}
				{#each devTechnos as techno, y (y)}
					<div class="slide__track__item" aria-hidden={i > 0}>
						<span>{techno}</span>
					</div>
				{/each}
			{/each}
		</div>

		<div class="slide__track slide__track--right">
			{#each { length: 3 }, i (i)}
				{#each aiTechnos as techno, y (y)}
					<div class="slide__track__item" aria-hidden={i > 0}>
						<span>{techno}</span>
					</div>
				{/each}
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		padding: $spacing-20 0;

		.slide {
			width: 100%;
			overflow: hidden;
			background: transparent;
			padding: $spacing-8 0;
			display: flex;
			flex-direction: column;
			gap: $spacing-4;

			&__track {
				display: flex;
				width: max-content;
				animation-timing-function: linear;
				animation-iteration-count: infinite;

				&:hover {
					animation-play-state: paused;
				}

				&--left {
					animation: scrollLeft 60s linear infinite;
				}

				&--right {
					animation: scrollRight 60s linear infinite;
				}

				&__item {
					flex-shrink: 0;
					padding: 0 $spacing-8;
					display: flex;
					align-items: center;
					justify-content: center;

					span {
						@include montserrat;
						font-size: clamp(2rem, 5vw, 4rem);
						color: rgba(255, 255, 255, 0.08);
						text-transform: uppercase;
						letter-spacing: 0.05em;
						white-space: nowrap;
						user-select: none;

						:global([data-theme='light']) & {
							color: rgba(0, 0, 0, 0.08);
						}
					}
				}
			}
		}
	}

	@keyframes scrollLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-25%);
		}
	}

	@keyframes scrollRight {
		0% {
			transform: translateX(-25%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
