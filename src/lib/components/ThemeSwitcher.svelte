<script>
	function setLightTheme() {
		document.documentElement.classList.remove('dark');
		localStorage.setItem('theme', 'light');
	}

	function setDarkTheme() {
		document.documentElement.classList.add('dark');
		localStorage.setItem('theme', 'dark');
	}

	function setSystemTheme() {
		localStorage.removeItem('theme');
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<button on:click={setLightTheme}>Light Mode</button>
<button on:click={setDarkTheme}>Dark Mode</button>
<button on:click={setSystemTheme}>System Preference</button>
