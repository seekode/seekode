import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({ autoInstall: true, compiler: 'svelte' }),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],
	server: {
		allowedHosts: ['9f3c-176-191-201-71.ngrok-free.app']
	}
});
