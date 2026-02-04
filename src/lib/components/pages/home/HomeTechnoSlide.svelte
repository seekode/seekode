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

	let leftTrack: HTMLDivElement | undefined = $state();
	let rightTrack: HTMLDivElement | undefined = $state();

	let speed = 1;
	let targetSpeed = 1;
	// Left goes from 0 to -25%, right goes from -25% to 0%
	let leftPos = 0;
	let rightPos = -25;

	$effect(() => {
		if (!leftTrack || !rightTrack) return;

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
		if (prefersReducedMotion) return;

		let lastTime = performance.now();
		let frame: number;

		function animate(now: number) {
			const dt = (now - lastTime) / 1000;
			lastTime = now;

			speed += (targetSpeed - speed) * 0.04;

			// 25% in 60s at speed=1
			const move = speed * (25 / 60) * dt;

			leftPos -= move;
			rightPos += move;

			if (leftPos <= -25) leftPos += 25;
			if (rightPos >= 0) rightPos -= 25;

			leftTrack!.style.transform = `translateX(${leftPos}%)`;
			rightTrack!.style.transform = `translateX(${rightPos}%)`;

			frame = requestAnimationFrame(animate);
		}

		frame = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(frame);
	});

	function onEnter() {
		targetSpeed = 0.15;
	}

	function onLeave() {
		targetSpeed = 1;
	}
</script>

<div class="container">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="slide"
		aria-label="Technologies showcase"
		onmouseenter={onEnter}
		onmouseleave={onLeave}
	>
		<div class="slide__track" bind:this={leftTrack}>
			{#each { length: 4 }, i (i)}
				{#each devTechnos as techno, y (y)}
					<div class="slide__track__item" aria-hidden={i > 0}>
						<span>{techno}</span>
					</div>
				{/each}
			{/each}
		</div>

		<div class="slide__track" bind:this={rightTrack} style="transform: translateX(-25%)">
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
		max-width: 100%;
		padding: $spacing-20 0;
		overflow: hidden;

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
				will-change: transform;

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
						transition:
							color $transition-slow $transition-timing,
							transform $transition-slow $transition-timing;

						:global([data-theme='light']) & {
							color: rgba(0, 0, 0, 0.08);
						}
					}

					&:hover span {
						color: rgba(255, 255, 255, 0.2);
						transform: scale(1.05);

						:global([data-theme='light']) & {
							color: rgba(0, 0, 0, 0.2);
						}
					}
				}
			}
		}
	}
</style>
