<script lang="ts">
	import { onMount } from 'svelte';
	import { themeStore } from '../../stores';

	import '$lib/styles/global.css';
	import '$lib/styles/components.css';

	import Nav from '$lib/components/Nav.svelte';
	// vercel analytics
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	export let custom_nav = false;
	export let language = 'en';

	// handle theme
	onMount(() => {
		function set_theme(theme: string) {
			localStorage.setItem('theme', theme);
			themeStore.set(theme);
			document.body.dataset.theme = theme;
		}

		// check localStorage for theme pref
		const stored_theme = localStorage.getItem('theme');

		// set theme on layout mount
		if (stored_theme) {
			if (stored_theme === 'dark') {
				set_theme('dark');
			} else {
				set_theme('light');
			}
		} else {
			// no theme pref in localStorage
			// check sys theme pref
			const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (prefers_dark) {
				set_theme('dark');
			} else {
				set_theme('light');
			}
		}

		themeStore.subscribe((value) => {
			set_theme(value);
		});
	});

</script>

{#if custom_nav}
	<slot name="custom_nav" />
{:else}
	<Nav />
{/if}
<main lang={language}>
	<slot><!-- optional fallback --></slot>
</main>
