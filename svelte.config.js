import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: 'warn',
			handleHttpError: 'warn',
		}
	}
};

export default config; 