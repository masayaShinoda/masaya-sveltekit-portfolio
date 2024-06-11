<script lang="ts">
	import { onMount } from 'svelte';
	import { themeStore } from '$lib/stores';
	import Header from '$lib/components/layout/Header.svelte';

	// handle theme
	onMount(() => {
		function set_theme(theme: string) {
			localStorage.setItem('theme', theme);
			themeStore.set(theme);
			if (theme === 'dark') {
				document.documentElement.className = 'dark';
			} else {
				document.documentElement.className = 'light';
			}
			// console.log(`set_theme() ran, localStorage theme is: ${localStorage.getItem('theme')}`)
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

<Header />
<main class="min-h-[1440px]">
	<div class="py-28 mx-auto flex w-full flex-col md:py-40">
		<slot />
	</div>
</main>
