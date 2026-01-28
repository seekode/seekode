<script lang="ts">
	const devTechnos = [
		'HTML',
		'CSS',
		'JAVASCRIPT',
		'TYPESCRIPT',
		'SVELTE',
		'REACT',
		'VUE',
		'ANGULAR',
		'NODE.JS',
		'FLUTTER',
		'REACT NATIVE',
		'PYTHON',
		'JAVA',
		'PHP',
		'RUBY',
		'GO',
		'RUST',
		'C++',
		'SWIFT',
		'KOTLIN'
	];

	const aiTechnos = [
		'CLAUDE CODE',
		'CODEX',
		'GEMINI CLI',
		'GITHUB COPILOT',
		'CHATGPT',
		'CURSOR',
		'TABNINE',
		'CODEIUM',
		'AMAZON Q',
		'MISTRAL AI',
		'LLAMA',
		'ANTHROPIC',
		'OPENAI',
		'GOOGLE AI',
		'DEEPSEEK'
	];
</script>

<div class="slide" aria-label="Technologies showcase">
	<div class="slide__track slide__track--left">
		{#each { length: 3 }, i (i)}
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

<style lang="scss">
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
				}
			}
		}
	}

	@keyframes scrollLeft {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-33.333%);
		}
	}

	@keyframes scrollRight {
		0% {
			transform: translateX(-33.333%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
