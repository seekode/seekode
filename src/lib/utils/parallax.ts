interface ParallaxOptions {
	/** Speed factor. Positive = drifts up on scroll down (default: 0.1) */
	speed?: number;
}

/**
 * Svelte action for subtle scroll-driven parallax.
 *
 * Usage: <div use:parallax> or <div use:parallax={{ speed: 0.06 }}>
 *
 * Uses the `translate` CSS property (independent from `transform`)
 * so it never conflicts with animations or use:tilt.
 * Skips on prefers-reduced-motion.
 */
export function parallax(
	node: HTMLElement,
	options: ParallaxOptions = {}
): { destroy: () => void } {
	const speed = options.speed ?? 0.1;

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return { destroy() {} };
	}

	let isVisible = false;
	let ticking = false;

	node.style.willChange = 'translate';

	const observer = new IntersectionObserver(
		([entry]) => {
			isVisible = entry.isIntersecting;
		},
		{ rootMargin: '100px 0px' }
	);
	observer.observe(node);

	function update() {
		if (!isVisible) {
			ticking = false;
			return;
		}

		const rect = node.getBoundingClientRect();
		const viewportHeight = window.innerHeight;
		// 0 at viewport center, negative above, positive below
		const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;

		node.style.translate = `0 ${progress * speed * -100}px`;
		ticking = false;
	}

	function onScroll() {
		if (!ticking && isVisible) {
			requestAnimationFrame(update);
			ticking = true;
		}
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	update();

	return {
		destroy() {
			observer.disconnect();
			window.removeEventListener('scroll', onScroll);
			node.style.willChange = '';
			node.style.translate = '';
		}
	};
}
