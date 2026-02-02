import { browser } from '$app/environment';

export type AudienceMode = 'dev' | 'vibe';

let mode = $state<AudienceMode>('dev');

const saveCookie = () => {
	if (browser) {
		document.cookie = `audience=${mode}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
	}
};

export const audience = {
	get mode() {
		return mode;
	},
	get isDev() {
		return mode === 'dev';
	},
	get isVibe() {
		return mode === 'vibe';
	},
	init(initialMode: AudienceMode) {
		mode = initialMode;
	},
	set(newMode: AudienceMode) {
		mode = newMode;
		saveCookie();
	},
	toggle() {
		mode = mode === 'dev' ? 'vibe' : 'dev';
		saveCookie();
	},
	text(dev: () => string, vibe: () => string) {
		return mode === 'dev' ? dev() : vibe();
	}
};
