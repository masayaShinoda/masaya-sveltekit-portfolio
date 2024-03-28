import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		prerender: {
			handleMissingId: 'warn',
			handleHttpError: 'warn',
		}
	}
};

export default config;
