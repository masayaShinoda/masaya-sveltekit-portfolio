<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	// Check for saved user theme preference or system preference on page load
	if (typeof window !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<Header />
<slot />
