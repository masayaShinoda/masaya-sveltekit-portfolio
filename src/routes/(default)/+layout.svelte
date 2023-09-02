<script>
	import { onMount } from 'svelte';
	import { themeStore } from '../../stores';
	import ReusableLayout from '$lib/components/ReusableLayout.svelte';

	onMount(() => {
		function set_theme(theme) {
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

<ReusableLayout>
	<slot />
</ReusableLayout>
