import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/masaya-sveltekit-portfolio' : '',
			assets: process.env.NODE_ENV === 'production' 
			  ? 'https://cdn.jsdelivr.net/gh/masayashinoda/masaya-sveltekit-portfolio@dev-built'
			  : ''
		},
		prerender: {
			handleMissingId: 'warn',
			handleHttpError: 'warn',
		}
	}
};

export default config;
