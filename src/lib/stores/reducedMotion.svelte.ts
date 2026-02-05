import { browser } from '$app/environment';

let reduced = $state(false);

if (browser) {
	const query = window.matchMedia('(prefers-reduced-motion: reduce)');
	reduced = query.matches;
	query.addEventListener('change', (e) => (reduced = e.matches));
}

export const reducedMotion = {
	get value() {
		return reduced;
	}
};
