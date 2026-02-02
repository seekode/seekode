import { browser } from '$app/environment';

export type ThemeMode = 'light' | 'dark';

let mode = $state<ThemeMode>('dark');

const applyTheme = () => {
	if (browser) {
		document.documentElement.setAttribute('data-theme', mode);
	}
};

const saveCookie = () => {
	if (browser) {
		document.cookie = `theme=${mode}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
	}
};

export const theme = {
	get mode() {
		return mode;
	},
	get isDark() {
		return mode === 'dark';
	},
	get isLight() {
		return mode === 'light';
	},
	init(initialMode: ThemeMode) {
		mode = initialMode;
		applyTheme();
	},
	set(newMode: ThemeMode) {
		mode = newMode;
		applyTheme();
		saveCookie();
	},
	toggle() {
		mode = mode === 'dark' ? 'light' : 'dark';
		applyTheme();
		saveCookie();
	}
};
