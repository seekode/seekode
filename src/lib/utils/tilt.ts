interface TiltOptions {
	/** Maximum rotation in degrees (default: 8) */
	maxRotation?: number;
	/** Perspective distance in px (default: 800) */
	perspective?: number;
	/** Show a light glare that follows the cursor (default: true) */
	glare?: boolean;
	/** Lerp speed 0–1, higher = more responsive (default: 0.15) */
	speed?: number;
}

/**
 * Svelte action for 3D tilt on hover with optional glare.
 *
 * Usage: <div use:tilt> or <div use:tilt={{ maxRotation: 10, glare: false }}>
 *
 * Skips automatically on touch devices and reduced-motion.
 * Uses requestAnimationFrame + lerp for buttery smooth movement
 * without any CSS transition conflict.
 */
export function tilt(
	node: HTMLElement,
	options: TiltOptions = {}
): { destroy: () => void } {
	const max = options.maxRotation ?? 8;
	const perspective = options.perspective ?? 800;
	const glare = options.glare ?? true;
	const speed = options.speed ?? 0.15;

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const hasHover = window.matchMedia('(hover: hover)').matches;
	if (prefersReducedMotion || !hasHover) {
		return { destroy() {} };
	}

	let targetRX = 0;
	let targetRY = 0;
	let currentRX = 0;
	let currentRY = 0;
	let rafId: number | null = null;
	let isHovering = false;
	let glareX = 50;
	let glareY = 50;

	node.style.willChange = 'transform';

	function glareColor(): string {
		const isLight = document.documentElement.getAttribute('data-theme') === 'light';
		return isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)';
	}

	// Glare overlay
	let glareEl: HTMLDivElement | null = null;
	if (glare) {
		glareEl = document.createElement('div');
		Object.assign(glareEl.style, {
			position: 'absolute',
			inset: '0',
			borderRadius: 'inherit',
			pointerEvents: 'none',
			opacity: '0',
			transition: 'opacity 0.3s ease',
			background: `radial-gradient(circle at 50% 50%, ${glareColor()}, transparent 60%)`,
			zIndex: '1'
		});
		const pos = getComputedStyle(node).position;
		if (pos === 'static') node.style.position = 'relative';
		node.appendChild(glareEl);
	}

	function animate() {
		const dx = targetRX - currentRX;
		const dy = targetRY - currentRY;

		currentRX += dx * speed;
		currentRY += dy * speed;

		node.style.transform = `perspective(${perspective}px) rotateX(${currentRX}deg) rotateY(${currentRY}deg)`;

		if (glareEl) {
			glareEl.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor()}, transparent 60%)`;
		}

		if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
			rafId = requestAnimationFrame(animate);
		} else {
			currentRX = targetRX;
			currentRY = targetRY;
			if (targetRX === 0 && targetRY === 0) node.style.transform = '';
			rafId = null;
		}
	}

	function startLoop() {
		if (!rafId) rafId = requestAnimationFrame(animate);
	}

	function onMouseMove(e: MouseEvent) {
		const rect = node.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width;
		const y = (e.clientY - rect.top) / rect.height;

		targetRX = (0.5 - y) * max;
		targetRY = (x - 0.5) * max;
		glareX = x * 100;
		glareY = y * 100;

		if (!isHovering) {
			isHovering = true;
			if (glareEl) glareEl.style.opacity = '1';
		}
		startLoop();
	}

	function onMouseLeave() {
		isHovering = false;
		targetRX = 0;
		targetRY = 0;
		if (glareEl) glareEl.style.opacity = '0';
		startLoop();
	}

	node.addEventListener('mousemove', onMouseMove);
	node.addEventListener('mouseleave', onMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mousemove', onMouseMove);
			node.removeEventListener('mouseleave', onMouseLeave);
			if (rafId) cancelAnimationFrame(rafId);
			if (glareEl) glareEl.remove();
			node.style.willChange = '';
			node.style.transform = '';
		}
	};
}
