import { writable } from 'svelte/store';
export const theme = writable<'light' | 'dark'>('light');

// Initialize theme from localStorage before any rendering
if (typeof window !== 'undefined') {
  const storedTheme = localStorage.getItem('theme');
  theme.set(storedTheme === 'dark' ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', storedTheme === 'dark' ? 'dark' : 'light');
}

export const toogle = () => {
	theme.update((value) => {
		const newValue = value === 'light' ? 'dark' : 'light';

		localStorage.setItem('theme', newValue);
		return newValue;
	});
};
