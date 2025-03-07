import { writable } from 'svelte/store';

export const theme = writable<'light' | 'dark'>('light', (set) => {
	const theme = localStorage.getItem('theme');
	set(theme == 'dark' ? 'dark' : 'light');
});

export const toogle = () => {
	theme.update((value) => {
		const newValue = value === 'light' ? 'dark' : 'light';

		localStorage.setItem('theme', newValue);
		return newValue;
	});
};
