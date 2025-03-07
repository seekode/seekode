import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [sveltekit(), Icons({ autoInstall: true, compiler: 'svelte' })]
	// server: {
	// 	allowedHosts: ['b349-2001-861-5c84-e750-9907-8631-1603-af45.ngrok-free.app']
	// }
});
