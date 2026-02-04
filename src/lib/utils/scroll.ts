export type ScrollDirection = 'up' | 'down';

/**
 * Creates an IntersectionObserver that triggers callbacks when an element
 * enters or leaves the viewport. Handles prefers-reduced-motion automatically.
 *
 * onShow receives the scroll direction so components can decide
 * whether to animate (down) or show instantly (up).
 *
 * Returns a cleanup function compatible with Svelte 5's $effect.
 */
export function createScrollObserver(
	element: Element,
	onShow: (direction: ScrollDirection) => void,
	onHide: () => void
): () => void {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReducedMotion) {
		onShow('down');
		return () => {};
	}

	// Show observer: triggers when element enters the top 85% of the viewport.
	// rootMargin shrinks the observation zone by 15% from the bottom,
	// so the trigger point is 15% of the *screen height*, not 15% of the element.
	const showObserver = new IntersectionObserver(
		(entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				const isScrollingUp = entry.boundingClientRect.top < 0;
				onShow(isScrollingUp ? 'up' : 'down');
			}
		},
		{ rootMargin: '0px 0px -15% 0px', threshold: 0 }
	);

	// Hide observer: triggers when element fully leaves the real viewport.
	// No rootMargin so it uses the actual screen edges.
	const hideObserver = new IntersectionObserver(
		(entries) => {
			const entry = entries[0];
			if (!entry.isIntersecting) {
				onHide();
			}
		},
		{ threshold: 0 }
	);

	showObserver.observe(element);
	hideObserver.observe(element);

	return () => {
		showObserver.disconnect();
		hideObserver.disconnect();
	};
}

/**
 * Svelte action for scroll-triggered reveal animations.
 *
 * Usage: <div use:reveal> or <div use:reveal={{ animation: 'land' }}>
 *
 * Animations:
 * - 'fade' (default): simple opacity fade
 * - 'land': scale + translateY "landing" effect
 * - 'landSlow': same as land but slower and more pronounced (for decorative elements)
 */
export type RevealAnimation = 'fade' | 'land' | 'landSlow' | 'grow';

interface RevealOptions {
	animation?: RevealAnimation;
	/** When > 0, animates each direct child independently with this delay (ms) between them. */
	stagger?: number;
}

export function reveal(
	node: HTMLElement,
	options: RevealOptions = {}
): { update: (options: RevealOptions) => void; destroy: () => void } {
	const animation = options.animation ?? 'fade';
	const stagger = options.stagger ?? 0;

	if (stagger > 0) {
		// Stagger mode: each direct child gets its own delayed animation
		const children = Array.from(node.children) as HTMLElement[];
		children.forEach((child) => child.classList.add('reveal-hidden'));

		const cleanup = createScrollObserver(
			node,
			(direction) => {
				children.forEach((child, i) => {
					if (direction === 'down') {
						child.style.animationDelay = `${i * stagger}ms`;
						child.style.animationFillMode = 'both';
						child.classList.remove('reveal-hidden');
						child.classList.add(`reveal-${animation}`);
					} else {
						child.classList.remove('reveal-hidden');
						child.classList.add('reveal-instant');
					}
				});
			},
			() => {
				children.forEach((child) => {
					child.classList.remove(`reveal-${animation}`, 'reveal-instant');
					child.style.animationDelay = '';
					child.style.animationFillMode = '';
					child.classList.add('reveal-hidden');
				});
			}
		);

		return {
			update() {},
			destroy: cleanup
		};
	}

	// Normal mode: animate the node itself
	node.classList.add('reveal-hidden');

	const cleanup = createScrollObserver(
		node,
		(direction) => {
			node.classList.remove('reveal-hidden');
			if (direction === 'down') {
				node.classList.add(`reveal-${animation}`);
			} else {
				node.classList.add('reveal-instant');
			}
		},
		() => {
			node.classList.remove(`reveal-${animation}`, 'reveal-instant');
			node.classList.add('reveal-hidden');
		}
	);

	return {
		update() {
			node.classList.remove(`reveal-${animation}`);
		},
		destroy: cleanup
	};
}
